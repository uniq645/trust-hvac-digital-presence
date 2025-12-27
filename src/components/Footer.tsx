import { Wind, Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white border-t border-primary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 text-2xl font-bold font-heading mb-6 group">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg group-hover:bg-secondary transition-colors duration-300">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <span className="text-white group-hover:text-secondary transition-colors duration-300">
                Trust<span className="text-secondary group-hover:text-white transition-colors duration-300">HVAC</span>
              </span>
            </a>
            <p className="text-blue-200 mb-8 leading-relaxed">
              Accra's trusted HVAC experts providing top-quality heating, ventilation,
              and air conditioning services for over a decade.
            </p>
            <div className="flex gap-4">
              {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(`#${link.toLowerCase()}`);
                    }}
                    className="text-blue-200 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                "AC Installation",
                "Heating Systems",
                "Repairs & Maintenance",
                "Thermostat Solutions",
                "Ventilation Services",
                "System Upgrades",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#services");
                    }}
                    className="text-blue-200 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-6 text-white">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-blue-200 text-sm">
                  Junction, No 48 Sotrek Building, Ecobank MC Cathy Hills branch, Mallam, Accra
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-white/10 rounded-lg shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                </div>
                <a
                  href="tel:+233244222313"
                  className="text-blue-200 hover:text-white transition-colors font-medium"
                >
                  024 422 2313
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-white/10 rounded-lg shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                </div>
                <a
                  href="mailto:info@trusthvac.com"
                  className="text-blue-200 hover:text-white transition-colors font-medium"
                >
                  info@trusthvac.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-300/60 text-sm text-center md:text-left">
            © {currentYear} Trust HVAC Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-blue-300/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-300/60 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
