import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const workExperience = [
    {
      title: 'Front-End Developer',
      company: 'Freelance (Upwork & Nafathi)',
      location: 'Remote',
      period: '2025 - Present',
      description: [
        'Developing modern web applications using Next.js and Tailwind CSS',
        'Building interactive UI components with a strong focus on performance and user experience',
        'Collaborating with clients to deliver customized front-end solutions',
        'Optimizing web apps for SEO and accessibility'
      ]
    },
    {
      title: 'Front-End Developer',
      company: 'Postly (Personal Project)',
      location: 'Remote',
      period: '2025 - Present',
      description: [
        'Developed a social platform where users can create profiles and post prompts',
        'Implemented authentication and authorization with NextAuth.js',
        'Designed reusable UI components using Tailwind CSS',
        'Integrated Mongoose for database management'
      ]
    },
    {
      title: 'Front-End Developer',
      company: 'dashMinds (Dashboard Project)',
      location: 'Remote',
      period: '2025 - Present',
      description: [
        'Designed and developed a dashboard interface for employee and department management',
        'Used App Router in Next.js for optimized routing and better performance',
        'Implemented role-based access control for administrators and users'
      ]
    },
    {
      title: 'WordPress Developer',
      company: 'Various Projects',
      location: 'Remote',
      period: '2024 - Present',
      description: [
        'Created custom WordPress themes and plugins',
        'Optimized website performance and loading speeds',
        'Implemented responsive designs for mobile compatibility',
        'Managed content and provided ongoing maintenance'
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor's Degree in Computer Science (In Progress)",
      institution: 'Borg El Arab Technological University',
      location: 'Alexandria, Egypt',
      period: '2022 - Present',
      description: 'Currently studying computer science with a focus on front-end development, web technologies, and modern frameworks. Working on various academic projects related to web applications and AI.'
    }
  ];

  const TimelineItem = ({ item, type, isLast }) => (
    <div className="relative flex items-start space-x-4 pb-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-700"></div>
      )}
      
      {/* Timeline Dot */}
      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
        {type === 'work' ? (
          <Briefcase className="text-white" size={20} />
        ) : (
          <GraduationCap className="text-white" size={20} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-2">{item.title || item.degree}</h3>
          <p className="text-blue-400 font-medium mb-2">{item.company || item.institution}</p>
          
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
    <section id="experience" className="min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey and educational background that have shaped my skills and expertise.
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

