import { useState } from "react";
import { AirVent, Fan, Wrench, ThermometerSun, Settings, Snowflake, Cpu, Building2, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: AirVent,
    title: "AC Installation",
    description:
      "Expert installation of energy-efficient air conditioning systems for homes and commercial spaces. We work with all major brands.",
    type: "cooling",
  },
  {
    icon: Flame,
    title: "Heating Systems",
    description:
      "Reliable heating solutions for chilly nights. From furnace repair to complete system installations, we ensure your home stays cozy.",
    type: "heating",
  },
  {
    icon: Fan,
    title: "Air Quality Solutions",
    description:
      "Professional air quality solutions including ventilation systems, air purifiers, and humidity control for healthier indoor environments.",
    type: "both",
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    description:
      "Fast, reliable repairs for all HVAC systems. Our preventive maintenance plans keep your equipment running smoothly year-round.",
    type: "both",
  },
  {
    icon: ThermometerSun,
    title: "Smart Thermostats",
    description:
      "Installation and programming of smart thermostats. Control your climate from anywhere and save on energy bills.",
    type: "both",
  },
  {
    icon: Settings,
    title: "System Upgrades",
    description:
      "Upgrade to modern, energy-efficient HVAC systems. We help you reduce energy costs while improving comfort.",
    type: "both",
  },
];

const lgProducts = [
  {
    icon: Snowflake,
    title: "LG Dual Inverter Split AC",
    description:
      "Experience faster cooling with up to 40% energy savings. The Dual Inverter Compressor ensures quiet operation and durability.",
  },
  {
    icon: Building2,
    title: "LG VRF System",
    description:
      "Variable Refrigerant Flow systems for large commercial buildings. Maximum efficiency with individual zone control.",
  },
  {
    icon: Cpu,
    title: "LG Multi V Anticorrosion",
    description:
      "Advanced anticorrosion technology designed for harsh environments. Ocean Black Fin protects against salt, sand, and industrial pollutants.",
  },
];

const Services = () => {
  const [mode, setMode] = useState<"cooling" | "heating">("cooling");

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const isCooling = mode === "cooling";
  const primaryColor = isCooling ? "bg-accent" : "bg-secondary";
  const textColor = isCooling ? "text-accent" : "text-secondary";
  const borderColor = isCooling ? "border-accent" : "border-secondary";
  const buttonVariant = isCooling ? "default" : "secondary";

  return (
    <section id="services" className={`section-padding bg-background transition-colors duration-500`}>
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
             <span className={`text-sm font-bold ${isCooling ? "text-accent" : "text-muted-foreground"}`}>COOLING MODE</span>
             <Switch
                checked={mode === "heating"}
                onCheckedChange={(checked) => setMode(checked ? "heating" : "cooling")}
                className="data-[state=checked]:bg-secondary data-[state=unchecked]:bg-accent"
             />
             <span className={`text-sm font-bold ${!isCooling ? "text-secondary" : "text-muted-foreground"}`}>HEATING MODE</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
            Complete <span className={textColor}>{isCooling ? "Cooling" : "Heating"}</span> Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            {isCooling
              ? "Beat the heat with our premium air conditioning installation, repair, and maintenance services."
              : "Stay warm and cozy with our expert heating repair and installation services."
            }
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group card-pro p-6 offset-border hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 transition-colors duration-300 ${isCooling ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-600'}`}
                >
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>

                {/* Decorative background element */}
                <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-5 transition-colors duration-300 ${isCooling ? 'bg-blue-500' : 'bg-red-500'}`} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* LG Products Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-4">
              Official LG Partner
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-foreground">
              Premium <span className="text-red-600">LG Products</span> We Install
            </h3>
            <p className="text-muted-foreground">
              As an authorized LG dealer, we provide top-of-the-line air conditioning solutions
              with industry-leading technology and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lgProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl hover:border-red-100 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 bg-red-600 text-white shadow-lg shadow-red-200">
                  <product.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 text-foreground group-hover:text-red-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => handleNavClick("#contact")}
            className={`${isCooling ? 'bg-accent hover:bg-accent/90' : 'bg-secondary hover:bg-secondary/90'} text-white transition-colors duration-300 shadow-lg hover:shadow-xl`}
          >
            Schedule a {isCooling ? "Cooling" : "Heating"} Service
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
