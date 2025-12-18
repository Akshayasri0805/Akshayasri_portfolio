import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechVision Solutions",
    company: "TechVision",
    testimonial: "Akshaya transformed our digital presence completely. Her attention to detail and ability to translate complex requirements into elegant solutions is remarkable. The website she designed and built has increased our conversions by 40%.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager, FinNext",
    company: "FinNext",
    testimonial: "Working with Akshaya on our banking app redesign was incredible. She conducted thorough user research and delivered designs that not only looked beautiful but significantly improved user satisfaction scores. A true professional.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Founder, StartupHub",
    company: "StartupHub",
    testimonial: "Akshaya is a rare blend of designer and developer. She understood our vision immediately and brought it to life with pixel-perfect execution. Her work ethic and communication throughout the project were exceptional.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];

export function Testimonials() {
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
            <source src="/Media/Client Testimonials.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

          <div className="relative z-10" style={{ padding: '3rem' }}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold font-serif text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What clients say about working with me
            </p>
            <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div 
                  className="h-full p-8 rounded-lg transition-all duration-300 space-y-6"
                  style={{
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
                  }}
                >
                  {/* Quote icon */}
                  <div className="inline-flex p-3 rounded-lg bg-blue-50 border border-blue-100">
                    <Quote className="w-6 h-6 text-blue-600" />
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-600 leading-relaxed italic">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Client info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold font-serif">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
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
