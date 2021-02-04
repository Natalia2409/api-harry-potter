import React from 'react';
import gryffindor from '../img/gryffindor.png';
import hufflepuff from '../img/hufflepuff.jpg';
import ravenclaw from '../img/ravenclaw.jpg';
import slytherin from '../img/slytherin.jpg';


export default function Card({ name, image, patronus, actor, house, gender }) {

    const patro = !patronus ? "don`t have" : patronus;

    const houses = house === "Gryffindor" ? gryffindor
                :  house === "Hufflepuff" ? hufflepuff
                :  house === "Ravenclaw" ? ravenclaw
                :  slytherin;

    const img = !image ? houses : image;

    const person = !actor ? gender : actor;

    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="card" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">{patro}</p>
                <p className="card-text card-bottom badge bg-primary text-wrap">{person}</p>
            </div>
        </div>
    )
}