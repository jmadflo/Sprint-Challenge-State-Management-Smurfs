import React from 'react'

const Smurf = ({smurf}) => {
    return (
        <div className='Smurf'>
            <p className='smurfName'>Name:{` ${smurf.name}`}</p>
            <p className='smurfAge'>Age:{` ${smurf.age}`}</p>
            <p className='smurfHeight'>Height:{` ${smurf.height}`}</p>
        </div>
    )
}

export default Smurf