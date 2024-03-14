import { useTheme } from "next-themes";
import Image from "next/image";

export const ModuleSDKBanner = ({
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
          ? "/module_sdk_banner_light.png"
          : "/module_sdk_banner_dark.png"
      }
      width={width}
      height={height}
      alt="Module SDK banner"
    />
  );
};
