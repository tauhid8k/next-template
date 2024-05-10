import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

const SidebarHeader = () => {
  return (
    <div className="shrink-0 flex items-center justify-between px-4 md:border-b h-16">
      <h1 className="text-xl font-medium">Shadcn UI</h1>
      <Button
        onClick={() => {}}
        variant="outline"
        size="icon"
        className="md:hidden"
      >
        <X className="icon" />
        <span className="sr-only">Close navigation menu</span>
      </Button>
    </div>
  )
}

export default SidebarHeader
