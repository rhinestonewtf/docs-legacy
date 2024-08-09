import { useTheme } from "next-themes";
import Image from "next/image";

export const LogoIcon = ({
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
          ? "/icons/logo_light.png"
          : "/icons/logo_dark.png"
      }
      width={width}
      height={height}
      alt="Logo Icon"
    />
  );
};
