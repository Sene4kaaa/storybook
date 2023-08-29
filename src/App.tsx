import React, {useState} from 'react';
import './App.css';
import UncontrolledAccordion from "./components/UnconttroledAccordion/UncontrolledAccordion";
import {UnconttroledRating} from "./components/UnConttroledRating/UnconttroledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    const onClickCallback = () => {
        alert('hello')
    }

    return (
        <div className={'App'}>
            <div>
                <UncontrolledAccordion titleValue={'Menu'}/>
            </div>
            <hr/>
            <div>
                <UncontrolledAccordion titleValue={'Users'}/>
            </div>
            <hr/>
            <div>
                <UnconttroledRating/>
            </div>
            <hr/>
            <div>
                <Rating value={ratingValue}
                        setRatingValue={setRatingValue}/>
            </div>
            <hr/>
            <div>
                <Accordion titleValue={'Trening'}
                           collapsed={accordionCollapsed}
                           setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
                           items={[{title: 'Andrew', value: 1}, {title: 'Kate', value: 2}, {title: 'Matvei', value: 3}]}
                           onClick={onClickCallback}/>
            </div>
            <hr/>
            <div>
                {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            </div>
            <hr/>
            <div>
                <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            </div>
        </div>
    );
}

export default App;
