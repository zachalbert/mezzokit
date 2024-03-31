import cx from "classnames";

type SpeakerProps = {
  lines?: number;
};

const Speaker: React.FC<SpeakerProps> = ({ lines = 1 }) => {
  const lineElements = Array.from({ length: lines }, (_, index) => (
    <div
      key={index}
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
  ));

  return <div className={cx("gap-2", "flex", "flex-col")}>{lineElements}</div>;
};

export default Speaker;
