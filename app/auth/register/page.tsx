import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import RegisterForm from '@/components/auth/register-form'

const RegisterPage = () => {
  return (
    <Card className="w-full max-w-sm bg-muted/40">
      <CardHeader>
        <CardTitle>Account Register</CardTitle>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  )
}

export default RegisterPage
