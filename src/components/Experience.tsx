import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Aegion Dynamic",
    role: "UX/UI Design Intern",
    period: "2024 - Present",
    description: "Working with the team to turn complex concepts into a clear, usable CAD tool — shaping Fractal’s product direction through intentional design.",
  },
  {
    company: "Freelance",
    role: "Designer & Developer",
    period: "2021 - Present",
    description: "Collaborated with diverse clients on Social media creatives, web design, and development projects. Specialized in modern, performance-focused solutions.",
  },
  {
    company: "XIGAA",
    role: "UX/UI Design Intern",
    period: "2024(August) - 2025(January)",
    description: "An educational internship that introduced me to the world of design — and became the turning point of my entire creative journey.",
  },
  {
    company: "Geeks for Geeks Student Chapter - LIET",
    role: "Social Media & Marketing Lead",
    period: "2023 - 2025",
    description: "Led student engagement by hosting bootcamps, driving events, and creating social content that inspired and mobilized our peers.",
  },
  {
    company: "Lendi Institute of Engineering and Technology",
    role: "Computer Science and Information Technology",
    period: "2022 - 2026",
    description: "Studying Computer Science & IT, where I built my foundation in problem-solving, systems thinking, and technical understanding.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 bg-gray-50">
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
          {/* Background Video inside the box */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedMetadata={(e) => {
              e.currentTarget.play();
            }}
            onEnded={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play();
            }}
          >
            <source src="/src/Media/Experience background.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

          <div className="relative z-10" style={{ padding: '3rem' }}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold font-serif text-gray-900 mb-4">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex gap-8 items-start">
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-shrink-0 relative">
                      <div className="w-16 h-16 rounded-full border border-blue-200 bg-white flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 group">
                      <div 
                        className="p-6 md:p-8 rounded-lg transition-all duration-300"
                        style={{
                          background: 'rgba(255, 255, 255, 0.25)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.5)',
                          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
                        }}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                          <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            {exp.company}
                          </h3>
                          <span className="text-sm text-blue-600 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 self-start">
                            {exp.period}
                          </span>
                        </div>
                        
                        <h4 className="text-lg font-serif text-gray-700 mb-3">
                          {exp.role}
                        </h4>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}