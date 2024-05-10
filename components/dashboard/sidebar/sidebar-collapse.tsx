import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ChevronDown } from 'lucide-react'

const SidebarCollapse = ({
  children,
  icon,
  text,
  basePath,
}: {
  children: React.ReactNode
  icon: React.ReactNode
  text: string
  basePath: string
}) => {
  const [open, setOpen] = useState(false)
  const pathName = usePathname()
  const activePath = pathName.startsWith(basePath)

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <button
          className={`w-full h-10 flex justify-between items-center gap-2 font-medium rounded-md py-2 px-4 mb-2 transition-colors ${
            activePath ? 'bg-muted' : 'hover:bg-muted'
          }`}
        >
          <div className="flex items-center gap-2">
            {icon}
            <span className="text-base tracking-wide">{text}</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 transition ${open ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="ml-[1.6rem] mb-2">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default SidebarCollapse
