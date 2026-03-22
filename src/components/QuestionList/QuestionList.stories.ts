import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { QuestionList } from "./QuestionList";

const meta = {
  title: "Components/QuestionList",
  component: QuestionList,
  tags: ["autodocs"],
  args: {
    onEdit: (question) => {
      console.log("Editing question:", question);
    },
    onDelete: (id) => {
      console.log("Deleting question:", id);
    },
  },
} satisfies Meta<typeof QuestionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    questions: [],
  },
};

export const WithData: Story = {
  args: {
    questions: [
      {
        id: "1",
        question: "りんご",
        category: "単語",
      },
      {
        id: "2",
        question: "犬",
        category: "単語",
      },
      {
        id: "3",
        question: "今日はいい天気ですね",
        category: "文章",
      },
    ],
  },
};
