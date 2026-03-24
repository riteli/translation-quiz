import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HistoryList } from "./HistoryList";

const meta = {
  title: "Components/HistoryList",
  component: HistoryList,
  tags: ["autodocs"],
} satisfies Meta<typeof HistoryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    histories: [],
  },
};

export const WithData: Story = {
  args: {
    histories: [
      {
        id: "1",
        date: "2023-01-01",
        totalQuestions: 10,
        totalCorrect: 5,
        percentage: 50,
      },
      {
        id: "2",
        date: "2023-01-02",
        totalQuestions: 10,
        totalCorrect: 7,
        percentage: 70,
      },
      {
        id: "3",
        date: "2023-01-03",
        totalQuestions: 10,
        totalCorrect: 8,
        percentage: 80,
      },
    ],
  },
};
