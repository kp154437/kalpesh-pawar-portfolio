import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Services', path: '/services' },
        { name: 'Working Flow', path: '/process' },
        { name: 'Client Behavior', path: '/testimonials' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-obsidian/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <NavLink to="/" className="text-2xl font-bold flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-cobalt/20 rounded-lg flex items-center justify-center group-hover:bg-cobalt transition-colors">
                        <Rocket className="text-cobalt group-hover:text-white" />
                    </div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Kalpesh.dev</span>
                </NavLink>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => `text-sm font-medium transition-colors hover:text-white ${isActive ? 'text-cobalt' : 'text-gray-400'}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <NavLink to="/contact" className="px-6 py-2 bg-cobalt hover:bg-blue-600 text-white rounded-full text-sm font-bold transition-all hover:shadow-lg hover:shadow-cobalt/25">
                        Hire Me
                    </NavLink>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-obsidian border-b border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) => `text-lg font-medium p-2 rounded-lg transition-colors ${isActive ? 'bg-cobalt/10 text-cobalt' : 'text-gray-400'}`}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <NavLink to="/contact" className="w-full text-center py-3 bg-cobalt text-white rounded-lg font-bold">
                                Hire Me
                            </NavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
