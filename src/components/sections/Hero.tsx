"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.jpg";
import hero5 from "../../assets/hero5.jpeg";
import hero6 from "../../assets/hero6.png";

const heroImages = [ hero2, hero3, hero4, hero5, hero6];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000); // every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden pb-10 sm:pb-10">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={heroImages[current]}
            alt={`background-${current}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-6 sm:px-10 lg:px-12">
          {/* Responsive 2-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left side: headline + CTA */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white">
                Accounting with Clarity. <br />
                Advisory with{" "}
                <span className="text-[#2BA0A6FF] bg-white px-2 rounded">
                  Confidence
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0">
               At Bennett & Chase, we go beyond numbers — we provide insight, guidance, and strategies 
               that empower your business and secure your financial future. 
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4 font-montserrat">
                <button className="w-full sm:w-[212px] h-[52px] sm:h-[60px] bg-[#2BA0A6FF] rounded-lg font-sans text-base sm:text-[16px] font-medium text-white hover:bg-[#53aeb3] transition duration-300">
                  Book a Consultation
                </button>
                <button className="w-full sm:w-[212px] h-[52px] sm:h-[60px] bg-white border border-[#2BA0A6FF] rounded-lg font-sans text-base sm:text-[16px] font-medium text-[#2BA0A6FF] hover:bg-[#EFF6FF] transition duration-300">
                  Explore Our Services
                </button>
              </div>
            </div>

            {/* Right side: features */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-md mx-auto lg:mx-0">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                Our Services at a Glance
              </h3>
              <div className="flex flex-col gap-3 text-sm sm:text-base text-white">
                {[
                  "Business Accounting",
                  "Tax Planning & Compliance",
                  "Audit & Assurance",
                  "Payroll & Bookkeeping",
                  "Financial Advisory",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2BA0A6FF]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
