import { Award } from 'lucide-react';

const Certificates = () => {
  const certificates = [
  {
    title: 'Mastering Programming: A Comprehensive Course In [Arabic]',
    issuer: 'Udemy - Tharwat Samy',
    date: 'August 2024',
    link: 'flutter.jpg'   // ✨ مثال: صورة شهادة
  },
  {
    title: 'Complete Flutter & Dart Development Course [Arabic]',
    issuer: 'Udemy - Tharwat Samy',
    date: 'October 2024',
    link: 'flutter.jpg'
  },
  {
    title: 'Flutter Advanced Course Bloc and MVVM Pattern [Arabic]',
    issuer: 'Udemy - Tharwat Samy',
    date: 'April 2025',
    link: 'bloc.jpg'
  },
  {
    title: 'Master Git & GitHub: Essential Skills for Developers [Arabic]',
    issuer: 'Udemy - Tharwat Samy',
    date: 'April 2025',
    link: 'git.jpg'
  },
  {
    title: 'Mastering Flutter: Responsive & Adaptive UI Design [Arabic]',
    issuer: 'Udemy - Tharwat Samy',
    date: 'April 2025',
    link: 'responsive.jpg'
  }
];


  return (
    <section id="certificates" className="min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Certificates</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of the certifications I've earned to validate my skills.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                  <Award className="text-blue-400" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
              <p className="text-gray-500 text-xs mb-4">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm font-medium"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

