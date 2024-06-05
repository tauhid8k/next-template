import { getAuth } from "@/lib/auth"

const HomePage = async () => {
  const { isAuthenticated, user } = await getAuth()

  return <h1>Home Page {isAuthenticated && user?.name}</h1>
}

export default HomePage
