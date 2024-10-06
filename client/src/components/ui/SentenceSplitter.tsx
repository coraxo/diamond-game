import React from 'react';

interface SentenceSplitterProps {
  text: string;
}

const SentenceSplitter: React.FC<SentenceSplitterProps> = ({ text }) => {
  const sentences = text.split('. ')

  return (
    <div>
      {sentences.map((sentence, index) => (
        <p key={index}>
          {sentence}
          {index < sentences.length - 1 ? '.' : ''}
        </p>
      ))}
    </div>
  );
};

export default SentenceSplitter