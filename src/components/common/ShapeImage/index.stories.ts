import { Meta, StoryObj } from "@storybook/react";
import ShapeImage from ".";

const meta = {
  title: "components/common/ShapeImage",
  component: ShapeImage,
  tags: ["autodocs"],
  argTypes: {
    shape: {
      control: {
        type: "radio",
      },
      options: ["circle", "square"],
      defaultValue: "circle",
      table: {
        defaultValue: { summary: "circle" },
        type: { summary: "circle | square" },
      },
    },
    src: {
      control: {
        type: "text",
      },
      defaultValue: "https://picsum.photos/200",
      table: {
        defaultValue: { summary: "https://picsum.photos/200" },
        type: { summary: "string" },
      },
    },
    width: {
      control: {
        type: "number",
      },
      defaultValue: 200,
      table: {
        defaultValue: { summary: 200 },
        type: { summary: "number" },
      },
    },
    height: {
      control: {
        type: "number",
      },
      defaultValue: 200,
      table: {
        defaultValue: { summary: 200 },
        type: { summary: "number" },
      },
    },
  }
} satisfies Meta<typeof ShapeImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Circle: Story = {
  args: {
    shape: "circle",
    src: "https://picsum.photos/200",
  },
};

export const Square: Story = {
  args: {
    shape: "square",
    src: "https://picsum.photos/200",
  },
};
