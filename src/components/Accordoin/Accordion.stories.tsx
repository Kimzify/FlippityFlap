import type { Meta } from "@storybook/react";
import Accordion from "./Accordion";
import AccordoinItem from "../AccordoinItem/AccordoinItem";
import AccordionDetails from "../AccordionDetails";

const meta = {
  title: "Accordion",
  component: Accordion,
  render: (args) => (
    <Accordion {...args}>
      <AccordoinItem summary="Octapus Random Facts 🐙" itemKey="1">
        <AccordionDetails>
          Octopus arms have a mind of their own.
        </AccordionDetails>
        <AccordionDetails>
          They have (literally) a lot of heart.
        </AccordionDetails>
        <AccordionDetails>Males die after mating, too. </AccordionDetails>
      </AccordoinItem>
      <AccordoinItem summary="Dog Random Facts 🐶" itemKey="2">
        <AccordionDetails>
          Their sense of smell is at least 40x better than ours
        </AccordionDetails>
        <AccordionDetails>
          Some have such good noses they can sniff out medical problems
        </AccordionDetails>
      </AccordoinItem>
      <AccordoinItem summary="Cat Random Facts 😽" itemKey="3">
        <AccordionDetails>
          The oldest cat known, lived to the grand age of 36
        </AccordionDetails>
      </AccordoinItem>
    </Accordion>
  ),

  parameters: {
    layout: "centered",
  },
  // // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  // argTypes: {
  //   // backgroundColor: { control: "color" },
  // },
  // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: {},
} satisfies Meta<typeof Accordion>;

export default meta;

// type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {};
