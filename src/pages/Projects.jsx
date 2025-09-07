import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Weekly – Task & productivity app',
      description: 'Task & productivity app with week-based tracking.',
      image: '/api/placeholder/400/250',
      technologies: ['Flutter', 'Dart', 'Firebase','Notifications','Hive','Localization','Bolc-Cubit',"Responsive UI","Adaptive layouts"],
      githubUrl: 'https://github.com/Ahmedsersy10/weekly',
      liveUrl: '#',
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      title: 'Meal Monkey Delivery',
      description: 'Food delivery app with a smooth UI/UX.',
      image: '/api/placeholder/400/250',
      technologies: ['Flutter', 'Dart',],
      githubUrl: 'https://github.com/Ahmedsersy10/meal_monkey',
      liveUrl: '#',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Islamy',
      description: 'Islamy app.',
      image: '/api/placeholder/400/250',
      technologies: ['Flutter', 'Dart'],
      githubUrl: 'https://github.com/Ahmedsersy10/islamy',
      liveUrl: '#',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      title: 'Asers Programming',
      description: 'Learning platform for programming concepts.',
      image: '/api/placeholder/400/250',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      githubUrl: 'https://github.com/Ahmedsersy10/asers_programming',
      liveUrl: '#',
      gradient: 'from-indigo-600 to-purple-600'
    }
  ];

  return (
    <section id="projects" className="min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Work</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Some of the projects I’ve worked on recently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <div className="text-white text-6xl opacity-20">
                    {project.title.includes('Weekly') && '🗓️'}
                    {project.title.includes('Meal Monkey') && '🍔'}
                    {project.title.includes('Elzero') && '📚'}
                    {project.title.includes('Asers') && '💻'}
                  </div>
                </div>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

