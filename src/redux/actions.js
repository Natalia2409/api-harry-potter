import { GET_CHARACTERS, GET_GRYFFINDOR, GET_HOUSE, GET_HUFFLEPUFF, GET_RAVENCLAW, GET_SLYTHERIN, GET_STAFF, GET_STUDENTS } from './types';

export function gettingCharacters() {
    return async dispatch => {
        const responce = await fetch("http://hp-api.herokuapp.com/api/characters");
        const json = await responce.json();
        dispatch({ type: GET_CHARACTERS, payload: json })
    }
}

export function gettingStudents() {
    return async dispatch => {
        const responce = await fetch("http://hp-api.herokuapp.com/api/characters/students");
        const json = await responce.json();
        dispatch({ type: GET_STUDENTS, payload: json })
    }
}

export function gettingStaff() {
    return async dispatch => {
        const responce = await fetch("http://hp-api.herokuapp.com/api/characters/staff");
        const json = await responce.json();
        dispatch({ type: GET_STAFF, payload: json })
    }
}

export function gettingHouse() {
    return {
        type: GET_HOUSE
    }
}

export function gettingGryffindor() {
    return async dispatch => {
        const responce = await fetch("http://hp-api.herokuapp.com/api/characters/house/gryffindor");
        const json = await responce.json();
        dispatch({ type: GET_GRYFFINDOR, payload: json })
    }
}

export function gettingHufflepuff() {
    return async dispatch => {
        const responce = await fetch("http://hp-api.herokuapp.com/api/characters/house/hufflepuff");
        const json = await responce.json();
        dispatch({ type: GET_HUFFLEPUFF, payload: json })
    }
}

export function gettingRavenclaw() {
    return async dispatch => {
        const responce = await fetch("http://hp-api.herokuapp.com/api/characters/house/ravenclaw");
        const json = await responce.json();
        dispatch({ type: GET_RAVENCLAW, payload: json })
    }
}

export function gettingSlytherin() {
    return async dispatch => {
        const responce = await fetch("http://hp-api.herokuapp.com/api/characters/house/slytherin");
        const json = await responce.json();
        dispatch({ type: GET_SLYTHERIN, payload: json })
    }
}
