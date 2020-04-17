import React from 'react'

const Form = props => {
    return (
        <form>
            <label htmlFor='name'>
                <input name='name' id='name' value={props.name}/>
            </label>
            <label htmlFor='age'>
                <input name='age' id='age' value={props.age}/>
            </label>
            <label htmlFor='height'>
                <input name='height' id='height' value={props.height}/>
            </label>
            <button className='submitButtonGet' >Submit Get</button>
            <button className='submitButtonPost' >Submit Post</button>
        </form>
    )
}

export default Form