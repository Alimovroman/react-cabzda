import React, {useState} from "react";

type PropsAccordion = {
    title: string
}

function Accordion({title}: PropsAccordion) {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }
        return (
            <>
                <AccordionTitle title={title} onClickHandler={onClickHandler}/>
                {!collapsed && <AccordionBody/>}
            </>
        )
}

type AccordionTitle = {
    title: string
    onClickHandler: () => void
}

function AccordionTitle({title, onClickHandler}: AccordionTitle) {
    return (
        <h3 onClick={onClickHandler}>{title}</h3>
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