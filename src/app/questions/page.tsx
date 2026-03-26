"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { QuestionList } from "@/components/QuestionList/QuestionList";
import { QuestionForm } from "@/components/QuestionForm/QuestionForm";
import { useQuestions } from "@/hooks/useQuestions";
import type { Question } from "@/types";

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
    <main className="min-h-screen px-4 py-8">
      <div className="w-full max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">問題管理</h1>
          <Button
            className="cursor-pointer"
            onClick={() => setIsFormOpen(true)}
          >
            問題を作成
          </Button>
        </div>
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
      </div>
    </main>
  );
}
