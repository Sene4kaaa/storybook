import React, {useState} from 'react';
import {OnOff, OnOffType} from "./OnOff";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff,
};

const callback = action('on or off clicked')

const Template: Story<OnOffType> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
    on: true,
    onChange: callback
};

export const OffMode = Template.bind({});
OffMode.args = {
    on: false,
    onChange: callback
};

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <OnOff on={value} onChange={setValue}/>
}