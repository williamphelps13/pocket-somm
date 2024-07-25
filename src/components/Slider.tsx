import kebabCase from "lodash/kebabCase";
import { useMemo } from "react";
import ReactSlider from "react-slider";
import { twMerge } from "tailwind-merge";

import Label from "./Label";

type Marks = {
  [key: number]: string;
};

type SliderProps = {
  cId: string;
  className?: string;
  isHidden?: boolean;
  isPearling?: boolean;
  label?: string;
  marks: Marks;
  onChange?: (value: number[]) => void;
  step: number;
  value: number[];
};

export default function Slider({
  cId,
  className,
  isHidden,
  isPearling = true,
  label,
  marks,
  onChange,
  step,
  value,
}: SliderProps) {
  const markPositions = useMemo(() => Object.keys(marks).map(Number), [marks]);
  return (
    <div
      className={twMerge(
        "flex w-full flex-col space-y-4",
        isHidden && "hidden",
      )}
      data-testid={`${cId}-slider-container`}
    >
      {label && <Label cId={`${cId}-slider`}>{label}</Label>}
      <ReactSlider
        ariaLabel={["Lower range thumb", "Upper range thumb"]}
        ariaValuetext={(state) =>
          state?.value
            ? `New range: ${state.value
                .map((mark) => marks[mark])
                .join(" to ")}`
            : ""
        }
        className={twMerge("group flex h-2 items-center", className)}
        data-testid={`${cId}-slider`}
        marks={markPositions}
        onChange={onChange}
        pearling={isPearling}
        renderMark={(props) => (
          <span
            {...props}
            className={`h-4 w-4 rounded-full ${
              value &&
              (props?.key as number) >= value[0] &&
              (props?.key as number) <= value[1]
                ? "cursor-pointer bg-tertiary-400 hover:bg-tertiary-500"
                : "cursor-pointer bg-neutral-300 hover:bg-neutral-400"
            }`}
          />
        )}
        renderTrack={(props, state) => (
          <div
            {...props}
            className={`h-2 rounded-full ${
              state.index === 1 ? "bg-tertiary-400" : "bg-neutral-300"
            }`}
          />
        )}
        step={step}
        thumbClassName="h-6 w-4 rounded-sm focus-visible:outline-none bg-tertiary-600 hover:bg-tertiary-700 focus-visible:ring-tertiary-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-least-contrast cursor-pointer"
        value={value}
      />
      <div className="flex justify-between">
        {Object.entries(marks).map(([key, value]) => (
          <label
            className="text-xs text-neutral-500"
            data-testid={`${cId}-slider-${kebabCase(value)}-label`}
            key={key}
          >
            {value}
          </label>
        ))}
      </div>
    </div>
  );
}
