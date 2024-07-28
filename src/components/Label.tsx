import { twMerge } from "tailwind-merge";

type LabelProps = {
  children: React.ReactNode;
  cId: string;
  className?: string;
  isDisabled?: boolean;
  isOptional?: boolean;
};

export default function Label({
  children,
  cId,
  className,
  isDisabled,
  isOptional,
}: LabelProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <label
        className={twMerge(
          "text-sm text-neutral-900 sm:text-base",
          isDisabled && "text-neutral-500",
          className,
        )}
        data-testid={`${cId}-main-label`}
        htmlFor={cId}
        id={`${cId}-main-label`}
      >
        {children}
      </label>
      {isOptional && (
        <label
          className={twMerge(
            "text-xs text-neutral-500",
            isDisabled && "text-neutral-400",
          )}
          data-testid={`${cId}-optional-label`}
          htmlFor={cId}
          id={`${cId}-optional-label`}
        >
          optional
        </label>
      )}
    </div>
  );
}
