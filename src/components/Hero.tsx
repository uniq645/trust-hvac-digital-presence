import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Clock, Award, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-hvac.jpg";

const Hero = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center p-4">
      {/* Background with Dual Gradient */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="HVAC Technician"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>

      {/* Floating Content Card */}
      <div className="relative z-20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden max-w-4xl w-full">
        <div className="p-12 lg:p-16">
          {/* Headline Section */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 text-orange-100 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              Trusted by 500+ Homes & Businesses
            </span>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Precision
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300"> Climate Control </span>
              for Accra
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              From emergency repairs to comprehensive installations—experience HVAC service that sets the standard for reliability and comfort.
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
            <div className="flex-1 max-w-md">
              <Button
                size="lg"
                className="w-full group bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white py-8 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-orange-500/30 transition-all duration-300"
                onClick={() => handleNavClick("#contact")}
              >
                <span className="flex items-center justify-center gap-3">
                  Emergency Service
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </div>
            
            <div className="hidden lg:block h-16 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            
            <div className="flex-1 max-w-md">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-white/40 hover:bg-white/10 text-white py-8 rounded-2xl text-xl font-bold backdrop-blur-sm"
                onClick={() => handleNavClick("#services")}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully certified protection", color: "text-green-400" },
              { icon: Clock, title: "24/7 Emergency", desc: "Same-day service guaranteed", color: "text-blue-400" },
              { icon: Award, title: "Satisfaction Guarantee", desc: "5-star rated service", color: "text-yellow-400" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                <div className={`p-3 rounded-xl bg-white/10 ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Gradient Accent */}
        <div className="h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-8 text-white/80 text-sm">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span>Available Now</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
