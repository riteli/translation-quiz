"use client";

import { Button } from "@/components/ui/button";

import { AnswerInput } from "@/components/AnswerInput/AnswerInput";
import { QuestionCard } from "@/components/QuestionCard/QuestionCard";
import { ReferenceAnswer } from "@/components/ReferenceAnswer/ReferenceAnswer";
import { SelfJudgeButton } from "@/components/SelfJudgeButton/SelfJudgeButton";
import { useQuiz } from "@/hooks/useQuiz";

export default function Quiz() {
  const {
    questions,
    answer,
    userAnswer,
    setUserAnswer,
    currentIndex,
    isAnswerRevealed,
    handleReveal,
    handleJudge,
  } = useQuiz();

  if (!questions.length || !questions[currentIndex]) {
    return null;
  }
  return (
    <main>
      <QuestionCard
        questionNumber={currentIndex + 1}
        questionText={questions[currentIndex].question}
      />
      <ReferenceAnswer referenceAnswer={answer} hidden={!isAnswerRevealed} />
      <AnswerInput answer={userAnswer} onChange={setUserAnswer} />

      {!isAnswerRevealed && <Button onClick={handleReveal}>答えを見る</Button>}

      {isAnswerRevealed && (
        <div>
          <SelfJudgeButton onClick={() => handleJudge(true)} text="正解" />
          <SelfJudgeButton onClick={() => handleJudge(false)} text="不正解" />
        </div>
      )}
    </main>
  );
}
