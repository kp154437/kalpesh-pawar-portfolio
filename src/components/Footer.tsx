const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 bg-obsidian text-center">
            <p className="text-gray-500 font-mono text-sm">
                © {new Date().getFullYear()} <span className="text-cobalt font-bold">KSP Tech</span>. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
