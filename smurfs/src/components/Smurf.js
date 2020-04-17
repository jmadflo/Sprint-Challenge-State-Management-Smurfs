import React from 'react'

const Smurf = ({smurf, enableEditing}) => {
    return (
        <div className='Smurf'>
            <p className='smurfName'>Name:{` ${smurf.name}`}</p>
            <p className='smurfAge'>Age:{` ${smurf.age}`}</p>
            <p className='smurfHeight'>Height:{` ${smurf.height}`}</p>
            <button onClick={() => enableEditing({name: smurf.name, age: smurf.age, height: smurf.height, id: smurf.id})}>Edit</button>
        </div>
    )
}

export default Smurf