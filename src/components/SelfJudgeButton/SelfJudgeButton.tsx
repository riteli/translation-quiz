import { Button } from "@/components/ui/button";

type SelfJudgeButtonProps = {
  onClick: () => void;
  text: "正解" | "不正解";
  isSelected?: boolean;
};

export const SelfJudgeButton = ({ onClick, text }: SelfJudgeButtonProps) => {
  return (
    <Button variant="outline" onClick={onClick} className="w-full">
      {text}
    </Button>
  );
};
