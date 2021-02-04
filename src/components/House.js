import React from "react"; 
import Button from './Button';
import { useDispatch } from "react-redux";
import { gettingGryffindor, gettingHufflepuff, gettingRavenclaw, gettingSlytherin } from '../redux/actions';

export default function House() {
    const dispatch = useDispatch();

    const getGryffindor = () => {
        dispatch(gettingGryffindor())
    }

    const getHufflepuff = () => {
        dispatch(gettingHufflepuff())
    }

    const getRavenclaw = () => {
        dispatch(gettingRavenclaw())
    }

    const getSlytherin = () => {
        dispatch(gettingSlytherin())
    }
    
    return (
        <div className="houses">
            <Button getting={getGryffindor} path="/house/gryffindor" text="Gryffindor" />
            <Button getting={getHufflepuff} path="/house/hufflepuff" text="Hufflepaff" />
            <Button getting={getRavenclaw} path="/house/ravenclaw" text="Ravenclaw" />
            <Button getting={getSlytherin} path="/house/slytherin" text="Slytherin" />
            <div className="choose">
                <div>
                    &#8657;
                </div>
                <p>Choose one of the houses</p>
            </div>
        </div>
    )
}