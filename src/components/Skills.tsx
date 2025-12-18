import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Design Tools",
    skills: [
      { name: "Figma", icon: "figma", isCustom: false },
      { name: "Miro", icon: "/Media/miroicon.png", isCustom: true },
      { name: "Notion", icon: "notion", isCustom: false },
      { name: "Canva", icon: "/Media/canvaicon.png", isCustom: true },
      { name: "Adobe XD", icon: "xd", isCustom: false },
      { name: "Photoshop", icon: "photoshop", isCustom: false },
      { name: "Illustrator", icon: "illustrator", isCustom: false }
    ],
  },
  {
    title: "Development",
    skills: [
      { name: "HTML", icon: "html", isCustom: false },
      { name: "CSS", icon: "css", isCustom: false },
      { name: "JavaScript", icon: "javascript", isCustom: false },
      { name: "React", icon: "react", isCustom: false },
      { name: "Next.js", icon: "nextjs", isCustom: false },
      { name: "Tailwind CSS", icon: "tailwindcss", isCustom: false },
      { name: "GitHub", icon: "github", isCustom: false }
    ],
  },
  {
    title: "Platforms",
    skills: [
      { name: "WIX Studio", icon: "/Media/wixicon.png", isCustom: true },
      { name: "Webflow", icon: "webflow", isCustom: false },
      { name: "Framer", icon: "/Media/framericon.png", isCustom: true },
      { name: "WordPress", icon: "wordpress", isCustom: false }
    ],
  },
];

export function Skills() {
  return (
    <section className="py-20 md:py-32 px-4 bg-white">
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
            onTimeUpdate={(e) => {
              const video = e.currentTarget;
              if (video.duration - video.currentTime < 0.1) {
                video.currentTime = 0;
              }
            }}
            onEnded={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play();
            }}
          >
            <source src="/Media/skillsbackround.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

          <div className="relative z-10" style={{ padding: '3rem' }}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold font-serif text-gray-900 mb-4">
              Skills & Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A versatile toolkit spanning design and development
            </p>
            <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6" />
          </div>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="group"
                    >
                      <div 
                        className="px-5 py-3 rounded-full text-gray-700 hover:text-blue-600 transition-all duration-300 cursor-default flex items-center gap-3"
                        style={{
                          background: 'rgba(255, 255, 255, 0.25)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.5)',
                          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
                        }}
                      >
                        <img 
                          src={skill.isCustom ? skill.icon : `https://skillicons.dev/icons?i=${skill.icon}`}
                          alt={skill.name}
                          className="w-6 h-6"
                        />
                        <span>{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}