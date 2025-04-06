import React, { useState, useEffect } from 'react';

const TextChanger = () => {
  const staticText = "Hi, I'm Vishal,";
  const variations = ["a Frontend Developer 💻", "a React Enthusiast ⚛️"];

  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingDelay, setTypingDelay] = useState(100);

  useEffect(() => {
    const current = variations[textIndex];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setTypingDelay(40);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % variations.length);
        }
      } else {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        setTypingDelay(80);

        if (charIndex === current.length) {
          setTypingDelay(1500); // Pause before deleting
          setIsDeleting(true);
        }
      }
    }, typingDelay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, typingDelay]);

  return (
    <div className="text-2xl md:text-4xl font-bold text-white text-center flex flex-wrap justify-center items-center gap-2">
      <span className="whitespace-nowrap">{staticText}</span>
      <span className="text-purple-400 min-w-[230px] text-left inline-block">{displayText}</span>
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TextChanger;
