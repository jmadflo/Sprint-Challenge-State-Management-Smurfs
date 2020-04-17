import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFormAction, getDataAction, postDataAction, enableEditingAction } from '../actions/mainActions'
import Form from './Form'
import SmurfList from './SmurfList'
import './App.css'
const App = () => {

  // Redux hooks
  const dispatch = useDispatch()
  const data = useSelector(state => state.data)
  const name = useSelector(state => state.name)
  const age = useSelector(state => state.age)
  const height = useSelector(state => state.height)
  const isEditing = useSelector(state => state.isEditing)

  // form methods
  const updateForm = event => {
    dispatch(updateFormAction({id: event.target.name, value: event.target.value}))
  }

  // get request needs no params because all we do is receive existing data
  const getData = event => {
    event.preventDefault()
    dispatch(getDataAction())
  }

  // post data to our local Smurf API
  const postData = event => {
    event.preventDefault()
    dispatch(postDataAction(name, age, height))
  }

  // populate form with data to be edited and render put button
  const enableEditing = (postToEdit) => {
    dispatch(enableEditingAction(postToEdit))
  }
  
  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <Form updateForm={updateForm} getData={getData} postData={postData} name={name} age={age} height={height} isEditing={isEditing}/>
      <SmurfList data={data} enableEditing={enableEditing}/>
    </div>
  )
}

export default App
