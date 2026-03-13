import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type QuestionCardProps = {
  questionNumber: number;
  questionText: string;
};

export const QuestionCard = ({
  questionNumber,
  questionText,
}: QuestionCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Q{questionNumber}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{questionText}</p>
      </CardContent>
    </Card>
  );
};
