"use client";

import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know me better — my journey, passion, and what drives me as a developer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">What I Do</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {[
                    "Build scalable, performant web applications with modern frameworks",
                    "Design clean, maintainable architecture following best practices",
                    "Collaborate with cross-functional teams to deliver quality products",
                    "Mentor junior developers and promote knowledge sharing",
                    "Stay current with emerging technologies and industry trends",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Info cards */}
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
              <dl className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm text-gray-500 dark:text-gray-400">Location</dt>
                    <dd className="text-gray-900 dark:text-white font-medium">{personalInfo.location}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500 dark:text-gray-400">Email</dt>
                    <dd className="text-gray-900 dark:text-white font-medium">{personalInfo.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500 dark:text-gray-400">Role</dt>
                    <dd className="text-gray-900 dark:text-white font-medium">{personalInfo.title}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500 dark:text-gray-400">Availability</dt>
                    <dd className="text-gray-900 dark:text-white font-medium text-green-600 dark:text-green-400">Open to opportunities</dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Clean Code", desc: "Write maintainable, readable code" },
                  { title: "Performance", desc: "Optimize for speed and efficiency" },
                  { title: "User Experience", desc: "Build intuitive, accessible interfaces" },
                  { title: "Continuous Learning", desc: "Always improving and adapting" },
                ].map((value, index) => (
                  <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                    <h4 className="font-medium text-gray-900 dark:text-white">{value.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}