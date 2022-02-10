import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {

  constructor(props) {
    super()
  }

  render() {
    
    return (
      <div
        className="child"
        style={{ backgroundColor: this.props.color }}
        onClick={() => this.props.handleColorChange(getRandomColor()) }
      ></div>
    )
  }
}

export default Child
