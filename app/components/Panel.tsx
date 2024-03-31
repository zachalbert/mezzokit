import React from "react";
import cx from "classnames";

type Angle = 0 | 5 | 10 | 15 | 20 | 30 | 45 | 60;

type BorderRadii =
  | "all"
  | "none"
  | "tl"
  | "t"
  | "tr"
  | "r"
  | "br"
  | "b"
  | "bl"
  | "l";

type PanelProps = {
  direction?: "row" | "col";
  angle?: Angle;
  width?: string;
  marginTop?: string;
  marginBottom?: string;
  roundedCorners?: BorderRadii;
  children: React.ReactNode;
  className?: string;
};

const Panel: React.FC<PanelProps> = ({
  direction = "row",
  angle = 30,
  // width, marginTop, and marginBottom must be manually configured
  // depending on the angle of the panel. Kind of annoying!
  width = "w-[100%]",
  marginTop = "-mt-[0px]",
  marginBottom = "-mt-[0px]",
  roundedCorners = "all",
  children,
  className,
}) => {
  const angleVariants: Record<Angle, string> = {
    0: "rotate-x-0",
    5: "rotate-x-5",
    10: "rotate-x-10",
    15: "rotate-x-15",
    20: "rotate-x-20",
    30: "rotate-x-30",
    45: "rotate-x-45",
    60: "rotate-x-60",
  };

  const cornerVariants: Record<BorderRadii, string> = {
    all: "rounded-lg",
    none: "rounded-sm",
    tl: "rounded-tl-lg",
    t: "rounded-t-lg",
    tr: "rounded-tr-lg",
    r: "rounded-r-lg",
    br: "rounded-br-lg",
    b: "rounded-b-lg",
    bl: "rounded-bl-lg",
    l: "rounded-l-lg",
  };

  return (
    <div
      className={cx(
        "perspective-1000",
        "mx-auto",
        width,
        marginTop,
        marginBottom
      )}
    >
      <div className={cx("transform", "relative", angleVariants[angle])}>
        <div
          className={cx(
            "z-10",
            "relative",
            "bg-gray-400",
            "border-gray-500",
            "group-hover:border-gray-600",
            "group-active:border-gray-700",
            "px-12",
            "pt-8",
            "pb-12",
            "mx-auto",
            "flex",
            direction === "col" && "flex-col",
            "grow-0",
            "gap-0",
            "border-2",
            "overflow-hidden",
            "shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.35)]",
            "group-hover:shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.25)]",
            "group-active:shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.15)]",

            "before:content-['']",
            "before:w-full",
            "before:h-full",
            "before:block",
            "before:absolute",
            "before:left-0",
            "before:top-0",
            "before:pointer-events-none",
            "before:rounded-t-lg",

            "before:bg-gradient-to-bl",
            "before:from-transparent",
            "before:to-white/30",
            "before:group-hover:from-transparent",
            "before:group-hover:to-white/20",
            "before:group-active:from-black/20",
            "before:group-active:to-white/10",

            cornerVariants[roundedCorners],
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Panel;
