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
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "none">("none");

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

  const toggleSortOrder = () => {
    if (sortOrder === "none") {
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("none");
    }
  };

  const sortedQuestions = [...questions].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.category.localeCompare(b.category, "ja");
    }
    if (sortOrder === "desc") {
      return b.category.localeCompare(a.category, "ja");
    }
    return 0;
  });

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="w-full max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">問題管理</h1>
          <div className="flex flex-col items-center justify-center space-y-2 md:space-y-0 md:flex-row md:items-start md:space-x-2">
            <Button
              className="cursor-pointer"
              onClick={() => setIsFormOpen(true)}
            >
              問題を作成
            </Button>
            <div>
              <Button className="cursor-pointer" onClick={toggleSortOrder}>
                {sortOrder === "asc"
                  ? "カテゴリ昇順"
                  : sortOrder === "desc"
                    ? "カテゴリ降順"
                    : "カテゴリでソート"}
              </Button>
              <p className="text-muted-foreground">
                <small>実際の問題順は変わりません</small>
              </p>
            </div>
          </div>
        </div>
        <QuestionList
          questions={sortedQuestions}
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
