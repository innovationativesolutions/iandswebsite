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
      <div className="text-center mt-12">
        <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">
          Our Services
        </h2>
      </div>

      {/* Services Info Cards */}
      <Container>
        <div className="grid gap-6 mt-10 lg:grid-cols-2">
          {visibleServices.map(([category, services], index) => (
            <div key={index} className="p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-indigo-200/50 dark:hover:shadow-indigo-800/50 hover:border-indigo-300 dark:hover:border-indigo-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category}
              </h3>
              <ul className="space-y-3">
                {services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Show More/Less Button */}
        {hasMoreServices && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out hover:scale-105 shadow-lg"
            >
              {showAllServices ? (
                <>
                  <span>Show Less Services</span>
                  <ChevronUpIcon className="w-5 h-5" />
                </>
              ) : (
                <>
                  <span>Show More Services ({serviceEntries.length - 4} more)</span>
                  <ChevronDownIcon className="w-5 h-5" />
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
      <Container>
        <div className="grid gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {getCertificationImages().map((cert, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center h-24 mb-4">
                <img 
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-full object-contain rounded"
                  loading="lazy"
                />
              </div>
              <h4 className="text-center text-sm font-medium text-gray-700 dark:text-gray-300">{cert.name}</h4>
            </div>
          ))}
        </div>
      </Container>
        <AboutSection/>
      <ContactSection/>

    </Container>
  );
}
