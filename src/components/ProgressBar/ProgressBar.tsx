import { Progress } from "@/components/ui/progress";

type ProgressBarProps = {
  value: number;
};

export const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <div className="w-80">
      <Progress value={value} />
    </div>
  );
};
