import Image from "next/image";
import { useTheme } from "next-themes";

export const SandboxIcon = ({
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
          ? "/icons/sandbox_light.png"
          : "/icons/sandbox_dark.png"
      }
      width={width}
      height={height}
      alt="Sandbox Icon"
    />
  );
};
