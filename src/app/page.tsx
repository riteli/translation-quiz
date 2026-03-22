import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">DeepL翻訳クイズ</h1>
        <p className="text-muted-foreground">
          問題文を英訳して、DeepLで答え合わせをするクイズアプリです
        </p>
      </div>
      <Button size="lg" asChild>
        <Link href="/quiz">スタート</Link>
      </Button>
    </main>
  );
}
