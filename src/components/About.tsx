import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getSiteContent } from '../lib/content';

const About = () => {
    const [story, setStory] = useState("");

    useEffect(() => {
        getSiteContent().then(c => setStory(c.aboutStory));
    }, []);

    return (
        <section className="py-24 px-4 bg-obsidian relative overflow-hidden" id="about">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 relative z-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Passionate About Creating Digital Experiences</h2>

                    <div className="space-y-6 text-gray-300 leading-relaxed text-lg whitespace-pre-wrap">
                        {story || "Loading..."}
                    </div>

                    <div className="mt-10 flex justify-center">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-cobalt hover:text-white transition-colors font-mono border-b border-cobalt hover:border-white pb-1"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
