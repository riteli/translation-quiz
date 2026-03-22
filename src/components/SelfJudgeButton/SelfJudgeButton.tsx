import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type SelfJudgeButtonProps = {
  onClick: () => void;
  text: "正解" | "不正解";
};

export const SelfJudgeButton = ({ onClick, text }: SelfJudgeButtonProps) => {
  const colorClass = text === "正解" ? "bg-correct" : "bg-incorrect";

  return (
    <Button
      className={cn(
        colorClass,
        "cursor-pointer hover:opacity-70 focus:opacity-70",
      )}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
