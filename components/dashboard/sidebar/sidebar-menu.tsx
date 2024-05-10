import SidebarLink from './sidebar-link'
import SidebarCollapse from './sidebar-collapse'
import SidebarCollapseLink from './sidebar-collapse-link'
import { LayoutGrid, UserRound, Pencil, Settings } from 'lucide-react'

const SidebarMenu = () => {
  return (
    <nav className="grow px-4 pt-5 pb-3 overflow-y-auto">
      <SidebarLink
        text="Dashboard"
        href="/dashboard"
        icon={<LayoutGrid className="icon" />}
      />
      <SidebarCollapse
        text="Users"
        icon={<UserRound className="icon" />}
        basePath="/dashboard/users"
      >
        <SidebarCollapseLink text="All Users" href="/dashboard/users" />
        <SidebarCollapseLink
          text="Create User"
          href="/dashboard/users/create"
        />
      </SidebarCollapse>
      <SidebarCollapse
        text="Posts"
        icon={<Pencil className="icon" />}
        basePath="/dashboard/posts"
      >
        <SidebarCollapseLink text="All Posts" href="/dashboard/posts" />
        <SidebarCollapseLink
          text="Create Post"
          href="/dashboard/posts/create"
        />
      </SidebarCollapse>
      <SidebarLink
        text="Settings"
        href="/dashboard/settings"
        icon={<Settings className="icon" />}
      />
    </nav>
  )
}

export default SidebarMenu
