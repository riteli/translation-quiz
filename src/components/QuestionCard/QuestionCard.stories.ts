import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { QuestionCard } from "./QuestionCard";

const meta = {
  title: "Components/QuestionCard",
  component: QuestionCard,
  tags: ["autodocs"],
  args: {
    questionNumber: 1,
    questionText: "りんごを英語で何と言いますか？",
  },
} satisfies Meta<typeof QuestionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
