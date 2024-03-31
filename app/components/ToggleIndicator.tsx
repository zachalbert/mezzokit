import cx from "classnames";

type ToggleIndicatorProps = {
  toggle: boolean;
};

const ToggleIndicator: React.FC<ToggleIndicatorProps> = ({ toggle }) => {
  return (
    <div className={cx("w-4", "h-4", "relative")}>
      <div
        className={cx(
          "w-3/4",
          "h-3/4",
          "rounded-full",
          "z-20",
          "absolute",
          "left-1/2",
          "-translate-x-1/2",
          "top-0",
          "bg-gradient-to-b",
          !toggle && "opacity-40",
          !toggle && "from-lime-800",
          !toggle && "to-lime-700",
          toggle && "opacity-80",
          toggle && "from-lime-300",
          toggle && "to-lime-400",
          toggle && "shadow-[0_0_8px_1px_rgba(0,255,0,0.9)]",

          "before:content-['']",
          "before:block",
          "before:absolute",
          "before:left-1/2",
          "before:top-0.5",
          "before:w-1",
          "before:h-1",
          "before:rounded-full",
          "before:bg-white",
          !toggle && "before:opacity-20",
          toggle && "before:opacity-100",

          "after:content-['']",
          "after:block",
          "after:absolute",
          "after:left-1/4",
          "after:top-1/2",
          "after:w-0.5",
          "after:h-0.5",
          "after:rounded-full",
          "after:bg-white",
          !toggle && "after:opacity-20",
          toggle && "after:opacity-100"
        )}
      ></div>
      <div
        className={cx(
          "w-full",
          "h-full",
          "z-10",
          "absolute",
          "left-0",
          "top-0",
          "translate-y-0.5",
          "bg-lime-900",
          "rounded-full",
          "opacity-75"
        )}
      ></div>
    </div>
  );
};

export default ToggleIndicator;
