import { CheckCircle, Users, Award, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: ThumbsUp, value: "98%", label: "Satisfaction Rate" },
  { icon: CheckCircle, value: "24/7", label: "Support Available" },
];

const features = [
  "Licensed and certified HVAC technicians",
  "Transparent pricing with no hidden fees",
  "Same-day emergency service available",
  "Energy-efficient solutions to save costs",
  "Full warranty on all installations",
  "Free estimates on all major projects",
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-foreground">
              Trusted HVAC Experts in{" "}
              <span className="text-primary">Accra, Ghana</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Trust HVAC Services has been providing top-quality heating,
              ventilation, and air conditioning services to homes and businesses
              across Accra for over a decade. Our team of certified technicians
              is committed to delivering exceptional service with integrity and
              professionalism.
            </p>
            <p className="text-muted-foreground mb-8">
              Located at Junction, No 48 Sotrek Building, Ecobank MC Cathy Hills
              branch, Mallam, Accra, we're strategically positioned to serve
              clients throughout the Greater Accra Region promptly and
              efficiently.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-card rounded-2xl p-6 text-center border border-border shadow-md hover-lift ${
                  index === 0 ? "lg:mt-8" : ""
                } ${index === 3 ? "lg:mb-8" : ""}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;