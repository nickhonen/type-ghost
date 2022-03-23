import { useEffect, useState } from "react";

function useKeyPress(targetKey) {
    // state to detect if key is pressed
    const [keyPressed, setKeyPressed] = useState(false);
    // If pressed key is target key, set true
    function downHandler({ key }) {
        // later, add functionality to add a red box so ppl know they messed up
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }
    // If released key is target key, set false
    function upHandler({ key }) {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };
    
    // Add event listeners
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
          };
        }, []); // Empty array ensures that effect is only run on mount and unmount
        return keyPressed;
      }