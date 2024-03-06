import Image from "next/image";
import { useTheme } from "next-themes";

export const SDKIcon = ({
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
          ? "/icons/sdk_light.png"
          : "/icons/sdk_light.png"
      }
      width={width}
      height={height}
      alt="SDK Icon"
    />
  );
};
