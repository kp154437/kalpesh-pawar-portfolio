import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cobalt/20 via-obsidian/50 to-obsidian z-0" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 inline-block relative"
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-cobalt/50 shadow-[0_0_30px_rgba(45,91,255,0.3)] overflow-hidden mx-auto">
                        <img
                            src="https://api.dicebear.com/9.x/avataaars/svg?seed=Kalpesh&backgroundColor=1f2937"
                            alt="Kalpesh Pawar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-cobalt text-xs font-bold px-3 py-1 rounded-full border border-black">
                        OPEN TO WORK
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6 leading-tight"
                >
                    Kalpesh Pawar
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-2xl md:text-3xl text-cobalt font-mono mb-6"
                >
                    Passionate Developer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    A self-taught developer turning real-life challenges into powerful digital solutions. From social platforms to smart AI tools, I build with passion, not budget.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <Link to="/portfolio" className="px-8 py-4 bg-cobalt hover:bg-blue-600 text-white rounded-full font-bold transition-all hover:shadow-[0_0_30px_rgba(45,91,255,0.3)] transform hover:-translate-y-1">
                        View My Work
                    </Link>
                    <Link to="/contact" className="px-8 py-4 glass-card hover:bg-white/10 text-white rounded-full font-bold transition-all border border-white/10 hover:border-white/20">
                        Get In Touch
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
