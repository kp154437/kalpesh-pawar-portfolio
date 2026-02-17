import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Code, Rocket } from 'lucide-react';
import TechOrbit from '../components/TechOrbit';


const steps = [
    {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Discovery & Planning",
        desc: "We start by understanding your vision, requirements, and target audience to create a solid roadmap."
    },
    {
        icon: <PenTool className="w-8 h-8" />,
        title: "Design & Prototyping",
        desc: "Creating wireframes and high-fidelity designs that align with your brand identity and user experience goals."
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: "Development",
        desc: "Writing clean, scalable code using modern technologies like React, Node.js, and Firebase."
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Testing & Launch",
        desc: "Rigorous testing to ensure bug-free performance before deploying your site to the world."
    }
];

const WorkingFlow = () => {
    return (
        <div className="pt-32 pb-24 px-4 min-h-screen overflow-x-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">My Working Process</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">From concept to deployment, I follow a structured approach to ensure high-quality results.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-cobalt/0 via-cobalt/50 to-cobalt/0 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-obsidian border border-white/5 p-8 rounded-2xl relative group hover:border-cobalt/50 transition-colors"
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-cobalt mb-6 mx-auto group-hover:bg-cobalt group-hover:text-white transition-colors relative z-10 border-4 border-obsidian">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                            <p className="text-gray-400 text-center text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>


                <div className="mt-32 text-center">
                    <h2 className="text-3xl font-bold mb-4">Powered By Modern Tech</h2>
                    <p className="text-gray-400 mb-12">My development arsenal revolves around meaningful technologies.</p>
                    <TechOrbit />
                </div>
            </div>
        </div>
    );
};

export default WorkingFlow;
