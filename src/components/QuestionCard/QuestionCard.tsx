import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        <CardDescription>下記の文章を英訳してください</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{questionText}</p>
      </CardContent>
    </Card>
  );
};
