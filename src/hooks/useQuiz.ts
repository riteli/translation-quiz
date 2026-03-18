import { useState } from "react";
import { useRouter } from "next/navigation";

import { useQuestions } from "@/hooks/useQuestions";

export const useQuiz = () => {
  const router = useRouter();
  const { questions } = useQuestions();

  const [answer, setAnswer] = useState<string>("");
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);

  const handleReveal = async () => {
    const res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: questions[currentIndex].question }),
    });
    const data = await res.json();

    setAnswer(data.translatedText);
    setIsAnswerRevealed(true);
  };

  const handleJudge = (isCorrect: boolean) => {
    const newCorrectCount = isCorrect ? correctCount + 1 : correctCount;
    if (isCorrect) {
      setCorrectCount(newCorrectCount);
    }
    setCurrentIndex((prevCurrentIndex) => prevCurrentIndex + 1);

    if (currentIndex + 1 >= questions.length) {
      router.push(
        `/result?correct=${newCorrectCount}&total=${questions.length}`,
      );
    } else {
      setIsAnswerRevealed(false);
      setUserAnswer("");
    }
  };

  return {
    questions,
    answer,
    setAnswer,
    userAnswer,
    setUserAnswer,
    currentIndex,
    correctCount,
    isAnswerRevealed,
    handleReveal,
    handleJudge,
  };
};
