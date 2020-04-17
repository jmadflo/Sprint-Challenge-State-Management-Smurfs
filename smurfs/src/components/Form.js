import React from 'react'

const Form = props => {
    return (
        <form>
            <label htmlFor='name'> Name: 
                <input name='name' id='name' value={props.name} onChange={props.updateForm}/>
            </label>
            <label htmlFor='age'> Age: 
                <input name='age' id='age' value={props.age} onChange={props.updateForm}/>
            </label>
            <label htmlFor='height'> Height: 
                <input name='height' id='height' value={props.height} onChange={props.updateForm}/>
            </label>
            <button className='submitButtonGet' >Submit Get</button>
            <button className='submitButtonPost' >Submit Post</button>
        </form>
    )
}

export default Form