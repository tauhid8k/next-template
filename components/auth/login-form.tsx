'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginValidator } from '@/validators/authValidator'
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
import { login } from '@/actions/authActions'

const LoginForm = () => {
  const [isPending, startTransition] = useTransition()
  const [errorAlert, setErrorAlert] = useState('')

  const form = useForm<z.infer<typeof loginValidator>>({
    resolver: zodResolver(loginValidator),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof loginValidator>) => {
    startTransition(async () => {
      const response = await login(values)
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
              <FormItem className="mb-3">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Alert variant="destructive" title={errorAlert} />
          <div className="flex flex-col md:flex-row justify-between gap-2 mb-4">
            <Link
              href="/auth/register"
              className="block text-center text-sm text-muted-foreground hover:underline focus:underline focus:outline-none"
            >
              Do not have an account?
            </Link>
            <Link
              href="/auth/forgot-password"
              className="block text-center text-sm text-muted-foreground hover:underline focus:underline focus:outline-none"
            >
              Forgot password?
            </Link>
          </div>
          <Button type="submit" className="w-full" isLoading={isPending}>
            Login
          </Button>
        </FormFieldSet>
      </form>
    </Form>
  )
}

export default LoginForm
