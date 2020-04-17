import axios from 'axios'

export const UPDATE_FORM = 'update_form'
export const GET_DATA = 'get_data'
export const POST_DATA = 'post_data'

export const updateFormAction = (update) => {
    return { type: UPDATE_FORM, payload: update }
}

export const getDataAction = () => dispatch => {
    axios.get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response.data)
            dispatch({type: GET_DATA, payload: response.data})
        })
        .catch(error => alert(error))
}

export const postDataAction = (name, age, height) => dispatch => {
    axios.post('http://localhost:3333/smurfs', { name: name, age: age, height: height})
        .then(response => {
            console.log(response.data)
            dispatch({type: POST_DATA, payload: response.data})
        })
        .catch(error => alert(error))
}