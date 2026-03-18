"use client";

import { HistoryList } from "@/components/HistoryList/HistoryList";
import { useHistory } from "@/hooks/useHistory";

export default function History() {
  const { histories } = useHistory();

  return (
    <main>
      <HistoryList histories={histories} />
    </main>
  );
}
