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
import { useQueryState } from "nuqs";
import Link from "next/link";
import Speaker from "./components/Speaker";
import { Suspense } from "react";
import Timer from "./components/Timer";
import PromptDisplay from "./components/PromptDisplay";
// import SplitFlapDisplay from "react-split-flap-display";
// import {
//   NUMERIC,
//   ALPHA,
//   PUNCTUATION,
// } from "react-split-flap-display/constants";

export default function Page() {
  return (
    <Suspense>
      <Client />
    </Suspense>
  );
}

function Client() {
  const [isEasy, setIsEasy] = useState(true);
  const [isMedium, setIsMedium] = useState(false);
  const [isHard, setIsHard] = useState(false);
  const [challengeDesign, setChallengeDesign] = useQueryState("design");
  const [challengeFor, setChallengeFor] = useQueryState("for");
  const [challengeInOrderTo, setChallengeInOrderTo] =
    useQueryState("inOrderTo");
  const [challengeDevice, setChallengeDevice] = useQueryState("device");
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

    const getRandomElement = <T,>(array: T[], current: T): T => {
      let possibleChoices = array.filter((item) => item !== current);
      // If there are no other choices, return the current one
      if (possibleChoices.length === 0) return current;
      return possibleChoices[
        Math.floor(Math.random() * possibleChoices.length)
      ];
    };

    const getRandomAspect = (
      aspect: Record<Difficulty, string[]>,
      current: string
    ) => {
      // Choose a random difficulty from those allowed
      const difficulty = getRandomElement(difficulties, "easy"); // Assuming 'easy' as a placeholder for current difficulty
      // Filter the current choice and choose a random element from the chosen difficulty level for the aspect
      return getRandomElement(aspect[difficulty], current);
    };

    if (!lockDesign)
      setChallengeDesign(
        getRandomAspect(Challenge.design, challengeDesign || "")
      );
    if (!lockFor)
      setChallengeFor(getRandomAspect(Challenge.for, challengeFor || ""));
    if (!lockInOrderTo)
      setChallengeInOrderTo(
        getRandomAspect(Challenge.inOrderTo, challengeInOrderTo || "")
      );
    if (!lockDevice)
      setChallengeDevice(
        getRandomAspect(Challenge.device, challengeDevice || "")
      );
  }, [
    isEasy,
    isHard,
    isMedium,
    setChallengeDesign,
    setChallengeDevice,
    setChallengeFor,
    setChallengeInOrderTo,
    challengeDesign,
    challengeDevice,
    challengeFor,
    challengeInOrderTo,
    lockDesign,
    lockFor,
    lockInOrderTo,
    lockDevice,
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
        "p-4",
        "md:p-8",
        "lg:p-16",
        "xl:p-24",
        "bg-gray-300"
      )}
    >
      {/* <FlapDisplay
        chars={Presets.ALPHANUM + ",!"}
        length={13}
        value={"Hello, World!"}
      /> */}
      {/* <SplitFlapDisplay
        background="#000000"
        borderColor="#dddddd"
        borderWidth="1px"
        characterSet={NUMERIC}
        characterWidth="1em"
        fontSize="2em"
        minLength={5}
        padDirection="left"
        step={200}
        textColor="#dddddd"
        value="94103"
        withSound={false}
      /> */}
      <Panel
        angle={0}
        direction="col"
        className="w-[95.1%] text-gray-900 gap-8"
        roundedCorners="t"
      >
        <Timer />

        <div
          className={cx(
            "bg-gray-500/40",
            "p-6",
            "rounded-xl",
            "flex",
            "flex-col",
            "gap-4"
          )}
        >
          <PromptDisplay
            title="Design"
            lock={lockDesign}
            setLock={setLockDesign}
            prompt={challengeDesign}
            fallback="a thing"
          />
          <PromptDisplay
            title="For"
            lock={lockFor}
            setLock={setLockFor}
            prompt={challengeFor}
            fallback="an app"
          />
          <PromptDisplay
            title="In Order To"
            lock={lockInOrderTo}
            setLock={setLockInOrderTo}
            prompt={challengeInOrderTo}
            fallback="win more"
          />
          <PromptDisplay
            title="Device"
            lock={lockDevice}
            setLock={setLockDevice}
            prompt={challengeDevice}
            fallback="mobile"
          />
        </div>
      </Panel>

      <Panel
        direction="col"
        angle={20}
        className="gap-12"
        roundedCorners="none"
        width="w-[97.5%]"
        marginTop="-mt-[8px]"
        marginBottom="-mb-[5px]"
      >
        <div className={cx("flex", "flex-col", "sm:flex-row", "gap-6")}>
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
          <Button onClick={getChallenge} color="orange" width="full">
            <ArrowPathRoundedSquareIcon className={ICON_CLASSES.MD} />
            <span>Again!</span>
          </Button>
        </div>
      </Panel>

      <Panel angle={0} roundedCorners="b" className="justify-between">
        <Link href="/">
          <Button color="fuchsia">
            <HomeIcon className={ICON_CLASSES.MD} />
          </Button>
        </Link>
        <div className="w-24 self-center">
          <Speaker lines={4} />
        </div>
      </Panel>

      {/* <div className="prose mt-16">
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
      </div> */}
    </main>
  );
}
