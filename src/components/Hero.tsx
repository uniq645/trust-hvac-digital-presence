import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, Zap, Thermometer, Users } from "lucide-react";
import heroImage from "@/assets/hero-hvac.jpg";

const Hero = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      {/* Background Image with Geometric Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="HVAC Technician working"
          className="w-full h-full object-cover object-center scale-110"
        />
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,transparent_0%,#0f172a_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-transparent" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="max-w-2xl">
          {/* Minimal Badge */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3">
              <div className="w-16 h-px bg-gradient-to-r from-orange-500 to-transparent" />
              <span className="text-orange-400 font-mono text-sm tracking-widest uppercase">
                HVAC Excellence
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 font-sans tracking-tight">
            Climate
            <br />
            <span className="text-gray-300">Mastery</span>
            <span className="text-orange-500">.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl text-gray-400 mb-16 leading-relaxed max-w-xl">
            Professional HVAC solutions engineered for Accra's unique climate demands.
          </p>

          {/* Minimal CTA */}
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <Button
              size="lg"
              className="group bg-transparent border-2 border-orange-500 hover:bg-orange-500/10 text-white px-12 py-7 rounded-none text-lg font-medium transition-all duration-300"
              onClick={() => handleNavClick("#contact")}
            >
              <span className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Immediate Response
                <ArrowRight className="w-5 h-5 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border-2 border-white/20 hover:border-white/40 text-white px-12 py-7 rounded-none text-lg font-medium hover:bg-white/5"
              onClick={() => handleNavClick("#services")}
            >
              <Calendar className="w-5 h-5 mr-3" />
              Planned Service
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-8 pt-12 border-t border-white/10">
            {[
              { icon: Zap, value: "24/7", label: "Emergency Service", color: "text-orange-500" },
              { icon: Thermometer, value: "100%", label: "Satisfaction", color: "text-blue-400" },
              { icon: Users, value: "500+", label: "Clients Served", color: "text-green-400" }
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <div>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side Technical Elements */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3">
        <div className="relative h-full">
          {/* Vertical Text */}
          <div className="absolute right-12 top-0 transform -translate-y-1/2 rotate-90 origin-right">
            <p className="text-white/10 text-8xl font-black tracking-widest uppercase">
              HVAC
            </p>
          </div>
          
          {/* Floating Numbers */}
          <div className="absolute right-24 bottom-32">
            <div className="text-6xl font-bold text-white/5">01</div>
          </div>
        </div>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-orange-500 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
