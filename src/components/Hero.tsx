import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-20 pt-20">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/src/Media/herobackground.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
          }}
          className="rounded-3xl p-8 md:p-12 lg:p-16 space-y-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold font-serif text-gray-900 leading-tight">
            Hi, I'm Akshaya Sri Arasada
          </h1>

          <p className="text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto font-light">
            UX/UI Designer & Computer Science Engineer
          </p>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Crafting digital experiences where design intention meets technical precision. 
            Every pixel serves a purpose, and every interaction tells a story.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 border-2 border-black text-black rounded-lg hover:bg-black  transition-all"
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#000000', color: '#ffffff' }}
              className="px-6 py-2 rounded-lg hover:opacity-80 transition-all"
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}