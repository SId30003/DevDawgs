import requests
import json
from dotenv import load_dotenv
import os
from flask import Flask, request, jsonify, send_from_directory
import html
from flask_cors import CORS

load_dotenv()
API_KEY = os.getenv('API_KEY')
XI_API_KEY = os.getenv('XI_API_KEY')
VOICE_ID = os.getenv('VOICE_ID')

app = Flask(__name__)
CORS(app)

HISTORY_FILE = "history.txt"
OUTPUT_PATH = "assets/output.mp3"


def save_to_history(user_info):
    with open(HISTORY_FILE, "a") as file:
        file.write(json.dumps(user_info) + "\n")


def generate_story(user_info):
    url = "https://api.anthropic.com/v1/messages"
    headers = {
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json'
    }
    data = {
        "model": "claude-3-sonnet-20240229",
        "max_tokens": 1024,
        "messages": [
            {
                "role": "user",
                "content": (
                    f"Based on the following user information: {user_info}, generate an educational story."
                )
            }
        ]
    }

    response = requests.post(url, headers=headers, data=json.dumps(data))

    if response.status_code == 200:
        try:
            content = response.json()["content"][0]["text"]
            content = content.replace("**", "<b>").replace("**", "</b>")
            bullet_points = content.split("\n")
            formatted_story = ''.join(f"<p>{html.escape(point.strip())}</p>" for point in bullet_points if point.strip())
            return formatted_story
        except (KeyError, IndexError):
            return "<p>Sorry, something went wrong while generating the story.</p>"
    else:
        return "<p>Sorry, the story generation service is currently unavailable.</p>"

def generate_audio(story_text):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}/stream"
    headers = {
        'xi-api-key': XI_API_KEY,
        'Content-Type': 'application/json'
    }
    data = {
        "text": story_text,
        "voice_id": VOICE_ID,
        "model_id": "eleven_multilingual_v2",
        "stability": 0.5,
        "similarity_boost": 0.8,
        "style": 0.0,
        "use_speaker_boost": True
    }

    response = requests.post(url, headers=headers, json=data)
    
    if response.status_code == 200:
        with open(OUTPUT_PATH, 'wb') as f:
            f.write(response.content)
        return f"/assets/output.mp3"  # Return relative path from static route
    else:
        print("Error generating audio:", response.status_code, response.text)
        return None

@app.route('/api/query', methods=['POST'])
def query():
    user_info = request.json['userInput'] 
    save_to_history(user_info)

    story_text = generate_story(user_info)
    
    audio_path = generate_audio(story_text)

    return jsonify({"story": story_text, "audio_path": audio_path})

@app.route('/assets/<path:filename>')
def static_files(filename):
    return send_from_directory('assets', filename)

if __name__ == '__main__':
    app.run(debug=True)
