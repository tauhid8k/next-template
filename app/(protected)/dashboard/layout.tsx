"use client"

import Header from "@/components/dashboard/header"
import Sidebar from "@/components/dashboard/sidebar"
import React, { createContext, useLayoutEffect, useState } from "react"

// Context Types
interface SidebarContextType {
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
  isSidebarMobile: boolean
  setIsSidebarMobile: React.Dispatch<React.SetStateAction<boolean>>
}

// Sidebar Context
export const SidebarContext = createContext<SidebarContextType>({
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
  isSidebarMobile: false,
  setIsSidebarMobile: () => {},
})

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
  const [isSidebarMobile, setIsSidebarMobile] = useState<boolean>(false)

  // Show/Hide Mobile/Desktop Sidebar On Window Resize
  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false)
        setIsSidebarMobile(true)
      } else {
        setIsSidebarMobile(false)
        setIsSidebarOpen(true)
      }
    }

    // Initial check on mount
    handleResize()

    // Event listener for window resize
    window.addEventListener("resize", handleResize)

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isSidebarMobile,
        setIsSidebarMobile,
      }}
    >
      <div className="fixed size-full flex bg-gray-50 dark:bg-background">
        <Sidebar />
        <div className="w-full overflow-hidden">
          <Header />
          <main className="h-[calc(100vh-64px)] p-4 md:p-6 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarContext.Provider>
  )
}

export default DashboardLayout
