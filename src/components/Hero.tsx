import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-hvac.jpg";

const Hero = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-primary"
    >
      {/* Background with Asymmetrical Overlay */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1581094794329-cd1361dca687?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="HVAC Technician"
            className="w-full h-full object-cover object-center"
          />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl">
          <div className="animate-fade-in mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 text-secondary-foreground rounded-full text-sm font-bold backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              #1 Rated HVAC Service in Accra
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 font-heading leading-tight animate-slide-up tracking-tight">
            Comfort That
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-secondary drop-shadow-sm">Lasts All Year.</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-xl animate-slide-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            Don't let the heat beat you. Expert installation, rapid repair, and preventative maintenance for homes that stay cool and businesses that stay productive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => handleNavClick("#contact")}
              className="group text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Emergency Repair
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="hero-outline"
              onClick={() => handleNavClick("#services")}
              className="text-lg px-8 py-6 h-auto border-2 hover:bg-white/10"
            >
              View Service Plans
            </Button>
          </div>

          {/* Trust Indicators - Horizontal */}
          <div className="flex flex-col sm:flex-row gap-8 animate-slide-up border-t border-white/10 pt-8" style={{ animationDelay: "0.3s" }}>
             <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                    <h3 className="text-white font-bold">Licensed & Insured</h3>
                    <p className="text-blue-200 text-sm">100% Covered Protection</p>
                </div>
             </div>
             <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                    <h3 className="text-white font-bold">Same-Day Service</h3>
                    <p className="text-blue-200 text-sm">When you call before 10am</p>
                </div>
             </div>
             <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                <div>
                    <h3 className="text-white font-bold">5-Star Rated</h3>
                    <p className="text-blue-200 text-sm">Trusted by 500+ Locals</p>
                </div>
             </div>
          </div>
        </div>

        {/* Abstract/Technical Visual (Optional, or empty for layout balance on large screens) */}
        <div className="hidden lg:block relative">
            {/* We could put a floating card here or just let the image show through the gradient more on this side */}
             <div className="absolute -right-20 top-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl filter" />
             <div className="absolute -right-10 bottom-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl filter" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
