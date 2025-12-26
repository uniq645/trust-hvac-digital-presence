import { AirVent, Flame, Wrench, ThermometerSun, Fan, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: AirVent,
    title: "AC Installation",
    description:
      "Expert installation of energy-efficient air conditioning systems for homes and commercial spaces. We work with all major brands.",
    color: "primary",
  },
  {
    icon: Flame,
    title: "Heating Systems",
    description:
      "Professional heating solutions including furnace installation, heat pumps, and radiant heating systems for maximum comfort.",
    color: "secondary",
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    description:
      "Fast, reliable repairs for all HVAC systems. Our preventive maintenance plans keep your equipment running smoothly year-round.",
    color: "accent",
  },
  {
    icon: ThermometerSun,
    title: "Thermostat Solutions",
    description:
      "Smart thermostat installation and programming. Control your home's climate from anywhere with modern technology.",
    color: "primary",
  },
  {
    icon: Fan,
    title: "Ventilation Services",
    description:
      "Improve indoor air quality with our ventilation solutions. Duct cleaning, air purification, and fresh air systems.",
    color: "secondary",
  },
  {
    icon: Settings,
    title: "System Upgrades",
    description:
      "Upgrade to modern, energy-efficient HVAC systems. We help you reduce energy costs while improving comfort.",
    color: "accent",
  },
];

const Services = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary text-primary-foreground";
      case "secondary":
        return "bg-secondary text-secondary-foreground";
      case "accent":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
            Complete HVAC Solutions for{" "}
            <span className="text-primary">Every Need</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From installation to maintenance, we provide comprehensive heating,
            ventilation, and air conditioning services to keep your space comfortable
            all year round.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${getColorClasses(
                  service.color
                )}`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-2 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" onClick={() => handleNavClick("#contact")}>
            Schedule a Service
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;