// pages/index.js
import React from 'react';
import Quiz from '../components/Quiz';

const Home = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Mental Wellness Check</h1>
      <Quiz />
    </div>
  );
};

export default Home;





