import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ReferenceAnswer } from "./ReferenceAnswer";

const meta = {
  title: "Components/ReferenceAnswer",
  component: ReferenceAnswer,
  tags: ["autodocs"],
  args: {
    referenceAnswer: "This is an example answer",
    hidden: false,
  },
} satisfies Meta<typeof ReferenceAnswer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hidden: Story = {
  args: {
    hidden: true,
  },
};
