import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SelfJudgeButton } from "./SelfJudgeButton";

const meta = {
  title: "Components/SelfJudgeButton",
  component: SelfJudgeButton,
  tags: ["autodocs"],
  args: {
    onClick: () => {
      console.log("Button clicked");
    },
  },
} satisfies Meta<typeof SelfJudgeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Correct: Story = {
  args: {
    text: "正解",
  },
};

export const Incorrect: Story = {
  args: {
    text: "不正解",
  },
};
