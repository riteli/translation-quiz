"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { QuestionList } from "@/components/QuestionList/QuestionList";
import { QuestionForm } from "@/components/QuestionForm/QuestionForm";
import { useQuestions } from "@/hooks/useQuestions";

type Question = {
  id: string;
  question: string;
  category: string;
};

export default function Questions() {
  const [formKey, setFormKey] = useState<number>(0);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [editTarget, setEditTarget] = useState<Question | undefined>(undefined);

  const { questions, createQuestion, updateQuestion, deleteQuestion } =
    useQuestions();

  const handleCreate = (data: { question: string; category: string }) => {
    createQuestion(data.question, data.category);
    setIsFormOpen(false);
  };

  const handleEdit = (q: Question) => {
    setEditTarget(q);
    setIsFormOpen(true);
  };

  const handleUpdate = (data: { question: string; category: string }) => {
    if (!editTarget) {
      return;
    }
    updateQuestion(editTarget.id, data.question, data.category);
    setIsFormOpen(false);
    setEditTarget(undefined);
  };

  const handleOnOpenChange = (isOpen: boolean) => {
    setIsFormOpen(isOpen);
    if (!isOpen) {
      setEditTarget(undefined);
      setFormKey((prev) => prev + 1);
    }
  };

  return (
    <main>
      <QuestionList
        questions={questions}
        onEdit={handleEdit}
        onDelete={deleteQuestion}
      />
      <QuestionForm
        key={editTarget?.id ?? formKey}
        isOpen={isFormOpen}
        onOpenChange={handleOnOpenChange}
        defaultValues={editTarget}
        onSubmit={editTarget ? handleUpdate : handleCreate}
      />
      <Button onClick={() => setIsFormOpen(true)}>問題を作成</Button>
    </main>
  );
}
