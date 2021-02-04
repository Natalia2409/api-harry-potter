import React from "react"; 
import { useSelector } from "react-redux";
import Card from './Card';

export default function Students() {

    const students = useSelector(state => state.students.students);

    if (!students) {
        return (
            <div>
                Please, wait
            </div>
        )
    }
    return (
        <div className="cards">
            {students.map(char => <Card name={char.name} patronus={char.patronus} actor={char.actor} house={char.house} key={char.index}/>)}
        </div>
    )
}