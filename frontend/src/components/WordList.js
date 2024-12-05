import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import AddWord from './AddWord';

const WordList = () => {
  const [words, setWords] = useState([]);
  const [editingWord, setEditingWord] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await api.get('/words');
        setWords(response.data);
      } catch (error) {
        console.error('Error fetching words: ', error);
      }
    };

    fetchWords();
  }, []);

  const handleAddWord = (newWord) => {
    setWords((prevWords) => [...prevWords, newWord]);
  };

  const handleDeleteWord = async (id) => {
    try {
      await api.delete(`/words/${id}`);
      setWords((prevWords) => prevWords.filter((word) => word._id !== id));
    } catch (error) {
      console.error('Error deleting word:', error);
    }
  };

  const handleEditClick = (word) => {
    setEditingWord(word._id);
    setEditText(word.text);
  };

  const handleEditSave = async (id) => {
    try {
      const updatedWord = await api.put(`/words/${id}`, {
        text: editText,
      });

      setWords((prevWords) =>
        prevWords.map((word) => (word._id === id ? updatedWord.data : word))
      );
      setEditingWord(null);
    } catch (error) {
      console.error('Error updating word:', error);
    }
  };

  const handleEditCancel = () => {
    setEditingWord(null);
  };

  return (
    <div className="bg-dark-bg text-light-text p-6 rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">word list</h1>
      <AddWord onAddWord={handleAddWord} />
      <ul>
        {words.map((word) => (
          <li key={word._id} className="mb-2 flex justify-between items-center">
            {editingWord === word._id ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="bg-dark-olive text-light-text border border-gray-600 rounded p-2"
                />
                <button
                  onClick={() => handleEditSave(word._id)}
                  className="bg-olive text-white rounded p-2 ml-2"
                >
                  save
                </button>
                <button
                  onClick={handleEditCancel}
                  className="bg-olive text-white rounded p-2 ml-2"
                >
                  cancel
                </button>
              </div>
            ) : (
              <div>
                {word.text}
                <button
                  onClick={() => handleEditClick(word)}
                  className="bg-olive text-white rounded p-2 ml-2"
                >
                  edit
                </button>
                <button
                  onClick={() => handleDeleteWord(word._id)}
                  className="bg-olive text-white rounded p-2 ml-2"
                >
                  delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;
