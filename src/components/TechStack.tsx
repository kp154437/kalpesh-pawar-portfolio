import { motion } from 'framer-motion';

const techs = [
    "Flutter", "Firebase", "Python", "React", "Gemini API", "Node.js", "TypeScript", "Tailwind CSS"
];

const TechStack = () => {
    return (
        <section className="py-12 border-y border-white/5 bg-black/40">
            <div className="flex overflow-hidden">
                <motion.div
                    className="flex gap-16 items-center px-16"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...techs, ...techs, ...techs].map((tech, index) => (
                        <span key={index} className="text-2xl font-bold text-gray-500 whitespace-nowrap hover:text-cobalt transition-colors">
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
