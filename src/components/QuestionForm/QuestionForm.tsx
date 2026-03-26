"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Question = {
  id: string;
  question: string;
  category: string;
};

type QuestionFormProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  defaultValues?: Question;
  onSubmit: (data: Omit<Question, "id">) => void;
};

const schema = z.object({
  question: z.string().min(1, "問題文を1文字以上入力してください"),
  category: z.string(),
});

type FormValues = z.infer<typeof schema>;

export const QuestionForm = ({
  isOpen,
  onOpenChange,
  defaultValues,
  onSubmit,
}: QuestionFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      question: defaultValues?.question || "",
      category: defaultValues?.category || "",
    },
  });

  const isUpdating = defaultValues !== undefined;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isUpdating ? "問題を更新" : "問題を追加"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <Label htmlFor="question">問題</Label>
              <Controller
                name="question"
                control={control}
                render={({ field }) => (
                  <Input
                    id="question"
                    placeholder="英訳する文章を入力してください"
                    {...field}
                  />
                )}
              />
              {errors.question && (
                <p className="text-destructive text-sm">
                  {errors.question.message}
                </p>
              )}
            </Field>
            <Field>
              <Label htmlFor="category">カテゴリ</Label>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Input
                    id="category"
                    placeholder="カテゴリを入力してください"
                    {...field}
                  />
                )}
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button className="cursor-pointer" variant="outline">
                キャンセル
              </Button>
            </DialogClose>
            <Button className="cursor-pointer" type="submit">
              {isUpdating ? "更新" : "新規作成"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
