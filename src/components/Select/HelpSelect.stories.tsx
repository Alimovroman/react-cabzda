import Select, {UserItemType} from "./Select";
import {ComponentMeta} from "@storybook/react";
import React, {FC, useMemo, useState} from "react";

export default {
    title: 'HelpSelectWithMemo',
    component: Select
} as ComponentMeta<typeof Select>;

const UsersSelect = (props: {users: UserItemType[]}) => {
    console.log("Render")
    return (
        <div style={{marginLeft: '10px'}}>
            <Select users={props.users} changeTitle={() => 'x'} />
        </div>
    )
}
const UsersSelectWithMemo = React.memo(UsersSelect)
export const SelectHelp = () => {
    const [users, setUsers] = useState<UserItemType[]>([
        {title: 'Roma', value: '1', age: 32, city: 'Rzn', gender: 'Male'},
        {title: 'Sasha', value: '2', age: 32, city: 'Rzn', gender: 'Male'},
        {title: 'Masha', value: '3', age: 29, city: 'Msk', gender: 'Female'},
        {title: 'Artem', value: '4', age: 29, city: 'Msk', gender: 'Male'},
        {title: 'Tanya', value: '5', age: 27, city: 'Rzn', gender: 'Female'},
        {title: 'Vika', value: '6', age: 27, city: 'Rzn', gender: 'Female'}
    ])
    const [isMale, setIsMale] = useState(true)
    const resultMale = users.filter(u => isMale ? u.gender === 'Male' : u.gender === 'Female')
    const resultAge = useMemo(() => {
        return users.filter(u => u.age! > 28)
    }, [users])
    const resultCity = useMemo(() => {
        return users.filter(u => u.city === 'Rzn')
    }, [users])

    return (
        <div style={{display: 'flex'}}>
        <UsersSelectWithMemo users={resultCity} />
        <UsersSelectWithMemo users={resultAge} />
        <UsersSelectWithMemo users={resultMale} />
            <button onClick={() => setIsMale(!isMale) }>Change Gendor</button>
        {/*<UsersSelect users={users} />*/}
        </div>
    )
}
