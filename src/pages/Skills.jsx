import { Code, Palette, Database, Wrench, GitBranch, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Flutter Development',
      description: 'Building responsive and adaptive mobile UIs with Flutter.',
      technologies: ['Flutter', 'Dart', 'Material Design', 'Cupertino']
    },
    {
      icon: Palette,
      title: 'Styling & UI Frameworks',
      description: 'Designing smooth, user-friendly, and pixel-perfect interfaces.',
      technologies: ['Flutter Widgets', 'Responsive Layouts', 'Animations']
    },
    {
      icon: Layers,
      title: 'State Management',
      description: 'Managing app logic and data flow with scalable architectures.',
      technologies: ['Bloc', 'Cubit', 'Provider']
    },
    {
      icon: Database,
      title: 'Back-End Integration',
      description: 'Connecting apps to real-world data and cloud services.',
      technologies: ['REST APIs', 'Firebase (Auth, Firestore, Storage)']
    },
    {
      icon: Wrench,
      title: 'Development Tools',
      description: 'Using modern tools to optimize development workflow.',
      technologies: ['VS Code', 'Android Studio', 'Postman', 'Debugging Tools']
    },
    {
      icon: GitBranch,
      title: 'Version Control & Deployment',
      description: 'Collaborating and shipping apps seamlessly.',
      technologies: ['Git', 'GitHub', 'Play Store Deployment']
    }
  ];

  return (
    <section id="skills" className="min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Skills</span>
          </h1>
          <div className="w-16 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are the core skills and technologies I work with to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                  <skill.icon className="text-blue-400" size={24} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">{skill.title}</h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">{skill.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

