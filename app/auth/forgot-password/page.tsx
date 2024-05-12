import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ForgotPasswordForm from '@/components/auth/forgot-password-form'

const ForgotPasswordPage = () => {
  return (
    <Card className="w-full max-w-sm bg-muted/40">
      <CardHeader>
        <CardTitle>Forgot Password?</CardTitle>
      </CardHeader>
      <CardContent>
        <ForgotPasswordForm />
      </CardContent>
    </Card>
  )
}

export default ForgotPasswordPage
