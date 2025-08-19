import { Check, User, Mail, MapPin, Briefcase } from 'lucide-react';

const About = () => {
  const philosophyPoints = [
    'Clean Code: Writing readable, maintainable, and scalable code.',
    'User-Centric Design: Building apps that solve real problems and delight users.',
    'Continuous Growth: Always learning new technologies and improving my skills.'
  ];

  return (
    <section id="about" className="min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Flutter Developer Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Flutter Developer</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I am a Flutter Developer with a strong foundation in problem-solving, state management, and adaptive UI design. My journey started with C++ basics, then evolved into mastering Dart and Flutter. I have hands-on experience building real-world apps, from educational and religious applications to task management and weather apps powered by APIs.
                </p>
              </div>
            </div>

            {/* Development Philosophy */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Development Philosophy</h3>
              <div className="space-y-4">
                {philosophyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <p className="text-gray-300 text-lg">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Personal Info Card */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <User className="mr-2 text-blue-400" size={20} />
                Personal Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User size={16} className="text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Name</p>
                    <p className="text-white font-medium">Ahmed Hosam Elsersy</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">ahmedelsersy101@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white font-medium">Egypt-Menofia</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase size={16} className="text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Status</p>
                    <p className="text-green-400 font-medium">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Focus Card */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Current Focus</h3>
              <p className="text-gray-300 leading-relaxed">
                Currently focusing on building production-ready Flutter apps using Bloc and MVVM pattern, with seamless integration of APIs and Firebase services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

