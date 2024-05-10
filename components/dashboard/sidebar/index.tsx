import SidebarHeader from './sidebar-header'
import SidebarMenu from './sidebar-menu'

const Sidebar = () => {
  return (
    <aside className="w-64 h-full shrink-0 flex flex-col border-r bg-muted/40">
      <SidebarHeader />
      <SidebarMenu />
    </aside>
  )
}

export default Sidebar
