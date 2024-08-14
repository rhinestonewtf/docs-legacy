import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export const CoreModulesBanner = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  const [src, setSrc] = useState<string>(
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  );
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    switch (resolvedTheme) {
      case "light":
        setSrc("/banners/core_modules_banner_light.png");
        break;
      case "dark":
        setSrc("/banners/core_modules_banner_dark.png");
        break;
    }
  }, [resolvedTheme]);

  return (
    <Image src={src} width={width} height={height} alt="ModuleKit banner" />
  );
};
