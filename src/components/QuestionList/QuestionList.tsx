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
          <TableHead>問題</TableHead>
          <TableHead>カテゴリ</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {questions.map((question) => (
          <TableRow key={question.id}>
            <TableCell>{question.question}</TableCell>
            <TableCell>{question.category}</TableCell>
            <TableCell>
              <Button onClick={() => onEdit(question)}>編集</Button>
            </TableCell>
            <TableCell>
              <Button onClick={() => onDelete(question.id)}>削除</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
