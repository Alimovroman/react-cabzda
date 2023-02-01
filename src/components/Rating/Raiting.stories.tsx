import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Rating from "./Rating";


export default {
    title: 'Rating',
    component: Rating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

export const EmptyStar = () => <Rating value={0} setValue={(id: number) => console.log(id) } />
export const Rating1 = () => <Rating value={1} setValue={(id: number) => console.log(id) } />
export const Rating2 = () => <Rating value={2} setValue={(id: number) => console.log(id) } />
export const ChangeRating = () => {
    const [rating, setRating] = useState(5)
    return (
        <>
        <Rating value={rating} setValue={setRating} />

        </>
        )
}

