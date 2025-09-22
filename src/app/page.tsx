"use client";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import {AboutSection} from "@/components/About";
import {ContactSection} from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

import {servicesInfo } from "@/components/data";
export default function Home() {
  const [showAllServices, setShowAllServices] = useState(false);
  const serviceEntries = Object.entries(servicesInfo);
  const visibleServices = showAllServices ? serviceEntries : serviceEntries.slice(0, 4);
  const hasMoreServices = serviceEntries.length > 4;

  // Function to get certification images
  const getCertificationImages = () => {
    return [
      {
        src: "/certifications/pmi-pmbok-logo.jpg",
        name: "PMI PMBOK",
        alt: "Project Management Institute PMBOK Certification"
      },
      {
        src: "/certifications/pngfind.com-lean-png-508652.png",
        name: "Lean Six Sigma",
        alt: "Lean Six Sigma Certification"
      },
      {
        src: "/certifications/pngwing.com.png",
        name: "Professional Certification",
        alt: "Professional Certification"
      },
      {
        src: "/certifications/occupational-safety-and-health-administration-national-safety-council-msdsonline-osha-training-institute-png-favpng-BBxxvKsTQuxyJ1W5hFfzTzrQB.jpg",
        name: "OSHA Safety",
        alt: "Occupational Safety and Health Administration Certification"
      }
    ];
  };

  return (
    <Container>
      <Hero />
      <div className="text-center mt-8 sm:mt-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white">
          Our Services
        </h2>
      </div>

      {/* Services Info Cards */}
      <Container className="px-4 sm:px-6">
        <div className="grid gap-4 sm:gap-6 mt-8 sm:mt-10 grid-cols-1 lg:grid-cols-2">
          {visibleServices.map(([category, services], index) => (
            <div key={index} className="p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-indigo-200/50 dark:hover:shadow-indigo-800/50 hover:border-indigo-300 dark:hover:border-indigo-600">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                {category}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Show More/Less Button */}
        {hasMoreServices && (
          <div className="flex justify-center mt-6 sm:mt-8 px-4">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              {showAllServices ? (
                <>
                  <span>Show Less Services</span>
                  <ChevronUpIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </>
              ) : (
                <>
                  <span className="text-center">Show More Services ({serviceEntries.length - 4} more)</span>
                  <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </>
              )}
            </button>
          </div>
        )}
      </Container>

      <SectionTitle
        preTitle="Projects"
        title="Our Work Portfolio"
      >
        Coming soon
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        title="Certifications"
      >
        Our professional certifications and credentials
      </SectionTitle>

      {/* Certifications Grid */}
      <Container className="px-4 sm:px-6">
        <div className="grid gap-4 sm:gap-6 mt-8 sm:mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {getCertificationImages().map((cert, index) => (
            <div key={index} className="p-4 sm:p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center h-20 sm:h-24 mb-3 sm:mb-4">
                <img 
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-full object-contain rounded"
                  loading="lazy"
                />
              </div>
              <h4 className="text-center text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 leading-tight">{cert.name}</h4>
            </div>
          ))}
        </div>
      </Container>
        <AboutSection/>
      <ContactSection/>

    </Container>
  );
}
