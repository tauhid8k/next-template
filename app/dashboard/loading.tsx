import { LoaderCircle } from 'lucide-react'

const DashboardLoading = () => {
  return (
    <div className="h-full grid place-items-center">
      <LoaderCircle className="size-10 animate-spin text-muted-foreground" />
    </div>
  )
}

export default DashboardLoading
