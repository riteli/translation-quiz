"use client";

import { HistoryList } from "@/components/HistoryList/HistoryList";
import { useHistory } from "@/hooks/useHistory";

export default function History() {
  const { histories } = useHistory();

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="w-full max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">履歴</h1>
        <HistoryList histories={histories} />
      </div>
    </main>
  );
}
