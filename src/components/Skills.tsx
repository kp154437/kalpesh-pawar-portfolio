import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section className="py-24 px-4 bg-black/20" id="skills">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
                    <p className="text-gray-400 font-mono">"The stack behind my self-taught journey."</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Front-end */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <h3 className="text-xl font-bold mb-6 text-cobalt border-b border-white/10 pb-4">Front-end Development</h3>
                        <div className="flex flex-wrap gap-3">
                            {["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Framer Motion"].map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-white/5 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default border border-white/5">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Back-end */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <h3 className="text-xl font-bold mb-6 text-cobalt border-b border-white/10 pb-4">Back-end Development</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Node.js", "Python", "SQL", "Firebase", "API Integration"].map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-white/5 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default border border-white/5">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
