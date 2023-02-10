import React, {useState} from "react";

export type PropsAccordion = {

    /**
     * name for Accardion component
     */
    title: string
    backgroundColor?: string
}

function Accordion({title,backgroundColor}: PropsAccordion) {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }
        return (
            <>
                <AccordionTitle backgroundColor={backgroundColor} title={title} onClickHandler={onClickHandler}/>
                {!collapsed && <AccordionBody/>}
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

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>2</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
    )
}

export default Accordion;