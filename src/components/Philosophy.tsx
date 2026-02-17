import { motion } from 'framer-motion';
import { Cpu, Zap, Layers } from 'lucide-react';

const cards = [
    {
        icon: <Zap className="w-8 h-8 text-cobalt" />,
        title: "Efficiency",
        subtitle: "Lean Architecture",
        description: "High-performance builds optimized for speed and budget."
    },
    {
        icon: <Cpu className="w-8 h-8 text-cobalt" />,
        title: "Intelligence",
        subtitle: "AI-First Thinking",
        description: "Custom agents like our PDF-to-Firestore engine that automate manual workflows."
    },
    {
        icon: <Layers className="w-8 h-8 text-cobalt" />,
        title: "Scalability",
        subtitle: "Future-Proof Stacks",
        description: "Built with Flutter, Firebase, and Python for 99.9% uptime."
    }
];

const Philosophy = () => {
    return (
        <section className="py-24 px-4 bg-obsidian relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    Why KSP?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card p-8 rounded-2xl hover:bg-slate/40 transition-colors group"
                        >
                            <div className="mb-6 bg-slate/50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{card.subtitle}</h3>
                            <p className="text-sm text-cobalt font-mono mb-4">{card.title}</p>
                            <p className="text-gray-400 leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
