'use client'

import { z } from 'zod'
import { FieldPath, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { loginValidator } from '@/validators/authValidator'
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
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { handleErrors, handleSuccess } from '@/lib/handleResponse'
import { useMutation } from '@tanstack/react-query'
import { getAxios } from '@/api'

const LoginForm = () => {
  const [formErrorAlert, setFormErrorAlert] = useState('')
  const [formMessageAlert, setFormMessageAlert] = useState('')

  const { mutate: login, isPending } = useMutation({
    mutationFn: (formData: z.infer<typeof loginValidator>) => {
      return getAxios().post('/login', formData)
    },
  })

  const router = useRouter()

  const form = useForm<z.infer<typeof loginValidator>>({
    resolver: zodResolver(loginValidator),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof loginValidator>) => {
    login(values, {
      onError: (data) => {
        const { validationErrors, formError, error } = handleErrors(data)
        if (validationErrors.length) {
          validationErrors.map(({ field, message }) => {
            form.setError(field as FieldPath<typeof values>, {
              message,
            })
          })
        } else if (formError) {
          setFormMessageAlert('')
          setFormErrorAlert(formError)
        } else if (error) {
          toast.error(error)
        }
      },
      onSuccess: (data) => {
        const { formMessage, message } = handleSuccess(data)
        if (formMessage) {
          setFormErrorAlert('')
          setFormMessageAlert(formMessage)
        } else if (message) {
          toast.success(message)
          router.push('/dashboard')
        }
      },
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
          <Alert title={formErrorAlert} variant="destructive" />
          <Alert title={formMessageAlert} />
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
