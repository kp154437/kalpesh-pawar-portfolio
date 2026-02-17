import { motion } from 'framer-motion';
import { Flag, Monitor, Code, Globe, Rocket, Award } from 'lucide-react';

const milestones = [
    {
        icon: <Flag className="w-6 h-6" />,
        year: "2019",
        title: "The Beginning",
        desc: "Started my journey with simple HTML/CSS, fueled by curiosity and a borrowed laptop."
    },
    {
        icon: <Code className="w-6 h-6" />,
        year: "2020",
        title: "Diving into Logic",
        desc: "Mastered JavaScript and Python. Built my first calculator and todo apps."
    },
    {
        icon: <Monitor className="w-6 h-6" />,
        year: "2021",
        title: "First Client Project",
        desc: "Landed my first freelance gig. Delivered a responsive website for a local business."
    },
    {
        icon: <Globe className="w-6 h-6" />,
        year: "2022",
        title: "Full Stack Evolution",
        desc: "Learned React, Node.js, and Databases. Built complete web applications from scratch."
    },
    {
        icon: <Award className="w-6 h-6" />,
        year: "2023",
        title: "Hackathon Wins",
        desc: "Participated in global hackathons, refining my skills in real-time problem solving."
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        year: "Present",
        title: "Building the Future",
        desc: "Helping businesses scale with AI-powered solutions and modern web architectures."
    }
];

const Journey = () => {
    return (
        <section className="py-24 px-4 bg-obsidian relative overflow-hidden" id="journey">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cobalt/10 via-obsidian to-obsidian pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">My Story Journey</h2>
                    <p className="text-gray-400">From humble beginnings to architecting digital solutions.</p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cobalt via-white/20 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content Card */}
                                <div className="flex-1 w-full pl-12 md:pl-0">
                                    <div className={`glass-card p-6 rounded-2xl border border-white/5 relative hover:border-cobalt/30 transition-colors ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                        <span className="text-cobalt font-mono text-sm font-bold mb-2 block">{item.year}</span>
                                        <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>

                                        {/* Mobile Connector Dot */}
                                        <div className="md:hidden absolute top-6 -left-[54px] w-4 h-4 rounded-full bg-cobalt border-4 border-obsidian z-20" />
                                    </div>
                                </div>

                                {/* Center Icon (Desktop) */}
                                <div className="hidden md:flex flex-none w-12 h-12 rounded-full bg-slate-900 border-4 border-obsidian items-center justify-center relative z-20 text-cobalt shadow-[0_0_20px_rgba(45,91,255,0.3)]">
                                    {item.icon}
                                </div>

                                {/* Spacer for alternate side */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
