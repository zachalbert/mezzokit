import React, { useEffect, useState } from "react";
import { FlapStack } from "./FlapStack";
import { Presets } from "./Presets";

enum Modes {
  Numeric = "num",
  Alphanumeric = "alpha",
  Words = "words",
}

type FlapDisplayProps = {
  id?: string;
  className?: string;
  value: string;
  chars?: string;
  words?: string[];
  length?: number;
  padChar?: string;
  padMode?: "auto" | "start" | "end";
  render?: (props: any) => JSX.Element; // Consider defining a more specific type
};

type RenderProps = {
  id?: string;
  className?: string;
  children: React.ReactNode[];
} & Omit<FlapDisplayProps, "render">;

const splitChars = (v: string): string[] =>
  v.split("").map((c) => c.toUpperCase());

const padValue = (
  v: string,
  length?: number,
  padChar: string = " ",
  padStart: boolean = false
): string => {
  const paddedLength = length ?? v.length; // Default to the length of v if length is not provided
  return padStart
    ? v.padStart(paddedLength, padChar)
    : v.padEnd(paddedLength, padChar);
};

export const FlapDisplay: React.FC<FlapDisplayProps> = ({
  id,
  className,
  value,
  chars = Presets.NUM,
  words,
  length,
  padChar = " ",
  padMode = "auto",
  render,
  ...restProps
}) => {
  const [stack, setStack] = useState<string[]>([]);
  const [mode, setMode] = useState<Modes>(Modes.Numeric);
  const [digits, setDigits] = useState<string[]>([]);
  const [children, setChildren] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (words && words.length) {
      setStack(words);
      setMode(Modes.Words);
    } else {
      setStack(splitChars(chars));
      setMode(chars.match(/[a-z]/i) ? Modes.Alphanumeric : Modes.Numeric);
    }
  }, [chars, words]);

  useEffect(() => {
    if (words && words.length) {
      setDigits([value]);
    } else {
      const padStart =
        padMode === "auto"
          ? !!value.match(/^[0-9.,+-]*$/)
          : padMode === "start";
      setDigits(splitChars(padValue(value, length, padChar, padStart)));
    }
  }, [value, chars, words, length, padChar, padMode]);

  useEffect(() => {
    setChildren(
      digits.map((digit, i) => (
        <FlapStack
          key={i.toString()}
          stack={stack}
          value={digit}
          timing={30}
          {...restProps}
        />
      ))
    );
  }, [digits, stack, mode, restProps]);

  return render ? (
    render({ id, className, children, ...restProps })
  ) : (
    <div id={id} className={className} aria-hidden="true" aria-label={value}>
      {children}
    </div>
  );
};
