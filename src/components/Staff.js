import React from "react"; 
import { useSelector } from "react-redux";
import Card from './Card';

export default function Staff() {

    const staff = useSelector(state => state.staff.staff);

    if (!staff) {
        return (
            <div>
                Please, wait
            </div>
        )
    }
    return (
        <div className="cards">
            {staff.map(char => <Card name={char.name} patronus={char.patronus} gender={char.gender} image={char.image} key={char.index}/>)}
        </div>
    )
}