import { useState } from "react";

type HistoryEntry = {
  id: string;
  date: string;
  totalQuestions: number;
  totalCorrect: number;
  percentage: number;
};

export const useHistory = () => {
  const [histories, setHistories] = useState<Array<HistoryEntry>>(() => {
    if (typeof window === "undefined") return [];
    const storedHistories = localStorage.getItem("histories");
    return storedHistories ? JSON.parse(storedHistories) : [];
  });

  const addHistory = (totalQuestions: number, totalCorrect: number) => {
    const newEntry = {
      id: crypto.randomUUID(),
      date: new Date().toLocaleString(),
      totalQuestions,
      totalCorrect,
      percentage: Math.round((totalCorrect / totalQuestions) * 100),
    };
    const updated = [...histories, newEntry];
    localStorage.setItem("histories", JSON.stringify(updated));
    setHistories(updated);
  };

  return {
    histories,
    addHistory,
  };
};
