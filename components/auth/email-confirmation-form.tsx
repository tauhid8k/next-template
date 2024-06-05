"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { emailConfirmationValidator } from "@/validators/authValidator"
import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import FormFieldSet from "@/components/ui/form-fieldset"

const EmailConfirmationForm = () => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof emailConfirmationValidator>>({
    resolver: zodResolver(emailConfirmationValidator),
    defaultValues: {
      code: "",
    },
  })

  const onSubmit = (values: z.infer<typeof emailConfirmationValidator>) => {
    startTransition(async () => {})
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormFieldSet disabled={isPending}>
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mb-4" isLoading={isPending}>
            {isPending ? "Verifying..." : "Verify Code"}
          </Button>
        </FormFieldSet>
      </form>
    </Form>
  )
}

export default EmailConfirmationForm
