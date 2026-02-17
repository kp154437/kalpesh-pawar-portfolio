import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { getSiteContent, type PageContent } from '../lib/content';
import Journey from '../components/Journey';
import About from '../components/About';

const images = [
    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop"
];

const Home = () => {
    const [content, setContent] = useState<PageContent | null>(null);

    useEffect(() => {
        getSiteContent().then(setContent);
    }, []);

    return (
        <div className="pt-20">
            <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-4 max-w-7xl mx-auto gap-12">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-2 bg-white/5 rounded-full text-cobalt text-sm font-mono mb-6 border border-white/10">
                            Hello, I'm Kalpesh Pawar
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-500 mb-6 leading-tight">
                            {content?.heroTitle || "Building Digital Experiences."}
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
                            {content?.heroSubtitle || "A self-taught developer transforming ideas into scalable, high-performance web applications."}
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                            <a href="/portfolio" className="px-8 py-4 bg-cobalt hover:bg-blue-600 text-white rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(45,91,255,0.4)]">
                                View Projects
                            </a>
                            <a href="/contact" className="px-8 py-4 glass-card hover:bg-white/10 text-white rounded-full font-bold transition-all">
                                Contact Me
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Photo Gallery - Auto Swiping */}
                <div className="flex-1 w-full max-w-lg aspect-square relative z-0">
                    <div className="absolute inset-0 bg-cobalt/20 blur-[100px] rounded-full" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-full rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl glass-card rotate-3 hover:rotate-0 transition-transform duration-500"
                    >
                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            effect="fade"
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            loop={true}
                            className="h-full w-full"
                        >
                            {images.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <img src={img} alt="Portfolio Slide" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                        <p className="text-white font-mono text-sm opacity-80">Captured Moments & Code</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </section>

            {/* Journey Roadmap */}
            <Journey />

            {/* About Section Snippet */}
            <About />
        </div>
    );
};

export default Home;
