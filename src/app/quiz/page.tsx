"use client";

import { Button } from "@/components/ui/button";
import { AnswerInput } from "@/components/AnswerInput/AnswerInput";
import { QuestionCard } from "@/components/QuestionCard/QuestionCard";
import { ProgressBar } from "@/components/ProgressBar/ProgressBar";
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
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-2xl space-y-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground text-right">
            {currentIndex + 1} / {questions.length}
          </p>
          <ProgressBar value={((currentIndex + 1) / questions.length) * 100} />
        </div>
        <QuestionCard
          questionNumber={currentIndex + 1}
          questionText={questions[currentIndex].question}
        />

        {isAnswerRevealed && (
          <div className="space-y-4">
            <ReferenceAnswer
              referenceAnswer={answer}
              hidden={!isAnswerRevealed}
            />
            <div className="grid grid-cols-2 gap-4">
              <SelfJudgeButton onClick={() => handleJudge(true)} text="正解" />
              <SelfJudgeButton
                onClick={() => handleJudge(false)}
                text="不正解"
              />
            </div>
          </div>
        )}

        <AnswerInput answer={userAnswer} onChange={setUserAnswer} />
        {!isAnswerRevealed && (
          <Button className="w-full cursor-pointer" onClick={handleReveal}>
            答えを見る
          </Button>
        )}
      </div>
    </main>
  );
}
