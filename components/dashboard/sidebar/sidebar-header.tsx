import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { useContext } from 'react'
import { SidebarContext } from '@/app/dashboard/layout'

const SidebarHeader = () => {
  const { setIsSidebarOpen } = useContext(SidebarContext)

  return (
    <div className="shrink-0 flex items-center justify-between px-4 lg:border-b h-16">
      <Link href="/dashboard" className="text-xl font-medium">
        Shadcn UI
      </Link>
      <Button
        onClick={() => setIsSidebarOpen(false)}
        variant="outline"
        size="icon"
        className="lg:hidden"
      >
        <X className="icon" />
        <span className="sr-only">Close navigation menu</span>
      </Button>
    </div>
  )
}

export default SidebarHeader
