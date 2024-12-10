import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Both fields are required!');
            return;
        }
        setError('');

        // Simulamos el inicio de sesión exitoso
        onLogin(email);
    };

    return (
        <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            {error && <div className="bg-red-600 text-white p-2 mb-4 rounded">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 text-black rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 font-medium">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 text-black rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-olive-600 text-white py-2 rounded hover:bg-olive-500"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
