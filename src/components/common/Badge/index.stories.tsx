import { Meta, StoryObj } from "@storybook/react";
import Badge from ".";

const meta = {
  title: "Components/common/Badge",
  component: Badge,
  argTypes: {
    content: {
      control: { type: "text" },
      description: "내용",
      table: {
        type: { summary: "string" },
      },
    },
    backgroundColor: {
      control: { type: "color" },
      description: "배경색",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Red: Story = {
  args: {
    content: "1",
    backgroundColor: "red",
  },
};

export const Blue: Story = {
  args: {
    content: "2",
    backgroundColor: "blue",
  },
};

export const Green: Story = {
  args: {
    content: "3",
    backgroundColor: "green",
  },
};
