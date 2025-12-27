import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Kwame Asante",
    role: "Homeowner, East Legon",
    content:
      "Trust HVAC installed our new air conditioning system and the difference is incredible! The team was professional, on time, and explained everything clearly. Highly recommend their services.",
    rating: 5,
  },
  {
    name: "Ama Serwaa",
    role: "Business Owner, Osu",
    content:
      "We've been using Trust HVAC for our office building maintenance for 3 years now. Their response time is excellent and they always fix issues on the first visit. Great value for money!",
    rating: 5,
  },
  {
    name: "Kofi Mensah",
    role: "Restaurant Manager, Airport Area",
    content:
      "When our AC broke down during the hottest week of the year, Trust HVAC came within 2 hours and fixed it. Their emergency service saved our business. Thank you!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
            Trusted by <span className="text-primary">Neighbors</span> & <span className="text-secondary">Businesses</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from real customers in Accra who experienced the Trust HVAC difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 mb-8 leading-relaxed italic relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
