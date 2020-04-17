import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import "./App.css"
const App = () => {
  // Redux hooks
  const dispatch = useDispatch()
  const data = useSelector(state => state.data)
  
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
    </div>
  )
}

export default App
