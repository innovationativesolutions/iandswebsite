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
import { 
  MegaphoneIcon, 
  CpuChipIcon, 
  ClipboardDocumentListIcon, 
  BuildingOffice2Icon, 
  UserGroupIcon,
  AdjustmentsHorizontalIcon
} from "@heroicons/react/24/solid";

import {servicesInfo } from "@/components/data";
export default function Home() {
  const [showAllServices, setShowAllServices] = useState(false);
  const serviceEntries = Object.entries(servicesInfo);
  const visibleServices = showAllServices ? serviceEntries : serviceEntries.slice(0, 4);
  const hasMoreServices = serviceEntries.length > 4;

  // Function to get the appropriate icon for each service category
  const getServiceIcon = (category: string) => {
    switch (category) {
      case "Sales & Marketing Solutions":
        return MegaphoneIcon;
      case "Emerging Technologies":
        return CpuChipIcon;
      case "Project Management":
        return ClipboardDocumentListIcon;
      case "Engineering Services":
        return AdjustmentsHorizontalIcon;
      case "Construction Management":
        return BuildingOffice2Icon;
      case "Staffing Services":
        return UserGroupIcon;
      default:
        return ClipboardDocumentListIcon;
    }
  };

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
          Detailed Services
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-500 text-center dark:text-gray-400 mb-8">
          Comprehensive solutions across multiple domains
        </p>
      </div>

      {/* Services Info Cards */}
      <Container className="px-4 sm:px-6">
        <div className="grid gap-4 sm:gap-6 mt-8 sm:mt-10 grid-cols-1 lg:grid-cols-2">
          {visibleServices.map(([category, services], index) => {
            const IconComponent = getServiceIcon(category);
            return (
            <div key={index} className="p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-primary-200/50 dark:hover:shadow-primary-800/50 hover:border-primary-300 dark:hover:border-primary-600">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {category}
                </h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </div>
        
        {/* Show More/Less Button */}
        {hasMoreServices && (
          <div className="flex justify-center mt-6 sm:mt-8 px-4">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 ease-in-out hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
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

      {/* Mission Section */}
      

      
{/* 
      <SectionTitle
        title="Certifications"
      >
        Our professional certifications and credentials
      </SectionTitle> */}

      {/* Certifications Grid */}
      {/* <Container className="px-4 sm:px-6">
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
      </Container> */}
        <AboutSection/>
        {/* Work Portfolio Banner Section */}
      <section className="relative bg-gradient-to-br from-cyan-400 via-white to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <Container className="px-2 sm:px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Our Work Portfolio"
            >
              <span>Coming Soon</span>
            </SectionTitle>
          </div>
        </Container>
      </section>
      <ContactSection/>

    </Container>
  );
}
