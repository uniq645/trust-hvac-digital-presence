import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Trust HVAC Services | Professional Heating & Air Conditioning in Accra</title>
        <meta
          name="description"
          content="Trust HVAC Services offers expert heating, ventilation, and air conditioning installation, repair, and maintenance in Accra, Ghana. 24/7 emergency service available. Get your free quote today!"
        />
        <meta
          name="keywords"
          content="HVAC Accra, air conditioning Ghana, heating services, AC installation, AC repair Accra, ventilation services"
        />
        <link rel="canonical" href="https://trusthvac.com" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Trust HVAC Services | Professional HVAC in Accra" />
        <meta
          property="og:description"
          content="Accra's trusted HVAC experts. Professional heating, ventilation, and air conditioning services with 24/7 emergency support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GH" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            "name": "Trust HVAC Services",
            "description": "Professional heating, ventilation, and air conditioning services in Accra, Ghana.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Junction, No 48 Sotrek Building, Ecobank MC Cathy Hills branch, Mallam",
              "addressLocality": "Accra",
              "addressCountry": "GH"
            },
            "telephone": "+233000000000",
            "email": "info@trusthvac.com",
            "openingHours": "Mo-Sa 08:00-18:00",
            "areaServed": "Greater Accra Region, Ghana",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen pb-16 md:pb-0">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
        <MobileBottomBar />
      </div>
    </>
  );
};

export default Index;
