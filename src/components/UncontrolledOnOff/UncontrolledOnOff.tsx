import React, {useState} from 'react';



function UncontrolledOnOff(props: OnOffType) {

    let [on, setOn] = useState(false)

    const onBut = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offBut = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const lightBut = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'

    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onBut} onClick={onClicked}>On</div>
            <div style={offBut} onClick={offClicked}>Off</div>
            <div style={lightBut}></div>
        </div>
    )
}

type OnOffType = {
    onChange: (on: boolean) => void
}

export default UncontrolledOnOff;