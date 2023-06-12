import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";

import {Story} from "@storybook/react";


export default {
    title: 'Accordion',
    component: Accordion,
};


const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;


export const MenuCollapsed = Template.bind({});
MenuCollapsed.args = {
    titleValue: 'Menu',
    collapsed: true,

};

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return < Accordion titleValue={'Users'} collapsed={value} setAccordionCollapsed={() => setValue(!value)}
                       items={[{title: 'Andrew', value: 1}, {title: 'Kate', value: 2}, {title: 'Matvei', value: 3}]}
                       onClick={(id) => {
                           alert(`user with ID ${id} happy`)
                       }
                       }/>
}