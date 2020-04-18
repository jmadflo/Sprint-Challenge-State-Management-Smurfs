import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFormAction, getDataAction, postDataAction, putDataAction, deleteDataAction, enableEditingAction } from '../actions/mainActions'
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
  const id = useSelector(state => state.id)

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

  // change existing smurf in data
  const putData = event => {
    event.preventDefault()
    dispatch(putDataAction(name, age, height, id))
  }

  // delete existing smurf
  const deleteData = postToDeleteId => {
    dispatch(deleteDataAction(postToDeleteId))
  }

  // populate form with data to be edited and render put button
  const enableEditing = postToEdit => {
    dispatch(enableEditingAction(postToEdit))
  }
  
  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <img src='https://i.pinimg.com/474x/f6/e1/ff/f6e1ff3d69a481361e2eb9063291ef7d--starwars-jedi.jpg' alt='smurf Yoda'/>
      <Form updateForm={updateForm} getData={getData} postData={postData} putData={putData} name={name} age={age} height={height} isEditing={isEditing}/>
      <SmurfList data={data} enableEditing={enableEditing} deleteData={deleteData}/>
    </div>
  )
}

export default App
