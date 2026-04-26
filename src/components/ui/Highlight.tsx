import type { ComponentProps } from "react";

type HighlightColor = "sunshine" | "peach" | "mint" | "sky";

type HighlightProps = {
  color?: HighlightColor;
} & ComponentProps<"span">;

const colorClasses: Record<HighlightColor, string> = {
  sunshine: "highlight-sunshine",
  peach: "highlight-peach",
  mint: "highlight-mint",
  sky: "highlight-sky",
};

export function Highlight({ className, color = "sunshine", ...rest }: HighlightProps) {
  return <span className={`${colorClasses[color]} ${className ?? ""}`} {...rest} />;
}
