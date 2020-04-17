import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFormAction, getDataAction, postDataAction } from '../actions/mainActions'
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

  // form methods
  const updateForm = event => {
    dispatch(updateFormAction({id: event.target.name, value: event.target.value}))
  }

  const getData = event => {
    event.preventDefault()
    dispatch(getDataAction())
  }

  const postData = event => {
    event.preventDefault()
    dispatch(postDataAction(name, age, height))
  }
  
  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <Form updateForm={updateForm} getData={getData} postData={postData} name={name} age={age} height={height}/>
      <SmurfList data={data}/>
    </div>
  )
}

export default App
