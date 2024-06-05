"use client"

import { z } from "zod"
import { FieldPath, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { loginValidator } from "@/validators/authValidator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import FormFieldSet from "@/components/ui/form-fieldset"
import { Input } from "@/components/ui/input"
import { Alert } from "@/components/ui/alert"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { handleErrors, handleSuccess } from "@/lib/handleResponse"
import { useMutation } from "@tanstack/react-query"
import { getAxios } from "@/lib/axios"
import { Checkbox } from "../ui/checkbox"

const LoginForm = () => {
  const [formAlert, setFormAlert] = useState("")

  const { mutate: login, isPending } = useMutation({
    mutationFn: (formData: z.infer<typeof loginValidator>) => {
      return getAxios().post("/login", formData)
    },
  })

  const router = useRouter()

  const form = useForm<z.infer<typeof loginValidator>>({
    resolver: zodResolver(loginValidator),
    defaultValues: {
      email: "",
      password: "",
      remember_me: false,
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
          setFormAlert(formError)
        } else if (error) {
          toast.error(error)
        }
      },
      onSuccess: (data) => {
        const { message } = handleSuccess(data)
        if (message) {
          setFormAlert("")
          toast.success(message)
        }

        router.push("/")
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
          <Alert title={formAlert} />
          <div className="flex justify-between gap-2 mb-4">
            <FormField
              control={form.control}
              name="remember_me"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal text-muted-foreground whitespace-nowrap">
                    Remember me
                  </FormLabel>
                </FormItem>
              )}
            />
            <Link
              href="/auth/forgot-password"
              className="block text-center text-sm text-muted-foreground hover:underline focus:underline focus:outline-none whitespace-nowrap"
            >
              Forgot password?
            </Link>
          </div>
          <Button type="submit" className="w-full mb-4" isLoading={isPending}>
            Login
          </Button>
          <Link
            href="/auth/register"
            className="block text-center text-sm text-muted-foreground hover:underline focus:underline focus:outline-none"
          >
            Do not have an account?
          </Link>
        </FormFieldSet>
      </form>
    </Form>
  )
}

export default LoginForm
