import Link from "next/link";
import cn from "clsx";
import { CaretRight } from "./icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const classes = {
  card: cn(
    "nextra-card group flex flex-col justify-start overflow-hidden rounded-lg",
    "text-current no-underline dark:shadow-none",
    "inset-y-4 bg-[#f7f7f8] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]"
  ),
  title: cn("flex font-semibold items-start gap-2 p-4 text-gray-700"),
};

interface Component {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  buttonTitle?: string;
  isClickable?: boolean;
}

export const ComponentCard = ({ component }: { component: Component }) => {
  const [color, setColor] = useState<string>("#fff");
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    switch (resolvedTheme) {
      case "light":
        setColor("#3D2EE5");
        break;
      case "dark":
        setColor("#fff");
        break;
    }
  }, [resolvedTheme]);

  if (component.isClickable && component.href) {
    return (
      <Link
        className={cn(
          classes.card,
          "bg-gray-100 dark:border-neutral-700 dark:bg-white/[0.08] dark:text-gray-50 min-w-[150px] min-h-[120px] py-[16px] px-[16px]"
        )}
        href={component.href}
      >
        <div className="">{component.icon}</div>

        <span className="mt-[20px] font-bold">{component.title}</span>
        <div className="text-[13px] dark:text-gray-300">
          {component.description}
        </div>
      </Link>
    );
  } else {
    return (
      <div
        className={cn(
          classes.card,
          "bg-gray-100 dark:border-neutral-700 dark:bg-white/[0.08] dark:text-gray-50 min-w-[150px] min-h-[120px] py-[16px] px-[16px] flex justify-between flex-grow"
        )}
      >
        <div className="flex flex-col justify-between">
          <div className="">{component.icon}</div>

          <span className="mt-[20px] font-bold my-2">{component.title}</span>
          <div className="text-[13px] dark:text-gray-300 mt-2">
            {component.description}
          </div>
        </div>
        {component.href ? (
          <Link
            href={component.href}
            className="mt-6 bg-white dark:bg-white/10 rounded-2xl w-fit pl-4 pr-2 py-1 uppercase font-mono text-[14px] flex flex-row items-center justify-center border border-gray-200 dark:border-gray-800 text-[#3D2EE5] dark:text-white"
          >
            {component.buttonTitle || "Open"}{" "}
            <CaretRight width={6} height={9} color={color} />
          </Link>
        ) : null}
      </div>
    );
  }
};
