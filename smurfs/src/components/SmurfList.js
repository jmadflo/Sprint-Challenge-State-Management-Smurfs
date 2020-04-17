import React from 'react'
import Smurf from './Smurf'

const SmurfList = ({data, enableEditing, deleteData}) => {
    return(
        <div className='SmurfList'>
            {data.map(smurf => <Smurf key={smurf.id} smurf={smurf} enableEditing={enableEditing} deleteData={deleteData}/>)}
        </div>
    )
}

export default SmurfList