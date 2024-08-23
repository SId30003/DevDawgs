import React, { useState } from "react";
import axios from "axios";

function MyComponent() {
  const [inputValue, setInputValue] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [infoText, setInfoText] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://api.example.com/endpoint", {
        userInput: inputValue,
      });

      // Assuming the response has 'image' and 'text' properties
      setImageUrl(response.data.image);
      setInfoText(response.data.text);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen p-4">
      {/* Container for displaying the image */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Result"
            className="max-w-full max-h-96 mb-4"
          />
        )}

        {/* Paragraph container for displaying text */}
        {infoText && <p className="text-gray-800 text-center">{infoText}</p>}
      </div>

      {/* Input field at the bottom */}
      <div className="flex justify-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your query..."
          className="max-w-96 p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleSubmit}
          className="ml-2 p-2 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default MyComponent;
