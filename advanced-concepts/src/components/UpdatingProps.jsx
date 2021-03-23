import React from "react";

export default class UpdatingProps extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Mayank",
            userDetails: {
                age: 50
            }
        }
    }

    getUserAge = () => {
        alert(this.state.userDetails.age)
    }

    updateParent = () => {
        this.forceUpdate();
    }

    updateUserAge = () => {
        this.setState({
            userName: "Mayank",
            userDetails: {
                age: 40
            }
        })
    }

    render() {
        return (
            <div>
                <h1>User Name is {this.state.userName}</h1>
                <h2>Age: {this.state.userDetails.age}</h2>
                <input type="button" value="Get Age" onClick={this.getUserAge} />
                <input type="button" value="Update Age" onClick={this.updateUserAge} />
                <input type="button" value="Update Parent" onClick={this.updateParent} />
                <ChildComponent userName={this.state.userName} userDetails={this.state.userDetails}></ChildComponent>
            </div>
        )
    }
} 

function ChildComponent(props) {
    return <h2>User Name from Child Component: {props.userName} {props.userDetails.age}</h2>
}