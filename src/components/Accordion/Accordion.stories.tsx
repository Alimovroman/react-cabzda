import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Accordion>;


export const AccordionComponent = () => {

    return (
        <Accordion title={"Wats up Man"} />
    )
}
