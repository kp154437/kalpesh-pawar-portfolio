import { motion } from 'framer-motion';
import { Layout, Palette, Server, Smartphone, Cpu, Users } from 'lucide-react';

const services = [
    {
        icon: <Layout className="w-6 h-6" />,
        title: "Web Development",
        desc: "I build responsive, fast, and SEO-friendly websites using HTML, CSS, JavaScript, and frameworks like React."
    },
    {
        icon: <Palette className="w-6 h-6" />,
        title: "UI/UX Design",
        desc: "I design clean and user-friendly interfaces. Figma prototypes, color palettes, and smooth user journeys."
    },
    {
        icon: <Server className="w-6 h-6" />,
        title: "API Integration",
        desc: "Connecting apps with third-party APIs like payment gateways, weather data, or real-time chat."
    },
    {
        icon: <Smartphone className="w-6 h-6" />,
        title: "App Development",
        desc: "Simple cross-platform mobile apps using Flutter or WebView. Perfect for MVPs."
    },
    {
        icon: <Cpu className="w-6 h-6" />,
        title: "Custom Projects",
        desc: "Tailored web/app solutions for unique ideas. Debugging, redesigning, and optimization support."
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Collaboration",
        desc: "Open for small freelance work, collaborations, or voluntary mini-projects to build experience."
    }
];

const Services = () => {
    return (
        <section className="py-24 px-4 bg-obsidian" id="services">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    Start Your Journey
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl hover:bg-slate/40 transition-all hover:scale-[1.02] group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-cobalt/20 flex items-center justify-center text-cobalt mb-6 group-hover:bg-cobalt group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Engagement Models */}
                <div className="mt-32">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How I Can Help</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass-card p-8 rounded-2xl border border-white/5 relative group hover:border-cobalt/30 transition-colors">
                            <h3 className="text-2xl font-bold mb-4 text-white">Hourly</h3>
                            <p className="text-gray-400 mb-6 text-sm">Perfect for consultations, debugging, or small tweaks.</p>
                            <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cobalt" /> Code Review</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cobalt" /> Bug Fixing</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cobalt" /> Tech Consultation</li>
                            </ul>
                            <a href="/contact" className="block text-center py-3 rounded-lg bg-white/5 hover:bg-cobalt hover:text-white transition-all font-bold text-sm">Book Now</a>
                        </div>

                        <div className="glass-card p-8 rounded-2xl border border-cobalt/50 relative group shadow-[0_0_30px_rgba(45,91,255,0.1)] transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-cobalt text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Project Based</h3>
                            <p className="text-gray-400 mb-6 text-sm">End-to-end development for websites and apps.</p>
                            <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cobalt" /> Full Requirements Analysis</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cobalt" /> UI/UX Design</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cobalt" /> Development & Deployment</li>
                            </ul>
                            <a href="/contact" className="block text-center py-3 rounded-lg bg-cobalt text-white hover:bg-blue-600 transition-all font-bold text-sm">Start Project</a>
                        </div>

                        <div className="glass-card p-8 rounded-2xl border border-white/5 relative group hover:border-cobalt/30 transition-colors">
                            <h3 className="text-2xl font-bold mb-4 text-white">Retainer</h3>
                            <p className="text-gray-400 mb-6 text-sm">Ongoing support for growing businesses.</p>
                            <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cobalt" /> Dedicated Hours/Month</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cobalt" /> Priority Support</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cobalt" /> Regular Updates</li>
                            </ul>
                            <a href="/contact" className="block text-center py-3 rounded-lg bg-white/5 hover:bg-cobalt hover:text-white transition-all font-bold text-sm">Discussion</a>
                        </div>
                    </div>
                </div>

                {/* Tech Bar */}
                <div className="mt-32 border-t border-white/5 pt-16">
                    <p className="text-center text-gray-500 font-mono text-sm mb-12">POWERED BY MODERN STACK</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Simple text logos for now since we don't have SVGs handy, but styled cleanly */}
                        {['React', 'TypeScript', 'Node.js', 'Firebase', 'Tailwind', 'Figma', 'Docker', 'Next.js'].map(tech => (
                            <span key={tech} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-white cursor-default">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Services;
