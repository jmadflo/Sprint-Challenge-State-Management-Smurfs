import React from 'react'

const Smurf = ({smurf, enableEditing, deleteData}) => {
    return (
        <div className='Smurf'>
            <p className='smurfName'>Name:{` ${smurf.name}`}</p>
            <p className='smurfAge'>Age:{` ${smurf.age}`}</p>
            <p className='smurfHeight'>Height:{` ${smurf.height}`}</p>
            <button className='editButton' onClick={() => enableEditing({name: smurf.name, age: smurf.age, height: smurf.height, id: smurf.id})}>Edit</button>
            <button className="deleteButton" onClick={() => deleteData(smurf.id)}>Delete</button>
        </div>
    )
}

export default Smurf