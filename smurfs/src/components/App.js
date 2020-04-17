import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import Form from './Form'
import "./App.css"
const App = () => {
  
  // Redux hooks
  const dispatch = useDispatch()
  const data = useSelector(state => state.data)
  const name = useSelector(state => state.name)
  const age = useSelector(state => state.age)
  const height = useSelector(state => state.height)
  
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <Form />
    </div>
  )
}

export default App
