import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ScoreBoardProps = {
  totalQuestions: number;
  totalCorrect: number;
};

export const ScoreBoard = ({
  totalQuestions,
  totalCorrect,
}: ScoreBoardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>スコア</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          正解数：{totalCorrect}/{totalQuestions}
        </p>
        <p>
          正解率：{Math.round((totalCorrect / totalQuestions) * 100)}%
        </p>
      </CardContent>
    </Card>
  );
};
