import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OnOfControlled from "./OnOfControlled";


export default {
    title: 'On-Of - not Controlled stories',
    component: OnOfControlled,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof OnOfControlled>;

export const On = () => <OnOfControlled setIsOn={(x) => x} isOn={true} />
export const Of = () => <OnOfControlled setIsOn={(x) => x} isOn={false} />

export const CountOnOf = () => {
    const [isOn, setIsOn] = useState(false)
    return (
        <OnOfControlled setIsOn={setIsOn} isOn={isOn} />
    )
}
