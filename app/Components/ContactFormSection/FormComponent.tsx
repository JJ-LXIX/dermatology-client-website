"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props = {};

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  first_name: z
    .string()
    .min(1, { message: "Can't leave this empty" })
    .max(18, { message: "Max 18 characters" }),
  last_name: z
    .string()
    .min(1, { message: "Can't leave this empty" })
    .max(18, { message: "Max 18 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone_number: z.string().regex(phoneRegex, { message: "Invalid Number" }),
  message: z
    .string()
    .min(2, { message: "Can't leave this empty" })
    .max(500, { message: "Max 500 characters" })
    .optional(),
});

function FormComponent({}: Props) {
  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      message: "",
    },
  });

  // Submit Handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto grid w-full grid-cols-1 gap-4 p-5 lg:max-w-[80%] lg:grid-cols-2  lg:gap-5 lg:space-y-0"
      >
        {/* First Name*/}
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" font-semibold text-black">
                First Name
              </FormLabel>
              <FormControl>
                <Input
                  className="cursor-pointer bg-stone-50 text-zinc-950 shadow-lg placeholder:text-zinc-700"
                  placeholder="first name "
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        {/* Last Name */}
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" font-semibold text-black">
                Last Name
              </FormLabel>
              <FormControl>
                <Input
                  className="cursor-pointer bg-stone-50  text-zinc-950 shadow-lg placeholder:text-zinc-700"
                  placeholder="last name"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" font-semibold text-black">Email</FormLabel>
              <FormControl>
                <Input
                  className="cursor-pointer bg-stone-50 text-zinc-950 shadow-lg placeholder:text-zinc-700"
                  placeholder="email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        {/* Phone Number */}
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" font-semibold text-black">
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  className="cursor-pointer bg-stone-50 text-zinc-950 shadow-lg placeholder:text-zinc-700"
                  placeholder="phone number"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="md:col-span-2 ">
              <FormLabel className=" font-semibold text-black">
                Message
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your custom message here"
                  {...field}
                  className="cursor-pointer bg-stone-50 py-10 text-zinc-950 shadow-lg placeholder:text-zinc-700"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button
          className="justify-self-start bg-zinc-900 font-semibold text-white transition-all duration-300 hover:scale-110 active:scale-95"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default FormComponent;
