import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      </CardHeader>
      <CardContent>
        <p>{referenceAnswer}</p>
      </CardContent>
    </Card>
  );
};
