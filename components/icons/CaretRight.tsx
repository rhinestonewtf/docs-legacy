export const CaretRight = ({
  width,
  height,
  color = "#fff",
}: {
  width: number;
  height: number;
  color?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L4.5 4.5L1 8" stroke={color} />
    </svg>
  );
};
