import React, { useState, useEffect } from "react";
import cx from "classnames";
import Button from "./Button";
import {
  MinusIcon,
  PauseIcon,
  PlayIcon,
  PlusIcon,
  StopIcon,
} from "@heroicons/react/16/solid";
import { ICON_CLASSES } from "./iconClasses";

const Timer: React.FC = () => {
  const [time, setTime] = useState(1200); // Starting time in seconds (300 seconds = 5 minutes)
  const [timerActive, setTimerActive] = useState(false);
  const [initialTime, setInitialTime] = useState(1200);
  const [timerHasStarted, setTimerHasStarted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (timerActive) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else if (!timerActive && time !== 0) {
      clearInterval(interval!);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, time]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleIncrement = () => {
    setTime((prevTime) => (prevTime + 300 <= 3600 ? prevTime + 300 : prevTime));
    if (!timerActive) {
      setInitialTime((prevTime) =>
        prevTime + 300 <= 3600 ? prevTime + 300 : prevTime
      );
    }
  };

  const handleDecrement = () => {
    setTime((prevTime) => (prevTime - 300 >= 300 ? prevTime - 300 : 300));
    if (!timerActive) {
      setInitialTime((prevTime) =>
        prevTime - 300 >= 300 ? prevTime - 300 : 300
      );
    }
  };

  const handlePlay = () => {
    if (!timerHasStarted) setTimerHasStarted(true);
    setTimerActive(true);
  };

  const handlePause = () => {
    setTimerActive(false);
  };

  const handleStop = () => {
    setTimerActive(false);
    setTimerHasStarted(false);
    setTime(initialTime);
  };

  return (
    <div className={cx("flex", "flex-col", "sm:flex-row", "mx-auto", "gap-4")}>
      <div className="flex">
        <Button
          color="emerald"
          segment="left"
          onClick={handlePlay}
          toggle={timerActive}
          showToggle={false}
        >
          <PlayIcon className={ICON_CLASSES.MD} />
        </Button>
        <Button
          color="amber"
          segment="mid"
          onClick={handlePause}
          toggle={!timerActive && timerHasStarted}
          showToggle={false}
        >
          <PauseIcon className={ICON_CLASSES.MD} />
        </Button>
        <Button color="rose" segment="right" onClick={handleStop}>
          <StopIcon className={ICON_CLASSES.MD} />
        </Button>
      </div>
      <div className="flex">
        <Button
          segment="left"
          onClick={handleDecrement}
          toggle={timerHasStarted}
          showToggle={false}
          disabled={timerHasStarted}
        >
          <MinusIcon className={ICON_CLASSES.MD} />
        </Button>
        <div
          className={cx(
            "bg-gray-800",
            "text-lime-400",
            "px-4",
            "sm:px-8",
            "flex",
            "items-center",
            "translate-y-2",
            "py-6",
            "leading-4",
            "border-2",
            "border-black",
            "font-mono",
            "text-3xl"
          )}
        >
          {formatTime(time)}
        </div>
        <Button
          segment="right"
          onClick={handleIncrement}
          toggle={timerHasStarted}
          showToggle={false}
          disabled={timerHasStarted}
        >
          <PlusIcon className={ICON_CLASSES.MD} />
        </Button>
      </div>
    </div>
  );
};

export default Timer;
