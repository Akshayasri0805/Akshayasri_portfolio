import { motion } from "motion/react";
import { Mail, Linkedin, Github, ArrowRight, type LucideProps } from "lucide-react";

// Custom Behance Icon Component matching lucide-react style
const Behance = ({ className, ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M3 7h6.5a2.5 2.5 0 0 1 0 5H3z" />
    <path d="M3 12h7a3 3 0 0 1 0 6H3z" />
    <circle cx="18" cy="14" r="3" />
    <path d="M15 7h6" />
  </svg>
);

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:akshayasriarasada@gmail.com",
    username: "akshayasriarasada@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akshaya-sri-arasada-0a6293254/",
    username: "AKSHAYA SRI ARASADA ",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Akshayasri0805",
    username: "akshayasri0805",
  },
  {
    icon: Behance,
    label: "Behance",
    href: "https://www.behance.net/akshayasriarasada",
    username: "akshayasriarasada",
  }  
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-[98%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
          style={{
            borderRadius: '1.5rem',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={(e) => {
              e.currentTarget.play();
            }}
            onTimeUpdate={(e) => {
              if (e.currentTarget.duration - e.currentTarget.currentTime < 0.1) {
                e.currentTarget.currentTime = 0;
              }
            }}
            onEnded={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play();
            }}
          >
            <source src="/src/Media/Contact background 2.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

          <div className="relative z-10" style={{ padding: '3rem' }}>
          <div className="text-center space-y-6 pt-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-serif text-white">
              Let's Work Together
            </h2>

            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
              Got a project in mind? Whether it's a complete product redesign 
              or a new web presence, I'd love to hear about it.
            </p>
          </div>

          {/* CTA Button */}
          <motion.button
            type="button"
            onClick={() => {
              const to = "akshayasriarasada@gmail.com";
              const subject = "Let's Work Together on a Project!";
              const body = `Hi Akshaya,\n\nI recently came across your portfolio and was truly impressed by your design work and attention to detail. I believe your expertise in UX/UI design and development would be a perfect fit for a project I have in mind.\n\nI would love to discuss this opportunity with you and explore how we can collaborate to bring this vision to life.\n\nProject Overview:\n[Please describe your project here]\n\nTimeline:\n[Expected timeline]\n\nBudget:\n[Budget range if applicable]\n\nLooking forward to hearing from you!\n\nBest regards,\n[Your Name]`;

              const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              const win = window.open(gmailUrl, "_blank");
              if (!win) {
                // Fallback to default email client if popup blocked or Gmail unavailable
                window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-lg transition-all duration-300 cursor-pointer"
            style={{ border: '3px solid white' }}
          >
            <Mail className="w-6 h-6" />
            Get in touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Social Links */}
          <div className="pt-12">
            <p className="text-white mb-6">Or connect with me on</p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:shadow-md transition-all duration-300"
                    style={{ border: '2px solid white' }}
                  >
                    <Icon className="w-5 h-5 text-white transition-colors" />
                    <span className="text-white transition-colors">
                      {link.username}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-20 border-t-2 border-white mt-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
              <p>© 2025 Akshaya Sri. All rights reserved.</p>
              <p>Designed & built with ❤️‍🔥 by akshaya</p>
            </div>
          </div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
