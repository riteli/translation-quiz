"use client";

import Link from "next/link";
import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ScoreBoard } from "@/components/ScoreBoard/ScoreBoard";
import { useHistory } from "@/hooks/useHistory";

function ResultContent() {
  const searchParams = useSearchParams();
  const totalQuestions = Number(searchParams.get("total"));
  const totalCorrect = Number(searchParams.get("correct"));

  const percentage = Math.round((totalCorrect / totalQuestions) * 100);
  const message =
    percentage === 100
      ? "完璧です！🎉"
      : percentage >= 70
        ? "よくできました！"
        : "もう一度挑戦してみましょう";

  const { addHistory } = useHistory();
  useEffect(() => {
    if (totalQuestions > 0) {
      addHistory(totalQuestions, totalCorrect);
    }
  }, [addHistory, totalQuestions, totalCorrect]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">結果</h1>
          <p className="text-muted-foreground">{message}</p>
        </div>
        <ScoreBoard
          totalQuestions={totalQuestions}
          totalCorrect={totalCorrect}
        />
        <Button className="w-full" asChild>
          <Link href="/">トップページに戻る</Link>
        </Button>
      </div>
    </main>
  );
}

export default function Result() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <ResultContent />
    </Suspense>
  );
}
