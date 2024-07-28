import { twMerge } from "tailwind-merge";

import Label from "./Label";

type Option = {
  label: string;
  value: string;
};

type RadioProps = {
  cId: string;
  className?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: Option[];
};

export default function Radio({
  cId,
  className,
  label,
  onChange,
  options,
}: RadioProps) {
  return (
    <fieldset className="flex w-full flex-col space-y-2">
      {label && <Label cId={`${cId}-radio`}>{label}</Label>}
      <div className="flex rounded-xl bg-neutral-100 py-2 pr-3">
        {options.map(({ label, value }, index) => (
          <div className="flex flex-1" key={`${cId}-${value}`}>
            <input
              aria-labelledby={`${cId}-radio-main-label ${cId}-radio-optional-label ${cId}-${value}-radio-label`}
              className={twMerge("peer opacity-0", className)}
              data-testid={`${cId}-${value}-radio`}
              defaultChecked={index === 0}
              id={`${cId}-${value}-radio`}
              name={cId}
              onChange={onChange}
              type="radio"
              value={value}
            />
            <label
              className={`flex flex-grow cursor-pointer select-none justify-center truncate rounded-xl p-2 text-neutral-500 transition-colors hover:bg-neutral-200 peer-checked:bg-tertiary-600 peer-checked:text-least-contrast peer-checked:hover:bg-tertiary-700 peer-focus:ring-2 peer-focus:ring-tertiary-500 peer-focus:ring-offset-2 peer-focus:ring-offset-neutral-100`}
              htmlFor={`${cId}-${value}-radio`}
              id={`${cId}-${value}-radio-label`}
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
