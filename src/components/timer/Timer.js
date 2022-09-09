import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Timer.css";

function Timer({ setStopCount, date }) {
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerHour, setTimerHour] = useState("00");
  const [timerDays, setTimerDays] = useState("00");
  const [countdownEnd, setCountdownEnd] = useState(false);

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date(date ? date : "00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
        setCountdownEnd(true);
        setStopCount(true);
      } else {
        setTimerDays(days);
        setTimerHour(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <div className="timer">
        {!countdownEnd && (
          <div className="timer__show">
            <p>
              Time Left:
              <span>
                {timerHour}h : {timerMinutes}m : {timerSeconds}s
              </span>
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Timer;
