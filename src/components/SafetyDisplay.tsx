import React, { useState, useEffect } from "react";
import "./SafetyDisplay.css";
import { updateJson } from "./SafteyChecker"; 

const SafetyDisplay = () => {
  const [safeties, setSafeties] = useState<string[]>([]);

  useEffect(() => {
    const apiUrl = "YOUR_API_URL_HERE";
    //const apiKey = process.env.REACT_APP_API_KEY;

    updateJson(apiUrl, setSafeties);

    const intervalId = setInterval(() => {
      updateJson(apiUrl, setSafeties);
    }, 300000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="safetycount">
        {safeties.length === 0 ? (
          <p>No.</p>
        ) : (
          <p>Yes! There have been {safeties.length} safeties!</p>
        )}
        <div>
          <ul>
            {safeties.map((safety, index) => (
              <li key={index}>{safety}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SafetyDisplay;
