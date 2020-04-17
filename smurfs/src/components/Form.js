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
            {/* only want to display submit put button when user has selected post to edit */}
            {props.isEditing ? <button className='submitPutButton' onClick={props.putData}>Submit Put</button> : 
                <div style={{display: 'inline'}}>
                    <button className='submitButtonGet' onClick={props.getData}>Submit Get</button>
                    <button className='submitButtonPost' onClick={props.postData}>Submit Post</button>
                </div>
            }
        </form>
    )
}

export default Form