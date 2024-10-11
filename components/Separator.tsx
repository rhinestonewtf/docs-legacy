export const Separator = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="pt-3 border-t border-neutral-400 text-neutral-600 dark:border-neutral-400/50 dark:text-neutral-200/80 font-bold -my-2">
        {title}
      </div>
    </div>
  )
}
