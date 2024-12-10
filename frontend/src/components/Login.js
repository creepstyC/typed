import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });
            login(response.data);
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-dark-green text-white">
            <h1 className="text-3xl mb-6">Login</h1>
            <form className="bg-olive p-6 rounded-md" onSubmit={handleLogin}>
                {error && <p className="text-red-500">{error}</p>}
                <div className="mb-4">
                    <label>Email</label>
                    <input
                        type="email"
                        className="w-full p-2 bg-dark text-white rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label>Password</label>
                    <input
                        type="password"
                        className="w-full p-2 bg-dark text-white rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="bg-light-green px-4 py-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
