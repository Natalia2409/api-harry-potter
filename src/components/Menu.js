import React from 'react';
import Button from './Button';
import { useDispatch } from "react-redux";
import Fade from 'react-reveal/Fade';
import { gettingCharacters, gettingStudents, gettingStaff } from '../redux/actions';

export default function Menu() {
    const dispatch = useDispatch();

    const getCharacters = () => {
        dispatch(gettingCharacters())
    }

    const getStudents = () => {
        dispatch(gettingStudents())
    }

    const getStaff = () => {
        dispatch(gettingStaff())
    }

    return (
        <div className="menu">
            <Fade top><Button getting={getCharacters} path="/characters" text="Characters" /></Fade>
            <Fade top><Button getting={getStudents} path="/students" text="Students" /></Fade>
            <Fade top><Button getting={getStaff} path="/staff" text="Staff" /></Fade>
            <Fade top><Button path="/house" text="House" /></Fade>
        </div>
    )
}