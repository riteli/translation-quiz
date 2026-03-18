import { useState, useCallback } from "react";

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

  const addHistory = useCallback(
    (totalQuestions: number, totalCorrect: number) => {
      const newEntry = {
        id: crypto.randomUUID(),
        date: new Date().toLocaleString(),
        totalQuestions,
        totalCorrect,
        percentage: Math.round((totalCorrect / totalQuestions) * 100),
      };

      setHistories((prev) => {
        const updated = [...prev, newEntry];
        localStorage.setItem("histories", JSON.stringify(updated));
        return updated;
      });
    },
    [],
  );

  return {
    histories,
    addHistory,
  };
};
