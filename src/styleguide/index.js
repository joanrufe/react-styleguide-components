import React from "react";
import ReactDOM from "react-dom";
import {TextInput} from "../common-ux/"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
        this.textChanged = this.textChanged.bind(this)
    }

    textChanged (e) {
        this.setState({
            value: e.target.value
        })
    }
    
    render () {
        return (
            <div>
                <h1>My styleguide</h1>
                <TextInput label="Name" value={this.state.value} onChange={this.textChanged} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))