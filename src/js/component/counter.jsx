// React imports
import React, { useState, useEffect } from "react";
import RenderDigit from "./renderdigit.jsx";

// Counter component 
const Counter = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isCounting, setIsCounting] = useState(true);
  const [areControlsDisplayed, setAreControlsDisplayed] = useState(true);

  // useEffect() to update counter. Accounts for time it takes to render, as 1 additonal ms 
  useEffect(() => {
    let intervalId = null;
    if (isCounting) {
       intervalId = setInterval(() => {
        setElapsedTime( elapsedTime => elapsedTime + 11);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isCounting]);

  // 2 strings for milliseconds and seconds
  let elapsedTimeString = elapsedTime.toString().padStart(9, "0");
  let millisecondsString = elapsedTimeString.slice(-3);
  let secondsString = elapsedTimeString.slice(0, -3);

  // JSX code
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-center">
        <div className="mx-3">
          <RenderDigit cellSize={18} gap={1} digit={parseInt(secondsString[0])} />
        </div>
        <div className="mx-3">
          <RenderDigit cellSize={18} gap={1} digit={parseInt(secondsString[1])} />
        </div>
        <div className="mx-3">
          <RenderDigit cellSize={18} gap={1} digit={parseInt(secondsString[2])} />
        </div>
        <div className="mx-3">
          <RenderDigit cellSize={18} gap={1} digit={parseInt(secondsString[3])} />
        </div>
        <div className="mx-3">
          <RenderDigit cellSize={18} gap={1} digit={parseInt(secondsString[4])} />
        </div>
        <div className="mx-3">
          <RenderDigit cellSize={18} gap={1} digit={parseInt(secondsString[5])} />
        </div>
        <div className="mx-3">
          <RenderDigit cellSize={9} gap={1} digit={parseInt(millisecondsString[0])} />
        </div>
        <div className="mx-3">
          <RenderDigit cellSize={9} gap={1} digit={parseInt(millisecondsString[1])} />
        </div>
        <div className="mx-3">
          <RenderDigit cellSize={9} gap={1} digit={parseInt(millisecondsString[2])} />
        </div>
        <div
          className={`badge bg-success`}
          style={{ height: "23px" }}>
          TIMER
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div className="d-flex flex-row align-items-center">
          <div className="mx-3">
            <button
              className="btn btn-dark"
              onClick={() => setAreControlsDisplayed(!areControlsDisplayed)}>
              {areControlsDisplayed ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13Z"
                  />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="mx-3">
            <button
              className="btn btn-dark"
              style={{ visibility: areControlsDisplayed ? "visible" : "hidden" }}
              onClick={() => {
                setIsCounting(!isCounting);
              }}>
              {isCounting ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M8 19V5l11 7l-11 7Zm2-7Zm0 3.35L15.25 12L10 8.65v6.7Z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="mx-3">
            <button
              className="btn btn-dark reset"
              style={{ visibility: areControlsDisplayed ? "visible" : "hidden" }}
              onClick={() => {
                setElapsedTime(0);
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M14.5 3.5c2.414 1.377 4 4.022 4 7a8 8 0 1 1-8-8" />
                  <path d="M14.5 7.5v-4h4" />
                </g>
              </svg>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Counter;
