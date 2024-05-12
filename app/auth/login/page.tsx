import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import LoginForm from '@/components/auth/login-form'

const LoginPage = () => {
  return (
    <Card className="w-full max-w-sm bg-muted/40">
      <CardHeader>
        <CardTitle>Account Login</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  )
}

export default LoginPage
