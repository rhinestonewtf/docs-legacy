import Link from "next/link";
import cn from "clsx";

const classes = {
  card: cn(
    "nextra-card group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200",
    "text-current no-underline dark:shadow-none",
    "hover:shadow-gray-100 dark:hover:shadow-none shadow-gray-100",
    "active:shadow-sm active:shadow-gray-200",
    "transition-all duration-200 hover:border-gray-300"
  ),
  title: cn(
    "flex font-semibold items-start gap-2 p-4 text-gray-700 hover:text-gray-900"
  ),
};

interface Component {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export const ComponentCard = ({ component }: { component: Component }) => {
  return (
    <div
      className={cn(
        classes.card,
        "bg-gray-100 shadow dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-50 hover:shadow-lg dark:hover:border-neutral-500 dark:hover:bg-neutral-700 w-[280px] min-h-[240px] py-[16px] px-[16px]"
      )}
    >
      <div className="">{component.icon}</div>

      <span className="mt-[20px] font-bold">{component.title}</span>
      <div className="text-[14px]">{component.description}</div>
      <Link
        href={component.href}
        className="mt-6 bg-white rounded-2xl w-fit text-black px-4 py-1 uppercase font-mono text-[14px]"
      >
        Open
      </Link>
    </div>
  );
};
