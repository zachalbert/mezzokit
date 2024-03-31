"use client";
import cx from "classnames";
import Button from "./components/Button";
import Panel from "./components/Panel";
import { ICON_CLASSES } from "./components/iconClasses";
import {
  ArrowPathRoundedSquareIcon,
  HomeIcon,
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/react/16/solid";
import { useCallback, useEffect, useState } from "react";
import { Difficulty, Challenge } from "./components/challenges";
import { useSearchParams, useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import Link from "next/link";
import Speaker from "./components/Speaker";

export default function Home() {
  const router = useRouter();
  const [searchParams] = useSearchParams();
  const [isEasy, setIsEasy] = useState(true);
  const [isMedium, setIsMedium] = useState(false);
  const [isHard, setIsHard] = useState(false);
  const [challengeDesign, setChallengeDesign] = useQueryState("design");
  const [challengeFor, setChallengeFor] = useQueryState("for");
  const [challengeInOrderTo, setChallengeInOrderTo] =
    useQueryState("inOrderTo");
  const [challengeDevice, setChallengeDevice] = useQueryState("on");
  const [lockDesign, setLockDesign] = useState(false);
  const [lockFor, setLockFor] = useState(false);
  const [lockInOrderTo, setLockInOrderTo] = useState(false);
  const [lockDevice, setLockDevice] = useState(false);

  // Force easy mode if no difficulties are selected
  useEffect(() => {
    if (!isEasy && !isMedium && !isHard) {
      setIsEasy(true);
    }
  }, [isEasy, isMedium, isHard]);

  // Get a random challenge
  const getChallenge = useCallback(() => {
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

    setChallengeDesign(getRandomAspect(Challenge.design));
    setChallengeFor(getRandomAspect(Challenge.for));
    setChallengeInOrderTo(getRandomAspect(Challenge.inOrderTo));
    setChallengeDevice(getRandomAspect(Challenge.device));
  }, [
    isEasy,
    isHard,
    isMedium,
    setChallengeDesign,
    setChallengeDevice,
    setChallengeFor,
    setChallengeInOrderTo,
  ]);

  // If any params are empty (such as on initial load), get a new challenge
  useEffect(() => {
    if (
      challengeDesign === null ||
      challengeDesign === "" ||
      challengeFor === null ||
      challengeFor === "" ||
      challengeInOrderTo === null ||
      challengeInOrderTo === "" ||
      challengeDevice === null ||
      challengeDevice === ""
    ) {
      getChallenge();
    }
  }, [
    challengeDesign,
    challengeFor,
    challengeInOrderTo,
    challengeDevice,
    getChallenge,
  ]);

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
      <Panel
        angle={0}
        direction="col"
        className="w-[92.5%] text-gray-900 gap-8"
        roundedCorners="t"
      >
        <div className="gap-6 flex">
          <Button
            color="gray"
            className="grow-0"
            onClick={() => setLockDesign(!lockDesign)}
            toggle={lockDesign}
          >
            {lockDesign ? (
              <LockClosedIcon className={ICON_CLASSES} />
            ) : (
              <LockOpenIcon className={ICON_CLASSES} />
            )}
          </Button>
          <div className="flex items-center w-full">
            <div className="font-bold flex-1">Design:</div>{" "}
            <div className="flex-1">{challengeDesign || "a thing"}</div>
          </div>
        </div>
        <div className="gap-6 flex">
          <Button
            color="gray"
            className="grow-0"
            onClick={() => setLockFor(!lockFor)}
            toggle={lockFor}
          >
            {lockFor ? (
              <LockClosedIcon className={ICON_CLASSES} />
            ) : (
              <LockOpenIcon className={ICON_CLASSES} />
            )}
          </Button>
          <div className="flex items-center w-full">
            <div className="font-bold flex-1">For:</div>{" "}
            <div className="flex-1">{challengeFor || "an app"}</div>
          </div>
        </div>
        <div className="gap-6 flex">
          <Button
            color="gray"
            className="grow-0"
            onClick={() => setLockInOrderTo(!lockInOrderTo)}
            toggle={lockInOrderTo}
          >
            {lockInOrderTo ? (
              <LockClosedIcon className={ICON_CLASSES} />
            ) : (
              <LockOpenIcon className={ICON_CLASSES} />
            )}
          </Button>
          <div className="flex items-center w-full">
            <div className="font-bold flex-1">In order to:</div>{" "}
            <div className="flex-1">{challengeInOrderTo || "win"}</div>
          </div>
        </div>
        <div className="gap-6 flex">
          <Button
            color="gray"
            className="grow-0"
            onClick={() => setLockDevice(!lockDevice)}
            toggle={lockDevice}
          >
            {lockDevice ? (
              <LockClosedIcon className={ICON_CLASSES} />
            ) : (
              <LockOpenIcon className={ICON_CLASSES} />
            )}
          </Button>
          <div className="flex items-center w-full">
            <div className="font-bold flex-1">On:</div>{" "}
            <div className="flex-1">{challengeDevice || "computer"}</div>
          </div>
        </div>
      </Panel>

      <Panel
        direction="col"
        angle={30}
        className="gap-12"
        roundedCorners="none"
        width="w-[96.25%]"
        marginTop="-mt-[14px]"
        marginBottom="-mb-[9px]"
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
      </Panel>

      <Panel angle={0} roundedCorners="b" className="justify-between">
        <Link href="/">
          <Button color="fuchsia">
            <HomeIcon className={ICON_CLASSES} />
          </Button>
        </Link>
        <div className="w-24 self-center">
          <Speaker lines={3} />
        </div>
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
