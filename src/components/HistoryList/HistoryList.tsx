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
          <TableHead>日付</TableHead>
          <TableHead>正解数</TableHead>
          <TableHead>正解率</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {histories.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.date}</TableCell>
            <TableCell>
              {item.totalCorrect}/{item.totalQuestions}
            </TableCell>
            <TableCell>{item.percentage}%</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
