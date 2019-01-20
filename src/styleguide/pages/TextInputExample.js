import React from 'react'
import {TextInput} from '../../common-ux/'

class TextInputExample extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 'Write something'
    }
    this.textChanged = this.textChanged.bind(this)
  }

  textChanged (evt) {
    this.setState({
      value: evt.target.value
    })
  }

  render() {
    return (
      <div>
        <TextInput label="Name" value={this.state.value} onChange={this.textChanged} />
        <p>Text input value {this.state.value}</p>
      </div>
    )
  }
}

export default TextInputExample
