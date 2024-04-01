import React from "react";
import cx from "classnames";
import {
  ButtonColor,
  topLayerVariants,
  bottomLayerVariants,
} from "./buttonColors";
import ToggleIndicator from "./ToggleIndicator";

type ButtonWidth = "full" | "hug";

type ButtonSegment = "left" | "mid" | "right";

type ButtonProps = {
  size?: "sm" | "md";
  color?: ButtonColor;
  onClick?: () => void;
  width?: ButtonWidth;
  toggle?: boolean | undefined;
  showToggle?: boolean;
  segment?: ButtonSegment;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  size = "md",
  color = "purple",
  onClick,
  width = "hug",
  toggle,
  showToggle = true,
  segment,
  disabled = false,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        "relative",
        "group",
        "flex",
        size === "md" && "h-16",
        size === "sm" && "h-10",
        width === "full" && "w-full",
        width === "hug" && "flex-1",
        disabled && "pointer-events-none",
        className
      )}
      disabled={disabled}
    >
      <span
        id="top-layer"
        className={cx(
          topLayerVariants[color],
          "relative",
          "w-full",
          "h-full",
          "px-2",
          "sm:px-4",
          "flex",
          "items-center",
          "justify-center",
          !segment && "rounded-lg",
          segment === "left" && "rounded-l-lg",
          segment === "right" && "rounded-r-lg",
          "absolute",
          "top-0",
          "left-1/2",
          "-translate-x-1/2",
          "z-20",
          "border-2",
          "overflow-hidden",
          "shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.35)]",
          !toggle && "group-hover:translate-y-0.5",
          !toggle &&
            "group-hover:shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.25)]",
          "group-active:translate-y-2",
          "group-active:shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.15)]",
          toggle && "translate-y-2",
          toggle && "shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.15)]",

          "before:content-['']",
          "before:w-full",
          "before:h-full",
          "before:block",
          "before:absolute",
          "before:left-0",
          "before:top-0",
          "before:pointer-events-none",
          !segment && "before:rounded-lg",
          segment === "left" && "before:rounded-l-lg",
          segment === "right" && "before:rounded-r-lg",

          "before:bg-gradient-to-bl",
          !toggle && "before:from-transparent",
          !toggle && "before:to-white/30",
          !toggle && "before:group-hover:from-transparent",
          !toggle && "before:group-hover:to-white/20",
          !toggle && "before:group-active:from-black/20",
          !toggle && "before:group-active:to-white/10",
          toggle && "before:from-black/20",
          toggle && "before:to-white/10"
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
          {toggle !== undefined && showToggle && (
            <ToggleIndicator toggle={toggle} />
          )}
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
          !segment && "-ml-1",
          !segment && "px-0.5",
          "box-content",
          !segment && "rounded-xl",
          segment === "left" && "rounded-l-xl",
          segment === "right" && "rounded-r-xl",
          "absolute",
          "top-0",
          "left-0",
          "z-10",
          "translate-y-2",
          "border-2",
          "shadow-xl",
          !toggle && "group-hover:shadow-lg",
          "group-active:shadow",
          toggle && "shadow"
        )}
      ></span>
    </button>
  );
};

export default Button;
