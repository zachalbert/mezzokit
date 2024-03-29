"use client";
import cx from "classnames";
import Button from "./components/Button";
import Panel from "./components/Panel";
import { ICON_CLASSES } from "./components/iconClasses";
import { XMarkIcon, CheckIcon } from "@heroicons/react/16/solid";

export default function Home() {
  const nope = () => {
    console.log("nah");
  };

  const yep = () => {
    console.log("yah");
  };

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
      <div className="perspective-600">
        <div className="transform rotate-x-30">
          <Panel direction="col" className="!gap-12">
            <div className="flex gap-8">
              <Button onClick={nope} color="rose">
                <XMarkIcon className={ICON_CLASSES} />
                <span>Nope</span>
              </Button>
              <Button onClick={yep} color="emerald">
                <CheckIcon className={ICON_CLASSES} />
                <span>Yep</span>
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
        </div>
      </div>
      <div className="prose mt-16">
        <h2>Button Colors</h2>
      </div>
      <div className="perspective-600">
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
