import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { getSiteContent, updateSiteContent, getProjects, addProject, deleteProject, getMessages, deleteMessage, getTestimonials, deleteTestimonial, type PageContent, type Project, type Message, type Testimonial } from '../../lib/content';
import { LogOut, Save, Plus, Trash2, MessageSquare, Mail, Star } from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'content' | 'projects' | 'messages' | 'testimonials'>('content');
    const [content, setContent] = useState<PageContent | null>(null);
    const [projects, setProjects] = useState<Project[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [newProject, setNewProject] = useState<Partial<Project>>({ title: '', category: '', image: '', description: '', tags: [] });

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const c = await getSiteContent();
        const p = await getProjects();
        const m = await getMessages();
        const t = await getTestimonials();
        setContent(c);
        setProjects(p);
        setMessages(m);
        setTestimonials(t);
    };

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/admin/login');
    };

    const saveContent = async () => {
        if (content) {
            await updateSiteContent(content);
            alert('Content Updated!');
        }
    };

    const handleCreateProject = async () => {
        if (newProject.title && newProject.image) {
            try {
                await addProject(newProject as Project);
                setNewProject({ title: '', category: '', image: '', description: '', tags: [] });
                loadData();
                alert('Project added successfully!');
            } catch (error: any) {
                console.error("Error adding project:", error);
                alert(`Failed to add project: ${error.message}`);
            }
        } else {
            alert("Please fill in at least the Title and Image URL.");
        }
    };

    const handleDeleteProject = async (id: string) => {
        if (confirm('Delete this project?')) {
            await deleteProject(id);
            loadData();
        }
    };

    const handleDeleteMessage = async (id: string) => {
        if (confirm('Delete this message?')) {
            await deleteMessage(id);
            loadData();
        }
    };

    const handleDeleteTestimonial = async (id: string) => {
        if (confirm('Delete this review?')) {
            await deleteTestimonial(id);
            loadData();
        }
    };

    return (
        <div className="min-h-screen bg-obsidian pt-24 px-4 pb-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <button onClick={handleLogout} className="flex items-center gap-2 text-red-400 hover:text-red-300">
                        <LogOut className="w-5 h-5" /> Logout
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 border-b border-white/10 overflow-x-auto">
                    <button
                        onClick={() => setActiveTab('content')}
                        className={`pb-4 px-4 font-bold whitespace-nowrap ${activeTab === 'content' ? 'text-cobalt border-b-2 border-cobalt' : 'text-gray-500'}`}
                    >
                        Site Content
                    </button>
                    <button
                        onClick={() => setActiveTab('projects')}
                        className={`pb-4 px-4 font-bold whitespace-nowrap ${activeTab === 'projects' ? 'text-cobalt border-b-2 border-cobalt' : 'text-gray-500'}`}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => setActiveTab('messages')}
                        className={`pb-4 px-4 font-bold whitespace-nowrap flex items-center gap-2 ${activeTab === 'messages' ? 'text-cobalt border-b-2 border-cobalt' : 'text-gray-500'}`}
                    >
                        <MessageSquare className="w-4 h-4" /> Messages ({messages.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('testimonials')}
                        className={`pb-4 px-4 font-bold whitespace-nowrap flex items-center gap-2 ${activeTab === 'testimonials' ? 'text-cobalt border-b-2 border-cobalt' : 'text-gray-500'}`}
                    >
                        <Star className="w-4 h-4" /> Reviews ({testimonials.length})
                    </button>
                </div>

                {/* Content Editor */}
                {activeTab === 'content' && content && (
                    <div className="glass-card p-8 rounded-2xl max-w-3xl">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Hero Title</label>
                                <input
                                    value={content.heroTitle}
                                    onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
                                    className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Hero Subtitle</label>
                                <textarea
                                    value={content.heroSubtitle}
                                    onChange={(e) => setContent({ ...content, heroSubtitle: e.target.value })}
                                    className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white"
                                    rows={3}
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">About Story</label>
                                <textarea
                                    value={content.aboutStory}
                                    onChange={(e) => setContent({ ...content, aboutStory: e.target.value })}
                                    className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white"
                                    rows={6}
                                />
                            </div>
                            <button onClick={saveContent} className="flex items-center gap-2 px-6 py-3 bg-cobalt hover:bg-blue-600 rounded-lg font-bold">
                                <Save className="w-5 h-5" /> Save Changes
                            </button>
                        </div>
                    </div>
                )}

                {/* Project Editor */}
                {activeTab === 'projects' && (
                    <div className="space-y-8">
                        {/* Add New */}
                        <div className="glass-card p-6 rounded-2xl">
                            <h3 className="text-xl font-bold mb-4">Add New Project</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                    placeholder="Project Title"
                                    value={newProject.title}
                                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                                    className="bg-black/30 border border-white/10 rounded-lg p-3"
                                />
                                <input
                                    placeholder="Image URL"
                                    value={newProject.image}
                                    onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                                    className="bg-black/30 border border-white/10 rounded-lg p-3"
                                />
                                <input
                                    placeholder="Category (e.g. AI, Web)"
                                    value={newProject.category}
                                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                                    className="bg-black/30 border border-white/10 rounded-lg p-3"
                                />
                                <div className="md:col-span-2">
                                    <textarea
                                        placeholder="Project Description"
                                        value={newProject.description || ''}
                                        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                                        className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-gray-200"
                                        rows={3}
                                    />
                                </div>
                            </div>
                            <button onClick={handleCreateProject} className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-500 rounded-lg font-bold">
                                <Plus className="w-5 h-5" /> Add Project
                            </button>
                        </div>

                        {/* List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map(project => (
                                <div key={project.id} className="glass-card p-4 rounded-xl relative group">
                                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                                    <h3 className="font-bold text-lg">{project.title}</h3>
                                    <p className="text-sm text-gray-400">{project.category}</p>
                                    <button
                                        onClick={() => handleDeleteProject(project.id!)}
                                        className="absolute top-4 right-4 p-2 bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Message Viewer */}
                {activeTab === 'messages' && (
                    <div className="space-y-6">
                        {messages.length === 0 ? (
                            <div className="p-12 text-center text-gray-500">No messages yet.</div>
                        ) : (
                            messages.map(msg => (
                                <div key={msg.id} className="glass-card p-6 rounded-xl relative group border border-white/5">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-bold text-lg flex items-center gap-2">
                                                {msg.name} <span className="text-xs font-normal text-gray-500 bg-white/5 px-2 py-1 rounded-full">{new Date(msg.date).toLocaleDateString()}</span>
                                            </h3>
                                            <div className="flex flex-col gap-1 mt-1">
                                                <a href={`mailto:${msg.email}`} className="text-cobalt text-sm flex items-center gap-1 hover:underline">
                                                    <Mail className="w-3 h-3" /> {msg.email}
                                                </a>
                                                {msg.mobile && (
                                                    <a href={`tel:${msg.mobile}`} className="text-cobalt text-sm flex items-center gap-1 hover:underline">
                                                        <span className="text-xs">📱</span> {msg.mobile}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleDeleteMessage(msg.id!)}
                                            className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                                            title="Delete Message"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed bg-black/20 p-4 rounded-lg">
                                        {msg.message}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* Testimonials Manager */}
                {activeTab === 'testimonials' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.length === 0 ? (
                            <div className="col-span-2 p-12 text-center text-gray-500">No testimonials yet.</div>
                        ) : (
                            testimonials.map(t => (
                                <div key={t.id} className="glass-card p-6 rounded-xl relative border border-white/5">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold">{t.name} <span className="text-gray-500 text-sm font-normal">({t.role})</span></h3>
                                        <button onClick={() => handleDeleteTestimonial(t.id!)} className="text-red-500 hover:text-red-400">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="flex gap-1 text-yellow-500 text-sm mb-4">
                                        {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                                    </div>
                                    <p className="text-gray-400 text-sm italic">"{t.text}"</p>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
