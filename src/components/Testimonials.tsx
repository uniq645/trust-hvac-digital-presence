import { Star, Quote } from "lucide-react";

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
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience with Trust HVAC Services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 border border-border shadow-md hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;