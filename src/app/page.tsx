import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <h1>DeepL翻訳クイズ</h1>
      <Button asChild>
        <Link href="/quiz">スタート</Link>
      </Button>
    </main>
  );
}
