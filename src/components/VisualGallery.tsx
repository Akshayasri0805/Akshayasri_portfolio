import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryItems = [
  {
    image: "/src/Media/Social media creative.png",
    title: "Social Media Creatives",
    category: "Graphic Design",
    link: "https://www.instagram.com/p/DNmqNGaJkkt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/src/Media/Client portfolio Website.png",
    title: "Client Portfolio Website",
    category: "Web Development",
    link: "https://tasneem-ojha.vercel.app/",
  },
  {
    image: "/src/Media/Video marketing.png",
    title: "Marketing Video",
    category: "Video Editing",
    link: "https://drive.google.com/file/d/1N09MwrKW5tFKzZISpOp9IOShsWGjCbum/view?usp=drive_link",
  },
];

export function VisualGallery() {
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
            onEnded={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play();
            }}
          >
            <source src="/src/Media/Visual Gallery background.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

          <div className="relative z-10" style={{ padding: '3rem' }}>
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold font-serif text-gray-900 mb-4">
              Work I've Created for Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Only a handful of the client projects I've designed — the rest stay in the vault.
            </p>
            <div className="w-24 h-1 bg-blue-600 rounded-full mt-6 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-lg overflow-hidden border border-gray-200 bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full ${item.title === "Client Portfolio Website" ? "object-contain" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-lg font-bold text-black mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-blue-300">
                        {item.category}
                      </p>
                    </div>
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