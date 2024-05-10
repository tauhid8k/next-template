import { usePathname } from 'next/navigation'
import Link from 'next/link'

const SidebarLink = ({
  href,
  icon,
  text,
}: {
  href: string
  icon: React.ReactNode
  text: string
}) => {
  const pathName = usePathname()
  const activeLink = pathName === href

  return (
    <Link
      href={href}
      className={`flex w-full items-center gap-2 rounded-md px-4 py-2 mb-2 font-medium transition-colors ${
        activeLink ? 'bg-muted' : 'hover:bg-muted'
      }`}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-base tracking-wide">{text}</span>
      </div>
    </Link>
  )
}

export default SidebarLink
