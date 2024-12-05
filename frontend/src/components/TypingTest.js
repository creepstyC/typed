import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const TypingTest = () => {
  const [words, setWords] = useState([]);
  const [testDuration, setTestDuration] = useState(30);
  const [timeLeft, setTimeLeft] = useState(testDuration);
  const [inputText, setInputText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await api.get('/words');
        const shuffledWords = response.data.sort(() => Math.random() - 0.5);
        setWords(shuffledWords.map((word) => word.text));
      } catch (error) {
        console.error('Error fetching words:', error);
      }
    };

    fetchWords();
  }, []);

  useEffect(() => {
    let timer;
    if (isTestRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setIsTestRunning(false);
    }
    return () => clearTimeout(timer);
  }, [isTestRunning, timeLeft]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputText(value);

    if (!isTestRunning) return;

    if (value.endsWith(' ') || value === words[currentWordIndex]) {
      if (value.trim() === words[currentWordIndex]) {
        setCorrectWords(correctWords + 1);
      } else {
        setMistakes(mistakes + 1);
      }
      setCurrentWordIndex(currentWordIndex + 1);
      setInputText('');
    }
  };

  const handleStartTest = () => {
    setIsTestRunning(true);
    setTimeLeft(testDuration);
    setCurrentWordIndex(0);
    setCorrectWords(0);
    setMistakes(0);
    setInputText('');
  };

  const handleTestDurationChange = (duration) => {
    if (!isTestRunning) {
      setTestDuration(duration);
      setTimeLeft(duration);
    }
  };

  const calculateWPM = () => (correctWords / (testDuration / 60)).toFixed(2);
  const calculateAccuracy = () =>
    ((correctWords / (correctWords + mistakes)) * 100 || 0).toFixed(2);

  return (
    <div className="bg-dark-bg text-light-text p-6 rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">typing test</h1>
      {!isTestRunning && (
        <div>
          <p>select test duration</p>
          <button
            onClick={() => handleTestDurationChange(15)}
            className="bg-olive text-white rounded p-2 hover:bg-dark-olive"
          >
            15 seconds
          </button>
          <span className='p-2'></span>
          <button
            onClick={() => handleTestDurationChange(30)}
            className="bg-olive text-white rounded p-2 hover:bg-dark-olive"
          >
            30 seconds
          </button>
          <span className='p-2'></span>
          <button
            onClick={() => handleTestDurationChange(60)}
            className="bg-olive text-white rounded p-2 hover:bg-dark-olive"
          >
            60 seconds
          </button>
        </div>
      )}
      <div>
        <p>Time Left: {timeLeft}s</p>
      </div>
      {isTestRunning && (
        <div>
          <div>
            {words.slice(currentWordIndex, currentWordIndex + 10).map((word, index) => (
              <span key={index} style={{ marginRight: '5px' }}>
                {word}
              </span>
            ))}
          </div>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            disabled={!isTestRunning}
            autoFocus
            className="bg-dark-olive text-light-text border border-gray-600 rounded p-2 mt-4 w-full"
          />
        </div>
      )}
      {!isTestRunning && timeLeft === 0 && (
        <div>
          <h2>Test Finished!</h2>
          <p>Words per Minute (WPM): {calculateWPM()}</p>
          <p>Accuracy: {calculateAccuracy()}%</p>
          <p>Correct Words: {correctWords}</p>
          <p>Mistakes: {mistakes}</p>
          <button
            onClick={handleStartTest}
            className="bg-olive text-white rounded p-2 hover:bg-dark-olive mt-4"
          >
            Start Again
          </button>
        </div>
      )}
      {!isTestRunning && timeLeft > 0 && (
        <button
          onClick={handleStartTest}
          className="bg-olive text-white rounded p-2 hover:bg-dark-olive"
        >
          Start Test
        </button>
      )}
    </div>
  );
};

export default TypingTest;
