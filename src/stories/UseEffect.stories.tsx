import {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>

    </>
}

//useEffect начинает работать только после отрисовки компоненты

export const SetTimeoutExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {

        setTimeout(() => {
            console.log('setTimeOut')
            document.title = counter.toString()
        }, 1000)
    }, [])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>

    </>
}

export const SetIntervalExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetIntervalExample')

    useEffect(() => {

        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, counter : {counter} - fake : {fake}
    </>
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)


    console.log('Component rendered with' + counter)

    useEffect(() => {
        console.log('Effect occurred' + counter)

        return () => {
            console.log('Reset Effect' + counter)
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        Hello, counter : {counter}
        <button onClick={increase}>+</button>
    </>
}