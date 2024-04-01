import cx from "classnames";
import Button from "./Button";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/16/solid";
import { ICON_CLASSES } from "./iconClasses";

type PromptDisplayProps = {
  title: string;
  lock: boolean;
  setLock: (lock: boolean) => void;
  prompt: string | null;
  fallback: string;
};

const PromptDisplay: React.FC<PromptDisplayProps> = ({
  title,
  lock,
  setLock,
  prompt,
  fallback,
}) => {
  return (
    <div className={cx("gap-4", "flex")}>
      <Button
        className="-translate-y-3"
        onClick={() => setLock(!lock)}
        toggle={lock}
        showToggle={false}
        size="sm"
      >
        {lock ? (
          <LockClosedIcon className={ICON_CLASSES.SM} />
        ) : (
          <LockOpenIcon className={ICON_CLASSES.SM} />
        )}
      </Button>
      <div
        className={cx(
          "flex",
          "flex-col",
          "sm:flex-row",
          "sm:items-center",
          "w-full",
          "px-2",
          "py-1",
          "rounded-lg",
          "border-2",
          "border-gray-500"
        )}
      >
        <div className="font-bold sm:w-1/3">{title}:</div>{" "}
        <div className="sm:w-2/3">{prompt || fallback}</div>
      </div>
    </div>
  );
};

export default PromptDisplay;
