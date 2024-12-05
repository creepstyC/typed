import React, { useState } from 'react';
import WordList from './components/WordList';
import TypingTest from './components/TypingTest';

const App = () => {
  const [view, setView] = useState('typingTest');

  return (
    <div className="min-h-screen bg-dark-bg text-light-text font-mono flex flex-col items-center p-4">
      {/* Título */}
      <header className="bg-olive text-white w-full py-4 shadow-md text-center">
        <h1 className="text-3xl font-bold">typed</h1>
      </header>

      {/* Navegación */}
      <nav className="mt-6 flex gap-4">
        <button
          onClick={() => setView('wordList')}
          className={`px-4 py-2 rounded ${
            view === 'wordList' ? 'bg-olive text-white' : 'bg-gray-200 text-black hover:bg-gray-300'
          }`}
        >
          words
        </button>
        <button
          onClick={() => setView('typingTest')}
          className={`px-4 py-2 rounded ${
            view === 'typingTest' ? 'bg-olive text-white' : 'bg-gray-200 text-black hover:bg-gray-300'
          }`}
        >
          test
        </button>
      </nav>

      {/* Vista dinámica */}
      <main className="mt-8 w-full max-w-4xl">
        {view === 'wordList' && <WordList />}
        {view === 'typingTest' && <TypingTest />}
      </main>

      {/* Pie de página */}
      <footer className="bg-olive text-white w-full py-4 mt-auto text-center">
        <p>{new Date().getFullYear()} typed. GNU General Public License.</p>
      </footer>
    </div>
  );
};

export default App;
