import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import Select from "./Select";

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const SelectTest = Template.bind({})
SelectTest.args = {
    users: [{title: 'Roma', value: '1'}, {title: 'Sasha', value: '2'}, {title: 'Masha', value: '3'}],
}




