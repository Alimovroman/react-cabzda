import React from "react";

type PropsAccordion = {
    title: string
    collapsed: boolean
}

function Accordion({title, collapsed}: PropsAccordion) {
        return (
            <>
                <AccordionTitle title={title}/>
                {!collapsed && <AccordionBody/>}
            </>
        )
}

type AccordionTitle = {
    title: string
}

function AccordionTitle({title}: AccordionTitle) {
    return (
        <h3>{title}</h3>
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