import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryItems = [
  {
    image: "/src/Media/Achievements.jpeg",
    title: "Achievements",
    description: "Youth Parliament Winner, Multiple Hackathon Awards, Design Competition Recognition",
  },
  {
    image: "/src/Media/Community leadership.jpeg",
    title: "Community Leadership",
    description: "Marketing and Social Media Lead at GFG LIET, Event Organizer, Mentor for Junior Designers",
  },
  {
    image: "/src/Media/Creative arts.jpeg",
    title: "Creative Arts",
    description: "Acrylic Painting , Digital Illustration, Visual Storytelling, Brand Identity Exploration",
  },
  {
    image: "/src/Media/Mobile photography.jpeg",
    title: "Mobile Photography",
    description: "Capturing moments through the lens, exploring visual storytelling and composition with mobile photography",
  },
  {
    image: "/src/Media/Hackathon Participation.jpeg",
    title: "Hackathon Participant & Finalist",
    description: "Competed in 10+ hackathons and tech events, securing finalist positions through innovative solutions and collaborative problem-solving",
  },
  {
    image: "/src/Media/Writing ans Storytelling.jpeg",
    title: "Writing & Storytelling",
    description: "Creative Writing, Content Creation, Documenting the design journey",
  },
];

export function BeyondScreen() {
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
            <source src="/src/Media/BeyoundScreen.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

          <div className="relative z-10" style={{ padding: '3rem' }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold font-serif mb-6 text-gray-900">
              Beyond the Screen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I believe the best designers or engineers are curious humans first. 
              Here's what shapes my perspective beyond pixels and code.
            </p>
            <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-lg overflow-hidden bg-white hover:shadow-md transition-all duration-300"
                style={{
                  border: '4px solid #ffffffc4',
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={
                      item.title === "Achievements" || item.title === "Writing & Storytelling"
                        ? { objectPosition: "center 30%" }
                        : {}
                    }
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="w-full bg-black/70 backdrop-blur-sm p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Personal statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 p-8 md:p-12 rounded-3xl"
            style={{
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)'
            }}
          >
            <blockquote className="text-xl md:text-2xl text-gray-600 leading-relaxed text-center italic">
              "I believe in breadth and curiosity — I thrive by being skilled in many things,  <span className="text-gray-700  font-bold">not limited to just one.</span>."
            </blockquote>
            <p className="text-center text-gray-200 mt-6">
              — My philosophy
            </p>
          </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
