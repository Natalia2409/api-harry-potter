import { combineReducers } from "redux";
import { GET_CHARACTERS, GET_STAFF, GET_STUDENTS, GET_HOUSE, GET_GRYFFINDOR, GET_HUFFLEPUFF, GET_RAVENCLAW, GET_SLYTHERIN } from "./types";

const initialStore = {
    characters: [],
    students: [],
    staff: [],
    house: {
        gryffindor: [],
        hufflepuff: [],
        ravenclaw: [],
        slytherin: []
    }
}

export const rootReducer = combineReducers({
    characters: gettingCharacters,
    students: gettingCharacters,
    staff: gettingCharacters,
    house: gettingCharacters
})

export function gettingCharacters(state = initialStore, action) {
    switch(action.type) {
        case GET_CHARACTERS:
            return { ...state, characters: action.payload}
        case GET_STUDENTS:
            return { ...state, students: action.payload}
        case GET_STAFF:
            return { ...state, staff: action.payload}
        case GET_HOUSE:
            return state
        case GET_GRYFFINDOR: 
            return { 
                ...state,
                house: {
                    ...state.gryffindor,
                    gryffindor: action.payload
                }
            }
        case GET_HUFFLEPUFF: 
            return { 
                ...state,
                house: {
                    ...state.hufflepuff,
                    hufflepuff: action.payload
                }
            }
        case GET_RAVENCLAW: 
            return { 
                ...state,
                house: {
                    ...state.ravenclaw,
                    ravenclaw: action.payload
                }
            }
        case GET_SLYTHERIN: 
            return { 
                ...state,
                house: {
                    ...state.slytherin,
                    slytherin: action.payload
                }
            }
        default: return state
    }
}
