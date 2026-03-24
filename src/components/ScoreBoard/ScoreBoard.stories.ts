import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScoreBoard } from "./ScoreBoard";

const meta = {
  title: "Components/ScoreBoard",
  component: ScoreBoard,
  tags: ["autodocs"],
} satisfies Meta<typeof ScoreBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Zero: Story = {
  args: {
    totalQuestions: 10,
    totalCorrect: 0,
  },
};

export const Halfway: Story = {
  args: {
    totalQuestions: 10,
    totalCorrect: 5,
  },
};

export const Full: Story = {
  args: {
    totalQuestions: 10,
    totalCorrect: 10,
  },
};
