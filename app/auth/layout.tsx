const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container min-h-screen py-4 grid place-items-center">
      {children}
    </main>
  )
}

export default AuthLayout
