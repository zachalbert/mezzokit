import React from "react";
import cx from "classnames";
import {
  ButtonColor,
  topLayerVariants,
  bottomLayerVariants,
} from "./buttonColors";

type ButtonProps = {
  color?: ButtonColor;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  color = "purple",
  onClick,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cx("relative", "w-32", "h-16", "group", className)}
    >
      <span
        id="top-layer"
        className={cx(
          topLayerVariants[color],
          "relative",
          "w-[96%]",
          "h-full",
          "flex",
          "items-center",
          "justify-center",
          "rounded-lg",
          "absolute",
          "top-0",
          "left-1/2",
          "-translate-x-1/2",
          "z-20",
          "group-hover:translate-y-0.5",
          "group-active:translate-y-2",
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
          "before:rounded-lg",

          "before:bg-gradient-to-bl",
          "before:from-transparent",
          "before:to-white/30",
          "before:group-hover:from-transparent",
          "before:group-hover:to-white/20",
          "before:group-active:from-black/20",
          "before:group-active:to-white/10"
        )}
      >
        <span
          className={cx(
            "drop-shadow-[0_-2px_0px_rgba(0,0,0,0.15)]",
            "uppercase",
            "text-white/90",
            "font-extrabold",
            "font-mono",
            "tracking-widest",
            "flex",
            "items-center",
            "justify-center",
            "gap-2"
          )}
        >
          {children}
        </span>
      </span>
      <span
        id="bottom-layer"
        className={cx(
          bottomLayerVariants[color],
          "bg-gradient-to-b",
          "via-75%",
          "w-full",
          "h-full",
          "flex",
          "rounded-xl",
          "absolute",
          "top-0",
          "left-0",
          "z-10",
          "translate-y-3",
          "border-2",
          "shadow-xl",
          "group-hover:shadow-lg",
          "group-active:shadow"
        )}
      ></span>
    </button>
  );
};

export default Button;
