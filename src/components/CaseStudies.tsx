import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const caseStudies = [
  {
    title: "Designing a Design Tool",
    description: "Creating an intuitive design tool that empowers Scientists with Microfluidics Chip Design.",
    tags: ["Product Design", "UX / UI", "Interaction Design"],
    image: "/src/Media/Designing a Design Tool.png",
    gradient: "from-purple-500/20 via-blue-500/20 to-purple-500/20",
    link: "https://medium.com/idea-factory/designing-a-design-tool-458f60ecbd4d",
  },
  {
    title: "UX Audit for a Major Indian Bank",
    description: "Comprehensive audit and redesign recommendations for digital banking experience.",
    tags: ["UX Audit", "Research", "Strategy"],
    image: "/src/Media/UX Audit.jpg",
    gradient: "from-purple-500/20 to-blue-500/20",
    link: "",
  },
  {
    title: "Aegion Dynamic Website",
    description: "End-to-end design and development of a modern, performant web presence.",
    tags: ["Design", "WIX Studio", "Branding"],
    image: "/src/Media/Aegion Dynamic Website.png",
    gradient: "from-blue-500/20 to-purple-500/20",
    link: "https://www.aegiondynamic.com/",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="py-20 md:py-32 px-4 bg-gray-50">
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
            <source src="/src/Media/Casestudies background.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

          <div className="relative z-10" style={{ padding: '3rem' }}>
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold font-serif text-gray-900 mb-4">
              Selected Work
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.a
                key={study.title}
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative h-full block"
              >
                <div 
                  className="relative h-full flex flex-col rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.69)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
                  }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {study.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      className="inline-flex items-center gap-1 text-sm text-blue-600 group-hover:gap-2 transition-all"
                    >
                      View project
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
