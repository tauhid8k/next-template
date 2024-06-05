const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-10 min-h-[calc(100vh-64px)] grid place-items-center">
      {children}
    </div>
  )
}

export default AuthLayout
