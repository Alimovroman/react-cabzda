import React, {useReducer, useState} from "react";
import {reducer, stateAccordion, TOGGLE_COLLAPSED} from "./reducer";

export type ItemType = {
    title: string
    value: any
}

export type PropsAccordion = {
    title: string
    backgroundColor?: string
    items: ItemType[]
    onClick: (value: any,) => void
}


function Accordion({title, backgroundColor, items, onClick}: PropsAccordion) {
    // const [collapsed, setCollapsed] = useState<boolean>(true)
    const [state, dispatch] = useReducer(reducer, {collapsed: true})
    const onClickHandler = () => {
        // setCollapsed(!collapsed)
        dispatch({type: TOGGLE_COLLAPSED})
    }
    return (
        <>
            <AccordionTitle backgroundColor={backgroundColor} title={title} onClickHandler={onClickHandler}/>
            {!state.collapsed && <AccordionBody items={items} onClick={onClick}/>}
        </>
    )
}

type AccordionTitle = {
    title: string
    onClickHandler: () => void
    backgroundColor?: string
}

function AccordionTitle({title, onClickHandler, backgroundColor}: AccordionTitle) {
    return (
        <h3 style={{backgroundColor}} onClick={onClickHandler}>{title}</h3>
    )
}

type AccordionBodyProps = {
    items: ItemType[]
    onClick: (value: any,) => void
}

function AccordionBody({items, onClick}: AccordionBodyProps) {
    return (
        <div>
            <ul>
                {items.map((el, i) => <li key={i} onClick={() => onClick(el.value)}>{el.title}</li>)}
            </ul>
        </div>
    )
}

export default Accordion;