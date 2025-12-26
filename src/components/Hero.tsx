import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-hvac.jpg";

const Hero = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-secondary/30">
              🌡️ Accra's Most Trusted HVAC Experts
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-heading leading-tight animate-slide-up">
            Stay Cool in Summer.
            <br />
            <span className="text-secondary">Stay Warm in Winter.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Professional heating, ventilation, and air conditioning services for
            homes and businesses across Accra. 24/7 emergency support with
            certified technicians you can trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => handleNavClick("#contact")}
              className="group"
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="hero-outline"
              onClick={() => handleNavClick("#services")}
            >
              Explore Services
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg">
                <Shield className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">Licensed & Insured</p>
                <p className="text-primary-foreground/70 text-sm">Fully certified</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
              <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-lg">
                <Clock className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">24/7 Service</p>
                <p className="text-primary-foreground/70 text-sm">Always available</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-lg">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">10+ Years</p>
                <p className="text-primary-foreground/70 text-sm">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;