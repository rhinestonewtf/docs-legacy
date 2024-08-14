import cn from "clsx";
import type { ReactElement, ReactNode } from "react";
import Link from "next/link";

export function Button({
  href,
  buttonComponent,
  colors = "bg-white dark:bg-white/10 text-[#3D2EE5] dark:text-white",
}: {
  href: string;
  buttonComponent: ReactNode;
  colors?: string;
}): ReactElement {
  return (
    <Link
      href={href}
      className={`mt-6 rounded-2xl w-fit px-4 py-1 uppercase font-mono text-[14px] flex flex-row items-center justify-center border border-gray-200 dark:border-gray-800 ${colors}`}
    >
      {buttonComponent}
    </Link>
  );
}
