import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CircleUser, Menu } from 'lucide-react'
import { ThemeToggler } from '@/components/theme-toggler'
import { useContext, useTransition } from 'react'
import { SidebarContext } from '@/app/dashboard/layout'
import { handleErrors } from '@/lib/handleErrors'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { logout } from '@/actions/authActions'

const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleLogout = () => {
    startTransition(async () => {})
  }

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b px-4 md:px-6 bg-white dark:bg-muted/40">
      <Button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        variant="outline"
        size="icon"
      >
        <Menu className="icon" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
      <div className="flex items-center gap-4">
        <ThemeToggler />
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full">
            <Avatar className="w-9 h-9">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="profile image"
              />
              <AvatarFallback>
                <CircleUser className="icon" />
              </AvatarFallback>
              <span className="sr-only">Toggle user menu</span>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <form action={handleLogout}>
                <button type="submit">Logout</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Header
