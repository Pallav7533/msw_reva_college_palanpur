import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Shree Reva MSW College";
  }, []);

  const { toast } = useToast();
  const submitContact = useSubmitContact();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    submitContact.mutate({ data: values }, {
      onSuccess: () => {
        toast({
          title: "Message Sent Successfully",
          description: "We have received your inquiry and will get back to you soon.",
        });
        form.reset();
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again or call us directly.",
          variant: "destructive"
        });
      }
    });
  }

  return (
    <Layout>
      <div className="bg-primary/5 py-12 md:py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/10">Get in Touch</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions about admissions, courses, or campus facilities? We're here to help.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">College Details</h2>
              <div className="grid gap-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Campus Address</h3>
                    <p className="text-muted-foreground text-sm">
                      Shree Reva MSW College<br />
                      Upasana Vidhyalaya Campus, Akesan Rd, next to Akshatam Bangalow<br />
                      Laxmipura, Palanpur, Gujarat 385001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone Number</h3>
                    <p className="text-muted-foreground text-sm">+91 93130 59676</p>
                    
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Address</h3>
                    <p className="text-muted-foreground text-sm">revamswcollege</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Working Hours</h3>
                    <p className="text-muted-foreground text-sm">Monday - Saturday: 9:00 AM – 5:00 PM</p>
                    <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-[#25D366]/10 border-[#25D366]/30">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-bold mb-1">Chat with us on WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">For quick queries regarding admission</p>
                </div>
                <a href="https://wa.me/919313059676" target="_blank" rel="noopener noreferrer">
  <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white">Connect</Button>
</a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-border shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-6">Send an Inquiry</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Pallav chavda" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="pallav@gmail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="9313059676" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Admission Query" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Write your message here..." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full font-bold" disabled={submitContact.isPending}>
                      {submitContact.isPending ? "Sending..." : "Submit Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
      
      {/* Map */}
      <div className="w-full h-[400px] bg-muted relative">
        {/* Placeholder for iframe map - Palanpur */}
        <iframe 
          src="https://maps.google.com/maps?q=Shree+Reva+MSW+College,+Upasana+Vidhyalaya+Campus,+Akesan+Rd,+Laxmipura,+Palanpur,+Gujarat+385001&output=embed&z=17"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="College Location Map"
        ></iframe>
      </div>
    </Layout>
  );
}