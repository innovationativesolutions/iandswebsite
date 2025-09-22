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
      <Container className="flex flex-wrap justify-center">
        <div className="flex items-center w-full">
          <div className="max-w-4xl mb-8 mx-auto text-center">
            <h1 className="text-6xl font-bold leading-snug tracking-tight text-gray-800 lg:text-6xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
              Technology & Management Services that Move You Forward
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              From strategic consulting and project delivery to AI-powered solutions and staffing, we turn your ambitions into measurable actions.
            </p>

            <div className="flex flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row sm:justify-center">
              <a
                href="#contact" // Assuming you have a contact section with id="contact"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Talk to an Expert
              </a>
              <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, 'services')}
                className="px-8 py-4 text-lg font-medium text-center text-gray-800 bg-gray-200 rounded-md dark:text-white dark:bg-gray-700">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </Container>
      
      {/* New Services and Trust Section */}
      <Container id="services">
        <div className="flex flex-col justify-center text-center">
           <p className="text-4xl font-semibold text-gray-900 text-center dark:text-white">
            Our Core Services
          </p>
          
          {/* Value Pillar Cards */}
          <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {valuePillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div key={index} className="p-6 text-left bg-gray-100 rounded-lg dark:bg-gray-800 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-indigo-200/50 dark:hover:shadow-indigo-800/50">
                   <div className="flex items-center mb-3">
                    <IconComponent className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
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

