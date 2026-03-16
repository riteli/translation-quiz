"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
  defaultValues?: Question;
  onSubmit: (data: Omit<Question, "id">) => void;
};

export const QuestionForm = ({
  defaultValues,
  onSubmit,
}: QuestionFormProps) => {
  const [question, setQuestion] = useState<string>(
    defaultValues?.question || "",
  );
  const [category, setCategory] = useState<string>(
    defaultValues?.category || "",
  );
  const isUpdating = defaultValues !== undefined;

  return (
    <Dialog>
      {/* TODO: openは外部から制御するように変更 */}
      <DialogTrigger asChild>
        <Button>{isUpdating ? "問題を更新" : "問題を追加"}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isUpdating ? "問題を更新" : "問題を追加"}</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit({
              question,
              category,
            });
          }}
        >
          <FieldGroup>
            <Field>
              <Label htmlFor="question">問題</Label>
              <Input
                id="question"
                placeholder="英訳する文章を入力してください"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </Field>
            <Field>
              <Label htmlFor="category">カテゴリ</Label>
              <Input
                id="category"
                placeholder="カテゴリを入力してください"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button>キャンセル</Button>
            </DialogClose>
            <Button type="submit">{isUpdating ? "更新" : "新規作成"}</Button>　
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
