import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

  let [collapsed,dispatch]=useReducer(reducer, {collapsed: false});

    return <div>
        <AccordionTitle title={props.titleValue}  onClick={()=>{dispatch({type: TOGGLE_COLLAPSED})}}/>
        {!collapsed  &&  <AccordionBody/> }
    </div>
}




function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={()=>props.onClick()}>-- {props.title} --</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

export default UncontrolledAccordion;
