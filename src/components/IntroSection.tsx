import { motion } from "motion/react";

export function IntroSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gray-50">
      <div className="max-w-[98%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '1.5rem',
            padding: '3rem',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight">
              Designing with intention, building with precision.
            </h2>

            <div className="space-y-4 text-xl md:text-2xl text-gray-600 max-w-4xl leading-relaxed">
              <p>
                I'm a designer who codes and a developer who designs. This intersection 
                is where I thrive—where empathy meets execution, where vision becomes reality.
              </p>
              
              <p className="text-gray-500">
                Every project is an opportunity to craft something meaningful. Whether it's 
                redesigning a banking experience for millions or building a dynamic web presence, 
                I bring the same energy: curiosity, craft, and a relentless focus on detail.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <h3 className="text-5xl md:text-6xl font-bold font-serif text-blue-600">
                4+
              </h3>
              <p className="text-gray-600">Years of experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <h3 className="text-5xl md:text-6xl font-bold font-serif text-blue-600">
                20+
              </h3>
              <p className="text-gray-600">Projects delivered</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <h3 className="text-5xl md:text-6xl font-bold font-serif text-blue-600">
                ∞
              </h3>
              <p className="text-gray-600">Cups of coffee</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
