import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import Accordion, {PropsAccordion} from "./Accordion";
import {Button} from "../../stories/Button";


export default {
    title: 'Accordion stories',
    component: Accordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Accordion>;

const Template: Story<PropsAccordion> = (args) => <Accordion {...args} />;

export const AccordionComponent = Template.bind({});

AccordionComponent.args = {
    title: "Wats up Man Bro"
}

// export const AccordionComponent = () => {
//
//     return (
//         <Accordion title={"Wats up Man"} />
//     )
// }
