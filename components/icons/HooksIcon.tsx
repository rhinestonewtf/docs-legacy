import { useTheme } from "next-themes";
import Image from "next/image";

export const HooksIcon = ({
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
          ? "/icons/hooks_light.png"
          : "/icons/hooks_light.png"
      }
      width={width}
      height={height}
      alt="Hooks Icon"
    />
  );
};
