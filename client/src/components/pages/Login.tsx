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
import { loginSchema } from "@/schema/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "@/graphql/mutations/auth";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted() {
      toast.success("Login successful");
      return navigate("/");
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    const email = values.email;
    const password = values.password;

    try {
      await login({
        variables: {
          email,
          password,
        },
      });
    } catch (err: any) {
      console.log(err);
      //   form.reset();
      toast.error(
        err.message.includes(":") ? err.message.split(":")[1] : err.message
      );
    }
  }
  return (
    <section className="layout w-1/4 mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Login to account</CardTitle>
          <CardDescription>
            Login your existing account from here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default LoginPage;
