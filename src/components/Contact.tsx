import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import { addMessage } from '../lib/content';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setStatus('loading');
        try {
            await addMessage({
                ...formData,
                date: new Date().toISOString()
            });
            setStatus('success');
            setFormData({ name: '', email: '', mobile: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section className="py-24 px-4 relative overflow-hidden" id="contact">
            <div className="absolute inset-0 bg-gradient-to-t from-cobalt/10 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        I’m just a message away from building something great with you. Feel free to reach out for freelance work or collaboration.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-cobalt">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Our Location</h3>
                                <p className="text-gray-400">Burhanpur, MadhyaPradesh<br />India, 450331</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-cobalt">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Phone Number</h3>
                                <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">+91 9238191973</p>
                                <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">+91 9399015585</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-cobalt">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Email Address</h3>
                                <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">kp154437@gmail.com</p>
                                <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">devendrapawar9340@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="glass-card p-8 rounded-3xl relative"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-mono text-gray-400 mb-2">Your Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:border-cobalt focus:outline-none transition-colors"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-mono text-gray-400 mb-2">Email Address</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:border-cobalt focus:outline-none transition-colors"
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-mono text-gray-400 mb-2">Mobile Number</label>
                            <input
                                type="tel"
                                value={formData.mobile}
                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:border-cobalt focus:outline-none transition-colors"
                                placeholder="+91 9876543210"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-mono text-gray-400 mb-2">Message</label>
                            <textarea
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:border-cobalt focus:outline-none transition-colors resize-none"
                                placeholder="Tell me about your project..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className={`w-full font-bold py-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 ${status === 'success' ? 'bg-green-600 text-white' :
                                status === 'error' ? 'bg-red-600 text-white' :
                                    'bg-cobalt hover:bg-blue-600 text-white hover:shadow-cobalt/25'
                                }`}
                        >
                            {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                            {status === 'success' && 'Message Sent!'}
                            {status === 'error' && 'Failed. Try Again.'}
                            {status === 'idle' && (
                                <>
                                    Send Message <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>


        </section>
    );
};

export default Contact;
