import React, { useState } from "react";
import api from "../utils/api";

const AddWord = ({ onAddWord }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/words', { text });
      onAddWord(response.data);
      setText('');
    } catch (error) {
      console.error('Error adding word:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-dark-bg text-light-text p-6 rounded shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">add word</h2>
      <div className="mb-4">
        <label className="block text-sm mb-2"></label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="bg-dark-olive text-light-text border border-gray-600 rounded p-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-olive text-white rounded p-2 hover:bg-dark-olive"
      >
        add word
      </button>
    </form>
  );
};

export default AddWord;
