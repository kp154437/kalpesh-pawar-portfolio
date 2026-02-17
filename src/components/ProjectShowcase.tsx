import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getProjects, type Project } from '../lib/content';

const ProjectShowcase = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        getProjects().then(setProjects);
    }, []);

    return (
        <section className="py-24 bg-black/20 overflow-hidden" id="projects">
            <div className="max-w-7xl mx-auto px-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex gap-8 px-4 md:px-8 overflow-x-auto pb-8 scrollbar-hide snap-x">
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <motion.div
                            key={project.id || index}
                            className="min-w-[85vw] md:min-w-[800px] glass-card rounded-3xl overflow-hidden snap-center border border-white/5"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="inline-block px-4 py-1 bg-cobalt/20 text-cobalt rounded-full text-sm font-mono mb-6 w-fit">
                                        {project.category}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                                    <p className="text-gray-400 mb-8 leading-relaxed">
                                        {project.description || "No description provided."}
                                    </p>
                                    {/* Tags placeholder since logic needs to be added to Admin first */}
                                    <div className="flex gap-4">
                                        {project.tags?.map(tag => (
                                            <span key={tag} className="text-sm text-gray-500 font-mono">#{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-slate to-obsidian h-64 md:h-auto flex items-center justify-center relative overflow-hidden">
                                    {project.image && <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />}
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div className="p-12 text-center w-full">
                        <p className="text-gray-500">No projects found. Add some from the Admin Dashboard.</p>
                    </div>
                )}
            </div>
            {/* CTA */}
            <div className="max-w-4xl mx-auto mt-24 px-4">
                <div className="glass-card p-12 rounded-3xl text-center border border-cobalt/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-cobalt/10 blur-[50px] pointer-events-none" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Have a project in mind?</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
                        Let's turn your idea into a high-performing digital reality.
                    </p>
                    <a href="/contact" className="relative z-10 inline-block px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Start a Project
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
