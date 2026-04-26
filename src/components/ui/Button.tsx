import { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "dark";
type ButtonSize = "default" | "big" | "small";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ComponentProps<"button">;

const baseClasses =
  "inline-flex items-center gap-2 font-semibold border-[2.5px] border-ink shadow-brutal " +
  "transition-[transform,box-shadow,background-color] duration-150 ease-out " +
  "cursor-pointer " +
  "hover:translate-x-1 hover:translate-y-1 hover:shadow-none " +
  "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-sunshine text-ink hover:bg-sunshine-2",
  secondary: "bg-cream text-ink hover:bg-cream-2",
  dark: "bg-ink text-cream border-ink hover:bg-ink-soft",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-6 py-[0.9rem] text-base",
  big: "px-8 py-[1.15rem] text-[1.05rem]",
  small: "px-[0.9rem] py-[0.55rem] text-[0.82rem]",
};

export function Button({
  variant = "secondary",
  size = "default",
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className ?? ""} `}
      {...rest}
    />
  );
}
