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

        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
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

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')


    console.log('Component rendered with' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Typed text : {text}

    </>
}

export const SetTimeoutExampleTwo = () => {

    const [text, setText] = useState('')


    console.log('Component rendered with' + text)

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return <>
        Typed text : {text}
    </>
}