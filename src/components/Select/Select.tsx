import React, {FC, useState} from 'react';
import style from './Select.module.css'

export type UserItemType = {
    title: string
    value: string
    age?: number
    city?: string
    gender?: string
}


type SelectPropsType = {
    users: UserItemType[]
    changeTitle: (value: any) => void
}

const SelectControlled: FC<SelectPropsType> = ({users, changeTitle}) => {
    const [mainTitle, setMainTitle] = useState('nope')
    const [isOpen, setIsOpen] = useState(false)
    const onChangeTitle = (title: string) => {
        // changeTitle('')
        setMainTitle(title)
        setIsOpen(false)
    }

    const onOpenSelect = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={style.root}>
            <div onClick={onOpenSelect} className={style.mainTitle}>
                {mainTitle}
                {isOpen ?  <span>&#9650;</span> : <span>&#9660;</span>}
            </div>
            {isOpen && <div className={style.itemsWrapped}>
                {users.map((el, i) =>
                <div key={i} onClick={() => onChangeTitle(el.title)} title={el.value} className={style.itemTitle}>
                    {el.title}
                </div>)}
            </div>
            }


        </div>
    );
};
const Select = React.memo(SelectControlled)

export default Select;