import React from "react"; 
import { useSelector } from "react-redux";
import Card from './Card';

export default function Characters() {

    const characters = useSelector(state => state.characters.characters);

    if (!characters) {
        return (
            <div>
                Please, wait
            </div>
        )
    }
    return (
        <div className="cards">
            {characters.map(char => <Card 
                                        name={char.name} 
                                        image={char.image} 
                                        patronus={char.patronus} 
                                        actor={char.actor} 
                                        key={char.index}/>)}
        </div>
    )
}
 