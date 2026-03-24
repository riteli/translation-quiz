import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type HistoryItem = {
  id: string;
  date: string;
  totalQuestions: number;
  totalCorrect: number;
  percentage: number;
};

type HistoryListProps = {
  histories: Array<HistoryItem>;
};

export const HistoryList = ({ histories }: HistoryListProps) => {
  if (histories.length === 0) {
    return <p>履歴がありません。</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">日付</TableHead>
          <TableHead className="text-center">正解数</TableHead>
          <TableHead className="text-center">正解率</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {histories.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="text-center">{item.date}</TableCell>
            <TableCell className="text-center">
              {item.totalCorrect}/{item.totalQuestions}
            </TableCell>
            <TableCell className="text-center">{item.percentage}%</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
