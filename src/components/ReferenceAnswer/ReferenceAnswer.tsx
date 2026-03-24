import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ReferenceAnswerProps = {
  referenceAnswer: string;
  hidden?: boolean;
};

export const ReferenceAnswer = ({
  referenceAnswer,
  hidden,
}: ReferenceAnswerProps) => {
  if (hidden) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>回答例</CardTitle>
        <CardDescription>DeepLによる翻訳結果です</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg">{referenceAnswer}</p>
      </CardContent>
    </Card>
  );
};
