export function Monogram({ width }: { width: number }) {
  return (
    <svg
      aria-hidden="true"
      width={width}
      height={(width * 48) / 72}
      viewBox="0 0 72 48"
      fill="#0A0A0A"
    >
      <path d="M4 43V5h8l14 23V5h8v38h-8L12 20v23H4Z" />
      <path d="M63 16c-3-3-7-4-11-4-4 0-6 1-6 4 0 2 2 3 7 4 9 2 15 4 15 12 0 7-6 12-15 12-7 0-13-2-17-7l5-6c4 4 8 6 13 6 4 0 6-2 6-4 0-3-2-4-8-5-9-2-14-5-14-12 0-7 6-12 14-12 7 0 12 2 16 6l-5 6Z" />
    </svg>
  );
}
