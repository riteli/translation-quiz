import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AnswerInput } from "./AnswerInput";

const meta = {
  title: "Components/AnswerInput",
  component: AnswerInput,
  tags: ["autodocs"],
  args: {
    answer: "",
    onChange: (answer: string) => {
      console.log("Answer changed:", answer);
    },
    disabled: false,
  },
} satisfies Meta<typeof AnswerInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    answer: "これは回答の例です",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
