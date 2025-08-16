import React from "react";
import TeamMember from "../../component/TeamMember/TeamMember";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Who We <span className="text-blue-600">Are</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Root For Software Solutions is a team of passionate engineers,
            designers, and problem solvers. We craft reliable, scalable, and
            user-centered software products that solve real business challenges
            and drive digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <TeamMember name="Omar Alkhateen" role="Full-Stack Developer" />
          <TeamMember name="Ayman Albilbase" role="Full-Stack Developer" />
          <TeamMember name="User User" role="UI/UX Design Lead" />
          <TeamMember name="User User" role="Mobile App Developer" />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600 dark:text-gray-300">
                Projects Completed
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
              <p className="text-gray-600 dark:text-gray-300">
                Years Experience
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-600 dark:text-gray-300">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
