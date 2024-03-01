import Image from "next/image";

export const ModuleKitIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <Image
      src={"/icons/modulekit.png"}
      width={width}
      height={height}
      alt="ModuleKit Icon"
    />
  );
};
