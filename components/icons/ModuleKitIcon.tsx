import { useTheme } from "next-themes";
import Image from "next/image";

export const ModuleKitIcon = ({
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
          ? "/icons/modulekit_light.png"
          : "/icons/modulekit_dark.png"
      }
      width={width}
      height={height}
      alt="ModuleKit Icon"
    />
  );
};
