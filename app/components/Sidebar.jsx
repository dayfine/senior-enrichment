import React, { Component } from React
import store from '../store'

export default class Sidebar extends Component {
  constructor(){
    super()
    this.state = store.getState()
  }

  componentDidMount(){

  }

  componentWillUnmount(){

  }

  render(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
}
