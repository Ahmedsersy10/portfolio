import { Button } from "@/components/ui/button";

const Home = () => {
  const techStack = [
    { name: "Flutter", color: "bg-blue-600" },
    { name: "Dart", color: "bg-cyan-500" },
    { name: "Firebase", color: "bg-yellow-600" },
    { name: "REST APIs", color: "bg-red-500" },
    { name: "Git & GitHub", color: "bg-gray-800" },
    { name: "Bloc & Cubit", color: "bg-purple-600" },
    { name: "Responsive UI", color: "bg-green-600" },
    { name: "C++ (Basics)", color: "bg-indigo-600" },
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-28 pt-20 gap-12">
      {/* Left Content */}
      <div className="space-y-8 max-w-xl">
        {/* Availability Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300 border border-gray-700">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          Available for Freelance Work
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-blue-400">Ahmed Elsersy</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-400 font-medium">
            Flutter Developer
          </h2>
        </div>

        {/* Description */}
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
            I craft modern, scalable, and user-friendly mobile applications using Flutter. My focus is on delivering seamless user experiences and efficient solutions that help businesses grow.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-4">
          <p className="text-gray-400 text-sm font-medium">Tech I work with:</p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-3 py-2 bg-gray-800 rounded-lg border border-gray-700"
              >
                <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-medium"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-3 text-base font-medium"
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* Right Content - Profile Image */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-3xl scale-110"></div>
          <div className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 left-8 w-6 h-6 border-2 border-blue-400 rounded-full"></div>

          {/* Profile Image Container */}
          <div className="relative w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full overflow-hidden border-4 border-gray-700 bg-gray-800">
            <img src="Me.jpg" alt="My Profile" className="w-full h-full object-cover" />
          </div>

          {/* Floating Code Icon */}
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">{"</>"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
