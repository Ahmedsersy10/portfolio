import {
  MapPin,
  Mail,
  Phone,
  Calendar,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";
const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Egypt-Menofia",
      color: "text-blue-400",
    },
    {
      icon: Mail,
      label: "Email",
      value: "ahmedelsersy101@gmail.com",
      color: "text-blue-400",
      href: "mailto:ahmedelsersy101@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 01023324677",
      color: "text-blue-400",
      href: "tel:+201023324677",
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Open to opportunities",
      color: "text-blue-400",
    },
  ];

  const socialMedia = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Ahmedsersy10",
      color: "hover:text-gray-300"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/ahmedelsersy10/",
      color: "hover:text-pink-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://eg.linkedin.com/in/ahmed-elsersy-56852036b",
      color: "hover:text-blue-400"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/qr/E7KX4XV5NJJAI1",
      color: "hover:text-green-400"
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://wa.me/qr/E7KX4XV5NJJAI1",
      color: "hover:text-green-400"
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      href: "https://t.me/ahmedelsersy10",
      color: "hover:text-green-400"
    },
  ];

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's <span className="text-blue-400">Connect</span>
          </h1>
          <div className="w-16 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'm always
            open to talking about creative ideas and new projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <info.icon className={info.color} size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white font-medium hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Contact Buttons */}
            <div className="mt-8 pt-8 border-t border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">
                Contact Me Directly
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Email Button */}
                <Button
                  className="bg-blue-600 hover:bg-blue-700 flex-1"
                  asChild
                >
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedelsersy101@gmail.com&su=Hello Ahmed&body=I would like to contact you"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail size={16} className="mr-2" />
                    Email Me
                  </a>
                </Button>

                {/* Phone Button */}
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white flex-1"
                  asChild
                >
                  <a href="tel:+201023324677">
                    <Phone size={16} className="mr-2" />
                    Call Me
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Social Media</h2>
            <p className="text-gray-400 mb-8">
              Follow me on social platforms to see my latest work and projects.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className={`flex items-center justify-center space-x-3 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 text-gray-400 ${social.color}`}
                >
                  <social.icon size={20} />
                  <span className="font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Project Idea Card */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-xl p-8 text-center">
          <div className="mb-6">
            <Send className="text-blue-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-2">
              Have a Project Idea?
            </h3>
            <p className="text-gray-300">
              Send me a message and I'll get back to you ASAP
            </p>
          </div>

          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
            asChild
          >
            <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedelsersy101@gmail.com&su=Hello Ahmed&body=I would like to contact you"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Start Conversation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
