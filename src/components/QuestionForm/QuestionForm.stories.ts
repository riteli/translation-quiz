import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { QuestionForm } from "./QuestionForm";

const meta = {
  title: "Components/QuestionForm",
  component: QuestionForm,
  tags: ["autodocs"],
} satisfies Meta<typeof QuestionForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewCreate: Story = {
  args: {
    defaultValues: undefined,
    onSubmit: (data) => {
      console.log("Submitted data:", data);
    },
  },
};

export const Update: Story = {
  args: {
    defaultValues: {
      id: "1",
      question: "りんごを英語で言うと?",
      category: "単語",
    },
    onSubmit: (data) => {
      console.log("Submitted data:", data);
    },
  },
};
