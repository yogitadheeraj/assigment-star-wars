import React, { useState, useEffect } from 'react';
import "./index.css";
const Timer = () => {
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setSecondsElapsed(secondsElapsed + 1), 1000);
        return () => clearInterval(interval);
    }, [secondsElapsed]);
    return (
        <div className="timer"> (Time Elapsed: {secondsElapsed} seconds)</div>
    );
}
export default Timer;