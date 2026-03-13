import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";

type AnswerInputProps = {
  answer: string;
  onChange: (answer: string) => void;
  disabled?: boolean;
};

export const AnswerInput = ({
  answer,
  onChange,
  disabled,
}: AnswerInputProps) => {
  return (
    <Field>
      <FieldLabel htmlFor="answer">回答</FieldLabel>
      <Input
        id="answer"
        placeholder="回答を入力してください"
        required
        value={answer}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </Field>
  );
};
