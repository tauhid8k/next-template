import SidebarHeader from "./sidebar-header"
import SidebarMenu from "./sidebar-menu"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useContext, useEffect } from "react"
import { SidebarContext } from "@/app/(protected)/dashboard/layout"
import { usePathname } from "next/navigation"

const Sidebar = () => {
  const { isSidebarMobile, isSidebarOpen, setIsSidebarOpen } =
    useContext(SidebarContext)

  const pathName = usePathname()

  useEffect(() => {
    if (isSidebarMobile) {
      setIsSidebarOpen(false)
    }
  }, [pathName, isSidebarMobile, setIsSidebarOpen])

  return (
    <>
      {isSidebarMobile ? (
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetContent side="left" className="w-64 flex flex-col">
            <SidebarHeader />
            <SidebarMenu />
          </SheetContent>
        </Sheet>
      ) : (
        <aside
          className={`hidden lg:flex flex-col w-64 h-full shrink-0 bg-white dark:bg-muted/40 border-r transition-[margin] duration-300 ${
            isSidebarOpen ? "ml-0" : "-ml-64"
          }`}
        >
          <SidebarHeader />
          <SidebarMenu />
        </aside>
      )}
    </>
  )
}

export default Sidebar
