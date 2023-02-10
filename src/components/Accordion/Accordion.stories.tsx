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
    title: "Wats up Man Bro",
    items: [{title: '1', value: 1},{title: '2', value: 2}, {title: '2', value: 3}]
}

// export const AccordionComponent = () => {
//
//     return (
//         <Accordion title={"Wats up Man"} />
//     )
// }
