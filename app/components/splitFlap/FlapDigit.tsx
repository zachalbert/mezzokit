import React from "react";
import { Flap } from "./Flap";
import styles from "./styles.css";

type FlapDigitProps = {
  className?: string;
  value: string;
  prevValue: string;
  final: boolean;
  mode?: string;
};

export const FlapDigit: React.FC<FlapDigitProps> = ({
  className,
  value,
  prevValue,
  final,
  mode,
  ...restProps
}) => {
  return (
    <div className={styles.digit} data-kind="digit" data-mode={mode}>
      <Flap {...restProps}>{value}</Flap>
      <Flap bottom {...restProps}>
        {prevValue}
      </Flap>
      <Flap key={`top-${prevValue}`} animated final={final} {...restProps}>
        {prevValue}
      </Flap>
      {final && (
        <Flap key={`bottom-${value}`} bottom animated final {...restProps}>
          {value}
        </Flap>
      )}
    </div>
  );
};
