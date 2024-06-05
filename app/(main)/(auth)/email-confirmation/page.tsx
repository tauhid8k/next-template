import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import EmailConfirmationForm from "@/components/auth/email-confirmation-form"
import ResendEmailButton from "@/components/auth/resend-email-button"

const EmailConfirmationPage = () => {
  return (
    <Card className="w-full max-w-sm bg-white dark:bg-muted/40">
      <CardHeader className="text-center">
        <CardTitle>Verify Email</CardTitle>
        <CardDescription>
          We have sent you an email for verification. Please, verify the code
          here
        </CardDescription>
      </CardHeader>
      <CardContent>
        <EmailConfirmationForm />
        <ResendEmailButton />
      </CardContent>
    </Card>
  )
}

export default EmailConfirmationPage
