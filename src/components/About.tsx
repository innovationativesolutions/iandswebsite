// components/AboutSection.tsx
import Image from "next/image";
import {
  SparklesIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import { Container } from "@/components/Container";
const values = [
  { title: "Innovation with Purpose", icon: SparklesIcon },
  { title: "Human-Centered Design", icon: UserGroupIcon },
  { title: "Diversity & Inclusion (women-owned)", icon: UserGroupIcon },
  { title: "Honesty, Empathy, Accountability", icon: ShieldCheckIcon },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-12 sm:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Us
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            To design and deliver innovative, reliable, and human-centered
            solutions that empower businesses to thrive.
          </p>
        </div>

        {/* Leadership */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Image
              src="/CEO.jpeg"
              alt="Megha Dâvè"
              width={300}
              height={200}
              className="w-full max-w-sm mx-auto lg:max-w-none rounded-2xl object-cover shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
            />
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Mission Section */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Mission
              </h2>
              <div className="space-y-4 text-left">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our mission is to design and deliver innovative software solutions that empower businesses to thrive.
                </p>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our company is committed to building products that are accessible, reliable, and designed to target client&apos;s custom KPIs that helps identify improvement enablers. Our solution centric agile team listens to your problem statement deeply to create precise and intuitive, human-centered applications that help solve complex roadblocks and accelerate progress.
                </p>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  As a women-owned company, we are dedicated to fostering diversity and inclusion, proving that diverse teams drive superior technology and progress, pushing the industry toward a more inclusive future.
                </p>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  We are built on honesty and empathy and firmly believe that honoring commitments and admitting mistakes are essential for maintaining credibility and respect.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values Grid and Leadership - Below the image and mission */}
        <div className="mt-8 sm:mt-12">
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 mb-8 sm:mb-12 lg:mb-16">
  {values.map((v, i) => (
    <div
      key={i}
      className="group relative p-4 sm:p-6 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
    >
      <div className="flex items-start sm:items-center gap-3 mb-2 sm:mb-3">
        <v.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5 sm:mt-0 transition-colors duration-300" />
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white leading-tight">
          {v.title}
        </h3>
      </div>
      {/* Hover line effect */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary-600 to-primary-400 transition-all duration-300 group-hover:w-full"></div>
    </div>
  ))}
</div>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Leadership
          </h4>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Founded by <span className="font-medium">Megha Dâvè</span>, who
            brings innovation, resilience, and transparency to deliver
            sustainable solutions and build long-term partnerships.
          </p>
        </div>

        {/* Extended About Us description */}
        <div className="mt-12 sm:mt-16">
          <div className="prose prose-gray dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              As a first-time woman entrepreneur, <span className="font-medium">Megha Dâvè</span> brings innovation, resilience, 
              and a fresh perspective to address businesses’ daily challenges and operational roadblocks with 
              tailor-made solutions. With a passion for turning ideas into impactful digital solutions, she 
              founded Innovations and Solutions to serve businesses seeking custom-built websites, software, 
              and applications. Her leadership is fueled by a commitment to excellence, collaboration, and 
              empowering others to thrive in technology-driven fields.
            </p>
            <p>
              As a woman entering a competitive tech landscape, she brings an unwavering belief in diversity 
              and inclusion. She believes that powerful technologies and impactful solutions begin with listening 
              and empathy.
            </p>
            <p>
              She’s passionate about building unique and sustainable tools that are geared towards clients’ 
              business cases and ensure the objectives are met with precision. She leads a team that transforms 
              business ideas into scalable software while maintaining clients’ budget and schedule commitments.
            </p>
            <p>
              She believes in transparency and genuine partnership, always prepared to pivot business strategies 
              and not afraid to challenge the status quo to find innovative solutions for the company and clients. 
              Customer relationships are core to her business philosophy which starts with honest communications.
            </p>
            <p>
              Megha Dâvè is committed to her dream to create meaningful and economical digital solutions for clients 
              by building transparent relationships, and not just business transactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
