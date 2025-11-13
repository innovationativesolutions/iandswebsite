// src/components/About.tsx
import Image from "next/image";
import {
  SparklesIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const values = [
  { title: "Innovation with Purpose", icon: SparklesIcon },
  { title: "Human-Centered Design", icon: UserGroupIcon },
  { title: "Diversity & Inclusion (women-owned)", icon: UserGroupIcon },
  { title: "Honesty, Empathy, Accountability", icon: ShieldCheckIcon },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-12 sm:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-cyan-400 via-white to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 sm:py-16 mt-4 sm:mt-6 rounded-lg">
          <div className="prose prose-gray dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-4 text-center px-6 py-8">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <span className="font-bold">Our mission is to design </span> and deliver innovative software solutions that empower businesses to thrive.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our company is committed to building products that are accessible, reliable, and designed to target clients&apos; custom KPIs to help identify improvement enablers and measurable outcomes[...]
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As a women-owned company, we are dedicated to fostering diversity and inclusion — proving that diverse teams drive superior technology and progress, pushing the industry toward a m[...]
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We are built on honesty and empathy and firmly believe that honoring commitments and admitting mistakes are essential for maintaining credibility and respect.
            </p>
          </div>
        </div>

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 mt-8 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Us
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            To design and deliver innovative, reliable, and human-centered solutions that empower businesses to thrive.
          </p>
        </div>

        {/* Leadership */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-4 order-2 lg:order-1">
            <Image
              src="/CEO.jpeg"
              alt="Megha Davè"
              width={300}
              height={200}
              className="w-full max-w-sm mx-auto lg:max-w-none rounded-2xl object-cover shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
            />
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            {/* Mission Section */}
            <div className="mb-8 sm:mb-12">
              <p className="prose prose-gray dark:prose-invert max-w-none text-base sm:text-lg leading-relaxed">
                Founded by <span className="font-medium">Megha Davè</span>, who brings innovation, resilience, and transparency to deliver sustainable solutions and build long-term partnerships.
              </p>

              <div className="mt-6 sm:mt-8" />

              <div className="space-y-6 text-justify">
                <div className="prose prose-gray dark:prose-invert max-w-none text-base sm:text-lg leading-relaxed space-y-6">
                  <p>
                    As a first-time woman entrepreneur, <span className="font-medium">Megha Davè</span> brings innovation, resilience,
                    and a fresh perspective to address businesses&apos; daily challenges and operational roadblocks with tailor-made solutions. With a passion for turning ideas into impactful digital p[...]
                  </p>
                  <p>
                    Entering a competitive tech landscape, she champions diversity and inclusion and believes that powerful technologies and impactful solutions begin with listening and empathy.
                  </p>
                  <p>
                    Megha is passionate about building unique and sustainable tools tailored to clients&apos; business cases and ensuring objectives are met with precision. She leads a team that transf[...]
                  </p>
                  <p>
                    She believes in transparency and genuine partnership, is prepared to pivot strategies when needed, and is not afraid to challenge the status quo to find innovative solutions fo[...]
                  </p>
                  <p>
                    Megha Davè is committed to creating meaningful and economical digital solutions for clients by building transparent relationships, not just transactional engagements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 mb-8 sm:mb-12 lg:mb-16 mt-12 sm:mt-16">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translat[...]"
              >
                <div className="flex items-start sm:items-center gap-3 mb-2 sm:mb-3">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white leading-tight">
                    {v.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;