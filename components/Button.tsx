import cn from "clsx";
import type { ReactElement, ReactNode } from "react";
import Link from "next/link";

export function Button({
  href,
  buttonComponent,
}: {
  href: string;
  buttonComponent: ReactNode;
}): ReactElement {
  return (
    <Link
      href={href}
      className="mt-6 bg-white dark:bg-white/10 rounded-2xl w-fit px-4 py-1 uppercase font-mono text-[14px] flex flex-row items-center justify-center border border-gray-200 dark:border-gray-800 text-[#3D2EE5] dark:text-white"
    >
      {buttonComponent}
    </Link>
  );
}
