import React, {useState} from 'react';

export type OnOffType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function OnOff(props: OnOffType) {


    const onBut = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offBut = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const lightBut = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'

    }

    return (
        <div>
            <div style={onBut} onClick={() => {
                props.onChange(true)
            }}>On
            </div>
            <div style={offBut} onClick={() => {
                props.onChange(false)
            }}>Off
            </div>
            <div style={lightBut}></div>
        </div>
    )
}

export default OnOff;