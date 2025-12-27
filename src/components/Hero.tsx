import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Clock, Award, Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-hvac.jpg";

const Hero = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex overflow-hidden bg-gray-900">
      {/* Left Content Panel */}
      <div className="relative z-20 w-full lg:w-1/2 flex items-center">
        <div className="max-w-2xl mx-auto px-8 py-12 lg:px-16">
          {/* Tagline Badge */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg text-sm font-semibold shadow-lg">
              <Award className="w-4 h-4" />
              Accra's Most Trusted HVAC Service
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Your Comfort,
            <br />
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                Our Expertise
              </span>
              <div className="absolute -bottom-2 left-0 w-3/4 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-lg">
            24/7 emergency repairs, professional installations, and maintenance plans that keep your space perfect year-round.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-10 py-7 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
              onClick={() => handleNavClick("#contact")}
            >
              <Phone className="w-5 h-5 mr-3" />
              Emergency Call Now
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 hover:bg-white/10 text-white px-10 py-7 rounded-xl text-lg font-semibold backdrop-blur-sm"
              onClick={() => handleNavClick("#services")}
            >
              <Calendar className="w-5 h-5 mr-3" />
              Schedule Service
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <ShieldCheck className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-white font-bold text-lg">Guaranteed</h3>
              <p className="text-gray-400 text-sm">Licensed & Insured</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <Clock className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-white font-bold text-lg">Fast Response</h3>
              <p className="text-gray-400 text-sm">Same-Day Service</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <Award className="w-8 h-8 text-yellow-400 mb-3" />
              <h3 className="text-white font-bold text-lg">5-Star</h3>
              <p className="text-gray-400 text-sm">500+ Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Panel */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-gray-900/30 via-gray-900/10 to-transparent z-10" />
        <img
          src={heroImage}
          alt="HVAC Technician at work"
          className="w-full h-full object-cover object-left"
        />
        {/* Floating Stats Overlay */}
        <div className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-xs">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl p-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white/80 text-sm">Average Response Time</p>
              <p className="text-white text-2xl font-bold">45 mins</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
