import { motion } from 'framer-motion';
import {
    Code, Database, Layout, Server,
    Smartphone, Globe, Cpu, Cloud
} from 'lucide-react';

const tools = [
    { icon: <Code />, color: "text-blue-400" },
    { icon: <Database />, color: "text-green-400" },
    { icon: <Layout />, color: "text-purple-400" },
    { icon: <Server />, color: "text-red-400" },
    { icon: <Smartphone />, color: "text-yellow-400" },
    { icon: <Globe />, color: "text-cyan-400" },
    { icon: <Cpu />, color: "text-orange-400" },
    { icon: <Cloud />, color: "text-white" },
];

const TechOrbit = () => {
    return (
        <div className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto mt-20">
            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="relative">
                    <div className="absolute -inset-12 bg-cobalt/30 rounded-full animate-ping duration-3000 pointer-events-none" />
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-obsidian rounded-full border-4 border-cobalt shadow-[0_0_50px_rgba(45,91,255,0.4)] flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-cobalt/20 animate-pulse" />
                        <Code className="w-10 h-10 md:w-14 md:h-14 text-white relative z-10" />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-cobalt/50 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-cobalt animate-loading-bar" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Orbit Rings */}
            <div className="absolute inset-0 border border-white/5 rounded-full" />
            <div className="absolute inset-12 border border-white/5 rounded-full" />
            <div className="absolute inset-24 border border-white/10 rounded-full" />

            {/* Rotating Container */}
            <motion.div
                className="absolute inset-0 z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                {tools.map((item, index) => {
                    const angle = (index / tools.length) * 360;
                    const radius = 140; // Desktop radius
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;

                    return (
                        <div
                            key={index}
                            className={`absolute top-1/2 left-1/2 w-10 h-10 md:w-12 md:h-12 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center ${item.color} shadow-lg`}
                            style={{
                                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(-${angle}deg)`,
                            }}
                        >
                            {/* Counter-rotate icon to keep it upright */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                {item.icon}
                            </motion.div>
                        </div>
                    );
                })}
            </motion.div>

            {/* Pulse Effect - Removed global pulse */}
        </div>
    );
};

export default TechOrbit;
