import { motion } from "motion/react";
import { Palette, Code, Layout } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "UX/UI Design",
    description: "User-centered design that balances beauty with functionality. From research to high-fidelity prototypes.",
    features: ["User Research", "Wireframing"," UX Audit", "Prototyping" ],
  },
  {
    icon: Palette,
    title: "Branding & Visual Design",
    description: "Creating cohesive visual identities that resonate. Every color, typeface, and element tells your story.",
    features: ["Brand Identity", "Visual Systems", "Social Media", "Marketing Collateral"],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Translating designs into responsive, performant web experiences with clean, maintainable code.",
    features: ["React/Next.js", "Responsive Design", "Performance", "Accessibility"],
  },
];

export function Services() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gray-50">
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
            <source src="/src/Media/services background.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

          <div className="relative z-10" style={{ padding: '3rem' }}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold font-serif text-gray-900 mb-4">
              What I Bring to the Table
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div 
                    className="relative h-full p-8 rounded-lg transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.5)',
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex p-4 rounded-lg bg-blue-50 border border-blue-100">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-regular text-gray-900 mb-4 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#000000ff' }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
