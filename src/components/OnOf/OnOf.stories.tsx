import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OnOf from "./OnOf";



export default {
    title: 'On-Of stories',
    component: OnOf,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof OnOf>;

export const On = () => {
    const [isOn, setIsOn] = useState(true)
    return (
        <OnOf setIsOn={setIsOn} />
    )
}



