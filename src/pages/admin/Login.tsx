import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin/dashboard');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-obsidian px-4">
            <div className="glass-card p-8 rounded-2xl w-full max-w-md border border-white/10">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-cobalt/20 rounded-full text-cobalt">
                        <Lock className="w-8 h-8" />
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">Admin Access</h2>

                {error && <p className="text-red-500 text-center mb-4 text-sm">{error}</p>}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-cobalt focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-cobalt focus:outline-none"
                        />
                    </div>
                    <button type="submit" className="w-full bg-cobalt hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
