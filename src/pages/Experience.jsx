import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const workExperience = [
    {
      title: "Flutter Developer",
      company: "Freelance (Upwork & Freelance)",
      location: "Remote",
      period: "2024 - Present",
      description: [
        "Designing and developing cross-platform mobile applications using Flutter and Dart",
        "Creating responsive and adaptive UI components to enhance user experience",
        "Integrating APIs and managing state using Bloc and Cubit for scalable apps",
        "Collaborating with clients to deliver tailored mobile solutions with high performance",
      ],
    },
  ];

  const education = [
    {
      degree: "Self-Taught Software Developer",
      institution: "Independent Learning",
      location: "Remote / Online",
      period: "2020 - Present",
      description:
        "Over 3 years of dedicated self-learning in mobile and web development. Gained practical experience building Flutter applications, responsive web apps, and integrating APIs. Skilled in modern frameworks, front-end technologies, and creating scalable, high-performance solutions.",
    },
  ];

  const TimelineItem = ({ item, type, isLast }) => (
    <div className="relative flex items-start space-x-4 pb-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-700"></div>
      )}

      {/* Timeline Dot */}
      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
        {type === "work" ? (
          <Briefcase className="text-white" size={20} />
        ) : (
          <GraduationCap className="text-white" size={20} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-2">
            {item.title || item.degree}
          </h3>
          <p className="text-blue-400 font-medium mb-2">
            {item.company || item.institution}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-gray-400">
            <div className="flex items-center">
              <MapPin size={14} className="mr-1" />
              {item.location}
            </div>
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {item.period}
            </div>
          </div>

          {Array.isArray(item.description) ? (
            <ul className="space-y-2">
              {item.description.map((desc, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  {desc}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-300">{item.description}</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      className="min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey and educational background that have shaped
            my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="text-blue-400 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-white">Work Experience</h2>
            </div>

            <div className="space-y-0">
              {workExperience.map((job, index) => (
                <TimelineItem
                  key={index}
                  item={job}
                  type="work"
                  isLast={index === workExperience.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="text-blue-400 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>

            <div className="space-y-0">
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  item={edu}
                  type="education"
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
