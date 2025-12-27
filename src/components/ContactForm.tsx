import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Junction, No 48 Sotrek Building, Ecobank MC Cathy Hills branch, Mallam, Accra",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "024 422 2313",
    href: "tel:+233244222313",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@trusthvac.com",
    href: "mailto:info@trusthvac.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sat: 8:00 AM - 6:00 PM",
  },
];

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-900/5 -z-10 transform skew-y-3 origin-bottom-left" />

      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
            Get Your <span className="text-primary">Free Quote</span> Today
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to improve your home or business comfort? Contact us for a free
            consultation and estimate. We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="flex items-start gap-4 bg-white rounded-xl p-4 border border-slate-100 shadow-md hover:shadow-lg transition-all"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-lg flex-shrink-0 shadow-lg shadow-primary/20">
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">{info.title}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-slate-600 hover:text-primary transition-colors font-medium"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-slate-600 font-medium">{info.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl p-2 border border-slate-100 shadow-md overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9970000000003!2d-0.2736!3d5.5775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzQnMzkuMCJOIDDCsDE2JzI1LjAiVw!5e0!3m2!1sen!2sgh!4v1635000000000!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "0.5rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Trust HVAC Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-0" />

              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+233 000 000 000"
                      required
                      className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-foreground mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="flex h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      <option value="ac-installation">AC Installation</option>
                      <option value="heating">Heating Systems</option>
                      <option value="repair">Repairs & Maintenance</option>
                      <option value="thermostat">Thermostat Solutions</option>
                      <option value="ventilation">Ventilation Services</option>
                      <option value="upgrade">System Upgrades</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your HVAC needs..."
                    rows={5}
                    required
                    className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
