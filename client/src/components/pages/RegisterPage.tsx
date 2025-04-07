import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/schema/auth";
import { useMutation, useReactiveVar } from "@apollo/client";
import { REGISTER_MUTATION } from "@/graphql/mutations/auth";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { isAuthenticatedVar } from "@/apollo/apollo-vars";
import { useEffect } from "react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const isAuthenticated = useReactiveVar(isAuthenticatedVar);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const [register, { loading, error }] = useMutation(REGISTER_MUTATION, {
    onCompleted() {
      toast.success("Registeration successful");
      return navigate("/login");
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    const userInput = {
      email: values.email,
      name: values.name,
      password: values.password,
    };
    try {
      await register({
        variables: {
          userInput,
        },
      });
    } catch (error: any) {
      console.log(error);
      // form.reset();
      toast.error(error.message.split(":")[1]);
    }
  }
  return (
    <section className="layout w-1/4 mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Register new account</CardTitle>
          <CardDescription>
            Create your new account & enjoy our services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Bagan" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="exampleBagan@gmail.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your primary email address.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading}>
                Register
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default RegisterPage;
