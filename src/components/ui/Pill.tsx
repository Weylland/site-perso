import { ComponentProps } from "react";

type PillTone = "default" | "peach" | "sunshine" | "mint" | "sky";

type PillProps = {
  tone?: PillTone;
} & ComponentProps<"span">;

const baseClasses =
  "inline-flex items-center px-[0.85rem] py-[0.4rem] " +
  "bg-cream border-[2.5px] border-ink " +
  "font-display font-medium text-[0.9rem] " +
  "transition-[transform,box-shadow] duration-150 ease-out " +
  "hover:-translate-x-0.5 hover:-translate-y-0.5";

const toneShadowClasses: Record<PillTone, string> = {
  default: "shadow-brutal-sm hover:shadow-brutal",
  peach: "shadow-[2px_2px_0_var(--color-peach)] hover:shadow-[4px_4px_0_var(--color-peach)]",
  sunshine:
    "shadow-[2px_2px_0_var(--color-sunshine)] hover:shadow-[4px_4px_0_var(--color-sunshine)]",
  mint: "shadow-[2px_2px_0_var(--color-mint)] hover:shadow-[4px_4px_0_var(--color-mint)]",
  sky: "shadow-[2px_2px_0_var(--color-sky)] hover:shadow-[4px_4px_0_var(--color-sky)]",
};

export function Pill({ tone = "default", className, ...rest }: PillProps) {
  return (
    <span className={`${baseClasses} ${toneShadowClasses[tone]} ${className ?? ""}`} {...rest} />
  );
}
