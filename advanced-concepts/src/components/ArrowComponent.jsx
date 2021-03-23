import React from "react";

export default class ArrowComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank Gupta"
        }
        this.updateName = this.updateName.bind(this);
    }

    updateName() {
        debugger;
        this.setState({
            name: "Anshul Gupta"
        })
    }

    componentDidMount() {
        debugger;
    }

    componentDidUpdate() {
        debugger;
    }

    render() {
        console.log(this);
        return (
            <div>
                <h1>User Name is {this.state.name}</h1>
                <input type="button" onClick={this.updateName} value="Update Name" />
            </div>
        )
    }
}