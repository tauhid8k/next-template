import { usePathname } from "next/navigation"
import Link from "next/link"

const SidebarCollapseLink = ({
  href,
  text,
}: {
  href: string
  text: string
}) => {
  const pathName = usePathname()
  const activeLink = pathName === href

  return (
    <Link
      href={href}
      className={`relative flex gap-2 items-center font-medium tracking-wide py-1 pl-6 before:content-[''] before:absolute before:block before:w-4 before:h-[45px] before:left-0 before:bottom-[calc(50%-2px)] before:border-l-2 before:border-b-2 before:border-gray-200 dark:before:border-muted transition-colors ${
        activeLink
          ? "text-foreground"
          : "text-zinc-600 dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground"
      }`}
    >
      {text}
    </Link>
  )
}

export default SidebarCollapseLink
