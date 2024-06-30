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
     email: z.string().email(),
});

export function NewsletterForm() {
     const form = useForm<z.infer<typeof FormSchema>>({
          resolver: zodResolver(FormSchema),
          defaultValues: {
               email: "",
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
                    <Button type="submit" className="w-32 gap-1.5">
                         <Send className="h-5 w-5" /> Subscribe
                    </Button>
               </form>
          </Form>
     );
}
