"use client";

import React from 'react';
import {
  ChartBarIcon,
  CpuChipIcon,
  ClipboardDocumentListIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { Container } from './Container';
// A placeholder for the Container component to resolve the import issue.
// It centers content and adds padding, similar to the original.
// const Container = ({ children, className = '', id }) => {
//   return (
//     <div id={id} className={`container p-8 mx-auto xl:px-0 ${className}`}>
//       {children}
//     </div>
//   );
// };

// Data for the value pillar cards
const valuePillars = [
  {
    title: "Consulting & Strategy",
    description: "Clarity, governance, and roadmaps aligned to KPIs.",
    icon: ChartBarIcon,
  },
  {
    title: "AI & Emerging Tech",
    description: "Data science, ML, RPA, BI, low-code apps, IoT.",
    icon: CpuChipIcon,
  },
  {
    title: "Project Delivery",
    description: "PMO, project controls, FID/DQ analysis.",
    icon: ClipboardDocumentListIcon,
  },
  {
    title: "Construction Services",
    description: "Estimation, scheduling, field-office integration.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Branding & Digital",
    description: "Logos, brand kits, websites, campaigns.",
    icon: PaintBrushIcon,
  },
  {
    title: "Staffing",
    description: "IT & construction talent to scale teams.",
    icon: UserGroupIcon,
  },
];

export const Hero = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      {/* Hero Section with Gradient Background */}
      <section className="relative bg-gradient-to-br from-cyan-400 via-white to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <Container className="flex flex-wrap justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex items-center w-full">
            <div className="max-w-6xl mb-8 mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-800 dark:text-white">
              Technology & Management Services that{' '}
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
                  Move You Forward
                </span>
              </h1>
              <p className="py-5 text-base sm:text-lg md:text-2xl leading-relaxed text-gray-500 dark:text-gray-300 max-w-5xl mx-auto">
                From strategic consulting and project delivery to AI-powered solutions and staffing, we turn your ambitions into measurable actions.
              </p>

              <div className="flex flex-col items-center space-y-6 sm:space-y-0 sm:space-x-8 sm:flex-row sm:justify-center mt-8">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-medium text-center text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors duration-300">
                  Talk to an Expert
                </a>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-medium text-center text-gray-800 bg-gray-200 rounded-md dark:text-white dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* New Services and Trust Section */}
      <Container id="services" className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center text-center">
           <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 text-center dark:text-white mb-4">
            Our Core Services
          </p>
          <p 
          className="text-base sm:text-lg lg:text-xl text-gray-500 text-center dark:text-gray-400 mb-8" >Comprehensive solutions for modern business challenges</p>
          


          
          {/* Value Pillar Cards */}
          <div className="grid gap-4 sm:gap-6 mt-8 sm:mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {valuePillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div key={index} className="p-4 sm:p-6 text-left bg-gray-100 rounded-lg dark:bg-gray-800 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-primary-200/50 dark:hover:shadow-primary-800/50">
                   <div className="flex items-start sm:items-center mb-3">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0 mt-1 sm:mt-0" />
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white leading-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}

// Default export for the component
export default Hero;

