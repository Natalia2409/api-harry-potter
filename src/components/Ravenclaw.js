import React from "react"; 
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import Button from "./Button";
import Card from './Card';

export default function Students() {
    const history = useHistory();

    const Back = () => {
        return history.goBack()
    }

    const ravenclaw = useSelector(state => state.house.house.ravenclaw);

    if (!ravenclaw) {
        return (
            <div>
            </div>
        )
    }
    return (
        <div className="cards">
            <div className="back">
                <Button getting={Back} text="Back"/>
            </div>
            {ravenclaw.map(char => <Card name={char.name} patronus={char.patronus} actor={char.actor} image={char.image} key={char.index}/>)}
        </div>
    )
}