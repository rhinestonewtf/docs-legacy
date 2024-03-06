import { useTheme } from "next-themes";
import Image from "next/image";

export const ModuleKitBanner = ({
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
          ? "/modulekit_banner_light.png"
          : "/modulekit_banner_dark.png"
      }
      width={width}
      height={height}
      alt="ModuleKit banner"
    />
  );
};
