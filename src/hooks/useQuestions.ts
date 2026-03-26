import { useState } from "react";

import type { Question } from "@/types";

export const useQuestions = () => {
  const [questions, setQuestions] = useState<Array<Question>>(() => {
    if (typeof window === "undefined") return [];
    const storedQuestions = localStorage.getItem("questions");
    return storedQuestions ? JSON.parse(storedQuestions) : [];
  });

  const createQuestion = (question: string, category: string) => {
    const newQuestion = {
      id: crypto.randomUUID(),
      question,
      category,
    };
    const updated = [...questions, newQuestion];
    localStorage.setItem("questions", JSON.stringify(updated));
    setQuestions(updated);
  };

  const updateQuestion = (id: string, question: string, category: string) => {
    const updatedQuestions = questions.map((q: Question) =>
      q.id === id ? { ...q, question, category } : q,
    );
    localStorage.setItem("questions", JSON.stringify(updatedQuestions));
    setQuestions(updatedQuestions);
  };

  const deleteQuestion = (id: string) => {
    const updatedQuestions = questions.filter((q: Question) => q.id !== id);
    localStorage.setItem("questions", JSON.stringify(updatedQuestions));
    setQuestions(updatedQuestions);
  };

  return {
    questions,
    createQuestion,
    updateQuestion,
    deleteQuestion,
  };
};
