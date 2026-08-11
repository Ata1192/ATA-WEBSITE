"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export default function TypeWriter({
  words,
  speed = 75,
  deleteSpeed = 35,
  pauseTime = 1800,
}: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    // Yazma bitti, bekliyoruz
    if (isPausing) {
      const t = setTimeout(() => {
        setIsPausing(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(t);
    }

    // Silme modu
    if (isDeleting) {
      if (displayed.length === 0) {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
        return;
      }
      const t = setTimeout(
        () => setDisplayed((d) => d.slice(0, -1)),
        deleteSpeed
      );
      return () => clearTimeout(t);
    }

    // Yazma modu
    if (displayed.length === currentWord.length) {
      setIsPausing(true);
      return;
    }

    const t = setTimeout(
      () => setDisplayed(currentWord.slice(0, displayed.length + 1)),
      speed
    );
    return () => clearTimeout(t);
  }, [displayed, wordIndex, isDeleting, isPausing, words, speed, deleteSpeed, pauseTime]);

  return (
    <span className="typewriter-wrap">
      <span className="typewriter-text">{displayed}</span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}
