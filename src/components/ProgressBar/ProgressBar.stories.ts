import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProgressBar } from "./ProgressBar";

const meta = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
  },
};

export const Halfway: Story = {
  args: {
    value: 50,
  },
};

export const Full: Story = {
  args: {
    value: 100,
  },
};
