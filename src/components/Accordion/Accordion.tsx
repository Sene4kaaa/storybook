import React from "react";

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle
            title={props.titleValue}
            setAccordionCollapsed={props.setAccordionCollapsed}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={props.setAccordionCollapsed}>-- {props.title} --</h3>
    )
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")

    return <ul>
        {props.items.map((i, index) => <li onClick={() => {
            props.onClick(i.value)
        }} key={index}>{i.title}</li>)}
    </ul>
}

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: () => void
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export default Accordion;
