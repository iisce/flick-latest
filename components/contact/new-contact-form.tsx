"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const FormSchema = z.object({
     name: z.string().min(2, {
          message: "Name must be at least 2 characters.",
     }),
     email: z.string().email(),
     subject: z.string().min(2, {
          message: "Subject must be at least 2 characters.",
     }),
     message: z.string().min(15, {
          message: "Message must be at least 15 characters.",
     }),
});

export function NewContactForm() {
     const form = useForm<z.infer<typeof FormSchema>>({
          resolver: zodResolver(FormSchema),
          defaultValues: {
               name: "",
               email: "",
               subject: "",
               message: "",
          },
     });

     function onSubmit(data: z.infer<typeof FormSchema>) {
          toast.success("You submitted the following values:", {
               description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                         <code className="text-white">
                              {JSON.stringify(data, null, 2)}
                         </code>
                    </pre>
               ),
          });
     }

     return (
          <Form {...form}>
               <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid gap-5"
               >
                    <div className="grid gap-5 md:grid-cols-2">
                         <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel>Your Name</FormLabel>
                                        <FormControl>
                                             <Input
                                                  placeholder="Jane Doe"
                                                  {...field}
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                         <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                   <FormItem>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                             <Input
                                                  placeholder="example@email.com"
                                                  type="email"
                                                  {...field}
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                         <FormField
                              control={form.control}
                              name="subject"
                              render={({ field }) => (
                                   <FormItem className="md:col-span-2">
                                        <FormLabel>Subject</FormLabel>
                                        <FormControl>
                                             <Input
                                                  placeholder="Enter Subject"
                                                  {...field}
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                         <FormField
                              control={form.control}
                              name="message"
                              render={({ field }) => (
                                   <FormItem className="md:col-span-2">
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                             <Textarea
                                                  placeholder="Type message here"
                                                  {...field}
                                             />
                                        </FormControl>
                                        <FormMessage />
                                   </FormItem>
                              )}
                         />
                    </div>
                    <Button type="submit" className="w-32 gap-1.5">
                         <Send className="h-5 w-5" /> Send
                    </Button>
               </form>
          </Form>
     );
}
