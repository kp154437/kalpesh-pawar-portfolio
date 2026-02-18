import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Plus, X, Star } from 'lucide-react';
import { getTestimonials, addTestimonial, type Testimonial } from '../lib/content';
import { sendNotification } from '../lib/email';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', role: '', text: '', rating: 5 });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(() => {
        loadTestimonials();
    }, []);

    const loadTestimonials = () => {
        getTestimonials().then(setTestimonials);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addTestimonial({
                ...formData,
                date: new Date().toISOString()
            });

            // Send Notification
            sendNotification({
                from_name: formData.name,
                from_email: "Reviewer", // Testimonials don't ask for email usually
                message: `New Testimonial Received:\nName: ${formData.name}\nRole: ${formData.role}\nRating: ${formData.rating} Stars\nReview: ${formData.text}`
            });

            setFormData({ name: '', role: '', text: '', rating: 5 });
            setSubmitted(true);
            loadTestimonials();
        } catch (error) {
            console.error(error);
            alert("Failed to submit review.");
        }
        setLoading(false);
    };

    return (
        <section className="py-24 px-4 bg-black/30" id="testimonials">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Reviews</h2>
                        <p className="text-gray-400">Honest feedback from people I've worked with.</p>
                    </div>
                    <button
                        onClick={() => setIsFormOpen(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-cobalt hover:bg-blue-600 rounded-lg font-bold transition-all shadow-lg hover:shadow-cobalt/25"
                    >
                        <Plus className="w-5 h-5" /> Write a Review
                    </button>
                </div>

                {testimonials.length === 0 ? (
                    <div className="text-center py-12 glass-card rounded-2xl border border-white/5">
                        <p className="text-gray-500">No reviews yet. Be the first to leave one!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={item.id || index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-8 rounded-2xl border border-white/5 relative flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <Quote className="w-8 h-8 text-cobalt/40" />
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-4 h-4 ${i < item.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-600'}`} />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-300 italic mb-8 leading-relaxed flex-grow">"{item.text}"</p>

                                <div className="flex items-center gap-3 mt-auto">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cobalt to-purple-600 flex items-center justify-center font-bold text-lg">
                                        {item.name.charAt(0)}
                                    </div>
                                    <div>
                                        <span className="font-bold font-mono text-sm block">{item.name}</span>
                                        <span className="text-xs text-gray-500">{item.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Submission Form Modal */}
            <AnimatePresence>
                {isFormOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-obsidian border border-white/10 p-8 rounded-2xl w-full max-w-md relative shadow-2xl"
                        >
                            <button
                                onClick={() => { setIsFormOpen(false); setSubmitted(false); }}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {submitted ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Star className="w-8 h-8 fill-current" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                                    <p className="text-gray-400">Your review has been submitted successfully.</p>
                                    <button
                                        onClick={() => { setIsFormOpen(false); setSubmitted(false); }}
                                        className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-bold transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold mb-6">Write a Review</h3>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-1">Your Name</label>
                                            <input
                                                required
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-cobalt outline-none"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-1">Company / Role</label>
                                            <input
                                                required
                                                value={formData.role}
                                                onChange={e => setFormData({ ...formData, role: e.target.value })}
                                                className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-cobalt outline-none"
                                                placeholder="CEO, Startup Inc."
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-1">Rating</label>
                                            <div className="flex gap-2" onMouseLeave={() => setHoverRating(0)}>
                                                {[1, 2, 3, 4, 5].map(star => (
                                                    <button
                                                        key={star}
                                                        type="button"
                                                        onClick={() => setFormData({ ...formData, rating: star })}
                                                        onMouseEnter={() => setHoverRating(star)}
                                                        className={`p-1 transition-transform hover:scale-110 text-gray-600`}
                                                    >
                                                        <Star
                                                            className={`w-8 h-8 ${(hoverRating || formData.rating) >= star
                                                                ? 'fill-yellow-500 text-yellow-500'
                                                                : 'text-gray-600'
                                                                } transition-colors`}
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-1">Review</label>
                                            <textarea
                                                required
                                                value={formData.text}
                                                onChange={e => setFormData({ ...formData, text: e.target.value })}
                                                className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-cobalt outline-none resize-none"
                                                rows={4}
                                                placeholder="Working with Kalpesh was..."
                                            />
                                        </div>

                                        <button
                                            disabled={loading}
                                            className="w-full py-3 bg-cobalt hover:bg-blue-600 rounded-lg font-bold transition-all disabled:opacity-50"
                                        >
                                            {loading ? 'Submitting...' : 'Submit Review'}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Testimonials;
