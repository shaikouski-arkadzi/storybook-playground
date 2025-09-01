import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    appearance: "primary",
    text: "Primary Button",
  },
};

export const Secondary = {
  args: {
    appearance: "secondary",
    text: "Secondary Button",
  },
};
