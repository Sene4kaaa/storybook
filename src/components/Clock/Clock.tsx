import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: 'analog' | 'digital'
}


export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('TICK')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    let viev
    switch (props.mode) {
        case "analog":
            viev = <AnalogClockView date={date}/>
            break;
        case "digital":
        default:
            viev = <DigitalClockView date={date}/>
    }


    return <div>
        {viev}
    </div>
}

export type ClockViewPropsType = {
    date: Date
}


