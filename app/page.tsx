"use client";
import cx from "classnames";
import Button from "./components/Button";
import Panel from "./components/Panel";
import { ICON_CLASSES } from "./components/iconClasses";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import { Difficulty, Challenge } from "./components/challenges";

export default function Home() {
  const [isEasy, setIsEasy] = useState(true);
  const [isMedium, setIsMedium] = useState(false);
  const [isHard, setIsHard] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState({
    design: "",
    for: "",
    inOrderTo: "",
    device: "",
  });

  const getChallenge = () => {
    const difficulties: Difficulty[] = [];
    if (isEasy || (!isEasy && !isMedium && !isHard)) difficulties.push("easy");
    if (isMedium) difficulties.push("medium");
    if (isHard) difficulties.push("hard");

    const getRandomElement = <T,>(array: T[]): T => {
      return array[Math.floor(Math.random() * array.length)];
    };

    const getRandomAspect = (aspect: Record<Difficulty, string[]>) => {
      // Choose a random difficulty from those allowed
      const difficulty = getRandomElement(difficulties);
      // Choose a random element from the chosen difficulty level for the aspect
      return aspect[difficulty][
        Math.floor(Math.random() * aspect[difficulty].length)
      ];
    };

    const design = getRandomAspect(Challenge.design);
    const forChallenge = getRandomAspect(Challenge.for);
    const inOrderTo = getRandomAspect(Challenge.inOrderTo);
    const device = getRandomAspect(Challenge.device);

    setSelectedChallenge({
      design: design,
      for: forChallenge,
      inOrderTo: inOrderTo,
      device: device,
    });
  };

  useEffect(() => {
    getChallenge();
  }, []);

  return (
    <main
      className={cx(
        "flex",
        "min-h-screen",
        "flex-col",
        "items-center",
        "justify-center",
        "p-24",
        "bg-gray-300"
      )}
    >
      <Panel angle={0} className="w-[86.5%]" roundedCorners="t">
        <div>
          <strong>Design:</strong> <span>{selectedChallenge.design}</span>
        </div>
        <div>
          <strong>Design for:</strong> <span>{selectedChallenge.for}</span>
        </div>
        <div>
          <strong>In order to:</strong>{" "}
          <span>{selectedChallenge.inOrderTo}</span>
        </div>
        <div>
          <strong>Device:</strong> <span>{selectedChallenge.device}</span>
        </div>
      </Panel>
      <Panel
        direction="col"
        angle={45}
        className="gap-12"
        roundedCorners="none"
      >
        <div className="flex gap-8">
          <div className="flex">
            <Button
              onClick={() => setIsEasy(!isEasy)}
              color="emerald"
              toggle={isEasy}
              segment="left"
            >
              Easy
            </Button>
            <Button
              onClick={() => setIsMedium(!isMedium)}
              color="sky"
              toggle={isMedium}
              segment="mid"
            >
              Medium
            </Button>
            <Button
              onClick={() => setIsHard(!isHard)}
              color="violet"
              toggle={isHard}
              segment="right"
            >
              Hard
            </Button>
          </div>
          <Button onClick={getChallenge} color="orange">
            <ArrowPathRoundedSquareIcon className={ICON_CLASSES} />
            <span>New Challenge</span>
          </Button>
        </div>
        <div className={cx("mx-auto", "w-16", "gap-2", "flex", "flex-col")}>
          <div
            className={cx(
              "bg-gradient-to-b",
              "from-gray-900",
              "to-gray-600",
              "w-full",
              "h-3",
              "rounded-full",
              "border-2",
              "border-gray-500",
              "border-b-gray-300"
            )}
          ></div>
        </div>
      </Panel>
      <Panel angle={0} roundedCorners="b">
        <Button color="fuchsia">Yay</Button>
      </Panel>

      <div className="prose mt-16">
        <h2>Button Colors</h2>
      </div>
      <div className="perspective-1000">
        <div className="transform rotate-x-30">
          <div className="flex flex-wrap gap-8 max-w-lg justify-center">
            <Button color="gray">gray</Button>
            <Button color="red">red</Button>
            <Button color="orange">orange</Button>
            <Button color="amber">amber</Button>
            <Button color="yellow">yellow</Button>
            <Button color="lime">lime</Button>
            <Button color="green">green</Button>
            <Button color="emerald">emerald</Button>
            <Button color="teal">teal</Button>
            <Button color="cyan">cyan</Button>
            <Button color="sky">sky</Button>
            <Button color="blue">blue</Button>
            <Button color="indigo">indigo</Button>
            <Button color="violet">violet</Button>
            <Button color="purple">purple</Button>
            <Button color="fuchsia">fuchsia</Button>
            <Button color="pink">pink</Button>
            <Button color="rose">rose</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
