"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ScoreBoard } from "@/components/ScoreBoard/ScoreBoard";
import { useHistory } from "@/hooks/useHistory";

export default function Result() {
  const searchParams = useSearchParams();
  const totalQuestions = Number(searchParams.get("total"));
  const totalCorrect = Number(searchParams.get("correct"));

  const { addHistory } = useHistory();
  useEffect(() => {
    addHistory(totalQuestions, totalCorrect);
  }, [addHistory, totalQuestions, totalCorrect]);

  return (
    <main>
      <ScoreBoard totalQuestions={totalQuestions} totalCorrect={totalCorrect} />
      <Button asChild>
        <Link href="/">トップページに戻る</Link>
      </Button>
    </main>
  );
}
