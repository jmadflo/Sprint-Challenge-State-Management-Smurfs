import React from 'react'
import Smurf from './Smurf'

const SmurfList = ({data}) => {
    return(
        <div className='SmurfList'>
            {data.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)}
        </div>
    )
}

export default SmurfList