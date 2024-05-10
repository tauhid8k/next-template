'use client'

import Header from '@/components/dashboard/header'
import Sidebar from '@/components/dashboard/sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed size-full flex">
      <Sidebar />
      <div className="w-full overflow-hidden">
        <Header />
        <main className="h-[calc(100vh-64px)] p-4 md:p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
