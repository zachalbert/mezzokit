import React from "react";
import cx from "classnames";

type PanelProps = {
  direction?: "row" | "col";
  children: React.ReactNode;
  className?: string;
};

const Panel: React.FC<PanelProps> = ({
  direction = "row",
  children,
  className,
}) => {
  return (
    <div className="relative">
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
          "flex",
          direction === "col" && "flex-col",
          "grow-0",
          "gap-0",
          "rounded-lg",
          "border-2",
          "border-b-8",
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

          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Panel;
