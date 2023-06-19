import { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta = {
  title: "Components/common/Input",
  component: Input,
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "placeholder",
      table: {
        type: { summary: "string" },
      },
    },
    hasBorder: {
      control: { type: "boolean" },
      defaultValue: true,
      description: "경계선 유무",
      table: {
        type: { summary: "boolean" },
      },
    },
    hasError: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "에러 유무",
      table: {
        type: { summary: "boolean" },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Normal: Story = {
  args: {
    placeholder: "placeholder",
    hasBorder: true,
    hasError: false,
  },
};

export const Error: Story = {
  args: {
    placeholder: "placeholder",
    hasBorder: true,
    hasError: true,
  },
};
