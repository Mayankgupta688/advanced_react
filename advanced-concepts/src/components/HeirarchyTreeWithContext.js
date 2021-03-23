import React from "react";

const FamilyContext = React.createContext({});

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
            <FamilyContext.Provider value={{...this.state, updateUserVillage: this.updateUserVillage}}>
                <h1>Data from Grand Parents with Context....</h1>
                <h2>The Village Name is: {this.state.villageName}</h2><hr/>
                <Parents></Parents>
            </FamilyContext.Provider>
        )
    }
}

function Parents() {
    debugger;
    return (
        <div>
            <h2>This is Parent Component...</h2><hr/>
            <ChildComponent></ChildComponent>
        </div>
    )
}

function ChildComponent() {
    debugger
    return (
        <div>
            <h3>This is the Child Component</h3><hr/>
            <GrandChildComponent></GrandChildComponent>
        </div>
    )
}

function GrandChildComponent() {
    debugger
    return (
        <div>
            <h3>This is the Grand Child Component</h3><hr/>
            <GrandGrandChildComponent></GrandGrandChildComponent>
        </div>
    )
}

function GrandGrandChildComponent() {
    debugger
    return (
        <FamilyContext.Consumer>
            {(context => {
                return (    
                    <div>
                        <h3>This is the Grand Grand Child Component</h3>
                        <h4>Native Village is: {context.villageName}</h4>
                        <input type="button" onClick={context.updateUserVillage} value="Update Village" />
                    </div>
                )
            })}
            
        </FamilyContext.Consumer>
    )
}