'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { forgotPasswordValidator } from '@/validators/authValidator'
import { useState, useTransition } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import FormFieldSet from '@/components/ui/form-fieldset'
import { Input } from '@/components/ui/input'
import { Alert } from '@/components/ui/alert'
import { forgotPassword } from '@/actions/authActions'

const ForgotPasswordForm = () => {
  const [isPending, startTransition] = useTransition()
  const [errorAlert, setErrorAlert] = useState('')

  const form = useForm<z.infer<typeof forgotPasswordValidator>>({
    resolver: zodResolver(forgotPasswordValidator),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (values: z.infer<typeof forgotPasswordValidator>) => {
    startTransition(async () => {
      const response = await forgotPassword(values)
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormFieldSet disabled={isPending}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Account email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Alert variant="destructive" title={errorAlert} />
          <Button type="submit" className="w-full mb-4" isLoading={isPending}>
            {isPending ? 'Sending...' : 'Send password reset link'}
          </Button>
          <Link
            href="/auth/login"
            className="block text-center text-sm text-muted-foreground hover:underline focus:underline focus:outline-none"
          >
            Go back to login?
          </Link>
        </FormFieldSet>
      </form>
    </Form>
  )
}

export default ForgotPasswordForm
