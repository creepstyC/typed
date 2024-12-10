import React, { useState } from 'react';
import TypingTest from './components/TypingTest';
import WordList from './components/WordList';
import Login from './pages/auth/Login';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleLogin = (email) => {
        setUserEmail(email);
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setUserEmail('');
        setIsAuthenticated(false);
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <header className="bg-olive-600 text-center py-4 text-xl font-bold">
                typed
            </header>
            <main className="p-8">
                {!isAuthenticated ? (
                    <Login onLogin={handleLogin} />
                ) : (
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">Welcome, {userEmail}</h1>
                            <button
                                onClick={handleLogout}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
                            >
                                Logout
                            </button>
                        </div>
                        <TypingTest />
                        <WordList />
                    </div>
                )}
            </main>
            <footer className="bg-olive-600 text-center py-4">
                2024 typed. GNU General Public License.
            </footer>
        </div>
    );
};

export default App;
