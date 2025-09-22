// components/AboutSection.tsx
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
    <section id="about" className="relative py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            To design and deliver innovative, reliable, and human-centered
            solutions that empower businesses to thrive.
          </p>
        </div>

        {/* Values */}
        

        {/* Leadership */}
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <Image
              src="/CEO.jpeg"
              alt="Megha Dâvè"
              width={300}
              height={200}
              className="rounded-2xl object-cover shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
            />
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mb-16">
          {values.map((v, i) => (
            <div
              key={i}
              className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <v.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  {v.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              Leadership
            </h4>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              Founded by <span className="font-medium">Megha Dâvè</span>, who
              brings innovation, resilience, and transparency to deliver
              sustainable solutions and build long-term partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
