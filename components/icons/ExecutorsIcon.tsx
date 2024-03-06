import { useTheme } from "next-themes";
import Image from "next/image";

export const ExecutorsIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Image
      src={
        currentTheme == "light"
          ? "/icons/executors_light.png"
          : "/icons/executors_light.png"
      }
      width={width}
      height={height}
      alt="Executors Icon"
    />
  );
};
