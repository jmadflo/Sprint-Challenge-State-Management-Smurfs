import {UPDATE_FORM} from '../actions/mainActions'

export const initialState = {
    data: [],
    name: '',
    age: '',
    height: '',
}

export const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_FORM:
            return {
                ...state,
                name: action.payload.id === 'name' ? action.payload.value : state.name,
                age: action.payload.id === 'age' ? action.payload.value : state.age,
                height: action.payload.id === 'height' ? action.payload.value : state.height,
            }
        default:
            return state
    }
}