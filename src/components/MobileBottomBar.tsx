import { Phone, Calendar } from "lucide-react";

const MobileBottomBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg pb-safe">
      <div className="flex h-16">
        <a
          href="tel:+233244222313"
          className="flex-1 flex flex-col items-center justify-center bg-white text-secondary hover:bg-red-50 active:bg-red-100 transition-colors border-r border-gray-200"
        >
          <Phone className="w-6 h-6 mb-1" />
          <span className="text-xs font-bold">Emergency Call</span>
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector("#contact");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex-1 flex flex-col items-center justify-center bg-primary text-white hover:bg-primary/90 active:bg-primary/80 transition-colors"
        >
          <Calendar className="w-6 h-6 mb-1" />
          <span className="text-xs font-bold">Book Online</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;
