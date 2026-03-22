import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Question = {
  id: string;
  question: string;
  category: string;
};

type QuestionListProps = {
  questions: Array<Question>;
  onEdit: (question: Question) => void;
  onDelete: (id: string) => void;
};

export const QuestionList = ({
  questions,
  onEdit,
  onDelete,
}: QuestionListProps) => {
  if (questions.length === 0) {
    return <p>問題がありません。</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">問題</TableHead>
          <TableHead className="text-center">カテゴリ</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {questions.map((question) => (
          <TableRow key={question.id}>
            <TableCell>{question.question}</TableCell>
            <TableCell className="text-center">{question.category}</TableCell>
            <TableCell className="text-center">
              <Button onClick={() => onEdit(question)}>編集</Button>
            </TableCell>
            <TableCell className="text-center">
              <Button
                className="bg-destructive"
                onClick={() => onDelete(question.id)}
              >
                削除
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
