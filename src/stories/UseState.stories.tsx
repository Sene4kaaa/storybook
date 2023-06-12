import {useState} from "react";

export default {
    title: 'useState demo'
}

function generateData(){
    //difficult counting
    console.log('generateData')
    return 1
}

export const Example1 = () => {
    console.log('Example1')

    //const initValue = useMemo(generateData, [] )
    const [counter, setCounter] = useState(generateData) // запомнит сам useState результат сложного вычисления из generateData и заново не будет перезаускать

    const change = (state:number) => { //если изменения одно и тоже (стабильно) то в setCounter можно положить функцию
        return state + 1
    }

    return <>
    <button onClick={()=> setCounter(change)}>+</button>
        {counter}
    </>
}