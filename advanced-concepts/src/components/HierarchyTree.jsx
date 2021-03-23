import React from "react";

export default class GrandParents extends React.Component {
    constructor() {
        super();
        this.state = {
            villageName: "Meerut",
            nativeLanguage: "Hindi..",
            nativeCountry: "India",
            preferedLocation: "Delhi",
            noOfChildren: 3
        }
    }

    updateUserVillage = () => {
        this.setState({
            villageName: "XYZ"
        })
    }

    render() {
        return (
            <div>
                <h1>Data from Grand Parents....</h1>
                <h2>The Village Name is: {this.state.villageName}</h2><hr/>
                <Parents {...this.state}></Parents>

            </div>
        )
    }
}

function Parents(props) {
    debugger;
    return (
        <div>
            <h2>This is Parent Component...</h2><hr/>
            <ChildComponent {...props}></ChildComponent>
        </div>
    )
}

function ChildComponent(props) {
    debugger
    return (
        <div>
            <h3>This is the Child Component</h3><hr/>
            <GrandChildComponent {...props}></GrandChildComponent>
        </div>
    )
}

function GrandChildComponent(props) {
    debugger
    return (
        <div>
            <h3>This is the Grand Child Component</h3><hr/>
            <GrandGrandChildComponent {...props}></GrandGrandChildComponent>
        </div>
    )
}

function GrandGrandChildComponent(props) {
    debugger
    return (
        <div>
            <h3>This is the Grand Grand Child Component</h3>
            <h4>Native Village is: {props.villageName}</h4>
        </div>
    )
}