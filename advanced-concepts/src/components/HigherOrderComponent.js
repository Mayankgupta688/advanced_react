import React from "react";

function HelloWorldComponent() {
    return <h1>Hello World....</h1>
}

function higherOrderFunction(InputParameterComponent) {
    function OtherComponent() {
        return (
            <div>
                <h2>This is Other Component</h2>
                <InputParameterComponent></InputParameterComponent>
            </div>
        )
    }

    return OtherComponent;
}

debugger;
var MyHigherOrderComponent = higherOrderFunction(HelloWorldComponent);

export default MyHigherOrderComponent;