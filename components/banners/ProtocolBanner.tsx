import { useTheme } from "next-themes";
import Image from "next/image";

export const ProtocolBanner = ({
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
          ? "/banners/protocol_banner_light.png"
          : "/banners/protocol_banner_dark.png"
      }
      width={width}
      height={height}
      alt="Protocol banner"
    />
  );
};
