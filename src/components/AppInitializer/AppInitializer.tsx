"use client";

const sampleQuestions = [
  { id: "1", question: "おはようございます", category: "挨拶" },
  { id: "2", question: "ありがとうございます", category: "挨拶" },
  { id: "3", question: "今日はいい天気ですね", category: "日常" },
  { id: "4", question: "駅はどこですか？", category: "道案内" },
  { id: "5", question: "これはいくらですか？", category: "買い物" },
];

export const AppInitializer = () => {
  if (typeof window !== "undefined") {
    if (!localStorage.getItem("questions")) {
      localStorage.setItem("questions", JSON.stringify(sampleQuestions));
    }
  }
  return null;
};
