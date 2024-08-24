import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const TypingEffect = ({ text, speed = 70 }) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText((prev) => prev + text[index]);
      index += 1;
      if (index >= text.length) {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return <div className="text-gray-700 leading-relaxed">{displayText}</div>;
};

const Result = () => {
  const { state } = useLocation();
  const [imageUrl, setImageUrl] = useState(null);
  const [infoText, setInfoText] = useState("");
  const [audioPath, setAudioPath] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (state?.story) {
        setInfoText(state.story);
        setAudioPath(state.audioPath);
        setImageUrl(state.image);
      }
    };

    fetchData();
  }, [state]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      {/* Container for displaying the image */}
      {imageUrl && (
        <div className="w-full max-w-4xl mb-6">
          <img
            src={imageUrl}
            alt="Result"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Container for displaying the story text with typing effect */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Story</h1>
        <div className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: infoText }}>
        </div>
        <TypingEffect text={infoText} speed={30} />
      </div>

      {/* Audio Player for the generated audio */}
      {audioPath && (
        <div className="w-full max-w-4xl mt-6">
          <audio controls className="w-full bg-gray-200 rounded-lg shadow-md">
            <source src={audioPath} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default Result;