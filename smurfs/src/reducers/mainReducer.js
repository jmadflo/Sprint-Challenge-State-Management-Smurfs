import { UPDATE_FORM, GET_DATA, POST_DATA, PUT_DATA, ENABLE_EDITING, DELETE_DATA } from '../actions/mainActions'

export const initialState = {
    data: [],
    name: '',
    age: '',
    height: '',
    isEditing: false,
    // will need id for put, and delete requests
    id: ''
}

export const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_FORM:
            return {
                ...state,
                name: action.payload.id === 'name' ? action.payload.value : state.name,
                age: action.payload.id === 'age' ? action.payload.value : state.age,
                height: action.payload.id === 'height' ? action.payload.value : state.height
            }
        case GET_DATA:
            return {
                ...state,
                data: action.payload
            }
        case POST_DATA:
            return {
                ...state,
                data: action.payload,
                // clear form after post
                name: '',
                age: '',
                height: ''
            }
        case PUT_DATA: 
            return {
                ...state,
                data: action.payload,
                // clear form after post
                name: '',
                age: '',
                height: '',
                isEditing: false,
                id: ''
            }
        case DELETE_DATA:
            return {
                ...state,
                data: action.payload,
            }
        case ENABLE_EDITING:
            return {
                ...state,
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height,
                id: action.payload.id,
                isEditing: true
            }
        default:
            return state
    }
}