import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="h-16 top-0 sticky flex items-center justify-between border-b px-4 md:px-6 bg-white dark:bg-muted/40 backdrop-blur-sm">
      <Link href="/" className="text-xl font-medium">
        LOGO
      </Link>
    </nav>
  )
}

export default Navbar
