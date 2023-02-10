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
    items: [{title: 'Roma', value: '1'}, {title: 'Sasha', value: '2'}, {title: 'Masha', value: '3'}],
    // changeTitle: (e) => console.log(e.currentTarget.title)
}

// export const ControlledSelect = () => {
//     const [value, setValue] = useState<string | undefined>('1')
//     const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
//         setValue(e.currentTarget.value)
//     }
//     return (
//         <select value={value} onChange={changeSelect}>
//             <option>non</option>
//             <option value={'1'}>bon</option>
//             <option value={'2'}>bon bon</option>
//             <option value={'3'}>pilim bon bon</option>
//         </select>
//     )
//
// }


