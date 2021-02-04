import React from 'react';
import Button from './Button';
import { useDispatch } from "react-redux";
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
            <Button getting={getCharacters} path="/characters" text="Characters" />
            <Button getting={getStudents} path="/students" text="Students" />
            <Button getting={getStaff} path="/staff" text="Staff" />
            <Button path="/house" text="House" />
        </div>
    )
}