import React, { Component } from 'react'
import './App.css'
import ChoosePowers from './Components/ChoosePowers'
//import ChooseCharacter from './Components/ChooseCharacter'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
       items:[],
       isLoaded: false,
    }
  }

  render() {
    return (
      <div className='App'>
        <ChoosePowers/>
      </div>
      
    )
  }
}

export default App

