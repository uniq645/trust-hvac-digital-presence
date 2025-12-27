import { CheckCircle, Users, Award, ThumbsUp, MapPin } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="about" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 transform origin-top-right -z-10" />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 font-heading tracking-wide">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-foreground leading-tight">
              We Don't Just Fix ACs. <br/>
              <span className="text-primary">We Restore Comfort.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              For over a decade, Trust HVAC Services has been the backbone of climate control for Accra's homes and businesses. We aren't just technicians; we are your neighbors committed to ensuring your indoor environment is perfect, regardless of the weather outside.
            </p>

            <div className="flex items-start gap-3 mb-8 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-foreground">Local & Accessible</h4>
                    <p className="text-slate-500 text-sm">
                        Junction, No 48 Sotrek Building, Ecobank MC Cathy Hills branch, Mallam, Accra.
                        Strategically positioned for rapid response across the Greater Accra Region.
                    </p>
                </div>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 relative">
             {/* Background blob for visual interest */}
             <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 scale-75" />

            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                  index % 2 !== 0 ? "lg:mt-12" : ""
                }`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-xl mb-4 text-primary">
                  <stat.icon className="w-7 h-7" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-1">
                  {stat.value}
                </p>
                <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
