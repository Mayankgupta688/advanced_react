import React from "react";

export default class LifeCycleEventsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Mayank",
            userAge: 32
        }
    }

    updateUserName() {
        this.setState({
            userName: "Mayank",
            userAge: 32
        })
    }

    updateUserNameOther() {
        this.setState({
            userName: "Anshul",
            userAge: 32
        })
    }

    shouldComponentUpdate(newProps,newState) {
        if(newState.userName === this.state.userName && newState.userAge === this.state.userAge) {
            return false
        }
        return true;
    }

    forceUpdater = () => {
        this.forceUpdate()
    }

    render() {

        return (
            <div>
                <h1>User Name is {this.state.userName}</h1>
                <h2>User Age is: {this.state.userAge}</h2>
                <input type="button" onClick={this.updateUserName.bind(this)} value="Update User" />
                <input type="button" onClick={this.updateUserNameOther.bind(this)} value="Update User Other" />
                <input type="button" onClick={() => this.forceUpdate()} value="Force Re-Render" />
            </div>
        )
    }

    componentDidUpdate() {
        debugger;
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        debugger;
    }


}