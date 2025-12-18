import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-gray-50">
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
          {/* Background Image inside the box */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/src/Media/About me background.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

          <div className="relative z-10" style={{ padding: '3rem' }}>
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold font-serif text-gray-900 mb-4">
             About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden max-w-md">
                {/* Image container */}
                <div className="relative h-full rounded-lg overflow-hidden" style={{ border: '4px solid #ffffffc4' }}>
                  <ImageWithFallback
                    src="/src/Media/About Me.jpeg"
                    alt="About Akshaya Sri"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed italic">
                <p>
                  Hey there! I'm <span className="text-gray-900 font-bold">Akshaya Sri</span>, 
                  a designer and developer who believes that great digital experiences 
                  are born at the intersection of empathy and
                  execution.
                </p>
                
                <p>
                  My journey began with a curiosity about how things work—and more importantly, 
                  how they could work better. That curiosity 
                  evolved into a passion for creating digital products that don't just look 
                  beautiful, but solve real problems for real people.
                </p>
                
                <p>
                  When I'm not pushing pixels or writing code, you'll find me painting, 
                  writing stories, or diving deep into design systems and component libraries. 
                  I believe in <span className="text-blue-600">continuous learning</span>,{" "}
                  <span className="text-blue-600">intentional design</span>, and the power 
                  of a good cup of coffee.
                </p>
                
                <p className="text-gray-900 pt-4">
                  Let's create something that matters.
                </p>
              </div>

              <div className="pt-6 grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-sm text-gray-100">Location</div>
                  <div className="text-gray-900">India</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-100">Status</div>
                  <div className="text-gray-900 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Available for work
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-100">Experience</div>
                  <div className="text-gray-900">1 year</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-100">Focus</div>
                  <div className="text-gray-900">UX/UI , Software Development</div>
                </div>
              </div>
            </motion.div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}