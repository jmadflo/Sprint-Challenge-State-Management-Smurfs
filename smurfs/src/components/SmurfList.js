import React from 'react'
import Smurf from './Smurf'

const SmurfList = ({data, enableEditing}) => {
    return(
        <div className='SmurfList'>
            {data.map(smurf => <Smurf key={smurf.id} smurf={smurf} enableEditing={enableEditing}/>)}
        </div>
    )
}

export default SmurfList