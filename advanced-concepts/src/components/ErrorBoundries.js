import React from "react";
import Axios from "axios";

export default class ErrorBoundries extends React.Component {
    counterInterval = null;
    constructor() {
        super();
        this.state = {
            hasError: false, 
            counter: 0
        }
    }

    componentDidMount() {
        this.counterInterval = setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)
    }

    componentDidCatch(error) {
        this.setState({
            hasError: true
        })
    }

    static getDerivedStateFromError(error) {
        debugger;
        return {
            hasError: true
        }
    }

    stopTimer() {
        clearInterval(this.counterInterval);
    }

    render() {
        if(this.state.hasError === true) {
            return <h1>The Component Resulted In Error Condition</h1>
        } else {
            return (
                <div>   
                    <div>Current Counter: {this.state.counter}</div>
                    <input type="button" onClick={this.stopTimer.bind(this)} value="Stop Timer" />
                    <SampleComponent></SampleComponent>
                </div>
            )
        }
    }
}


class SampleComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Mayank",
            internalError: false
        }

        this.updateUserName = this.updateUserName.bind(this);
    }

    updateUserName() {
        this.setState({
            userName: "Anshul"
        })
    }

    componentDidMount() {
        Axios.get("https://15c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((data) => {
            debugger
            console.dir(data)
        }, (error) => {
            this.setState({
                internalError: false
            })
        })
    }

    render() {

        if(this.state.internalError === true) {
            throw new Error("Error Rendering Data")
        }

        return (
            <div>
                <h1>Hello {this.state.userName}</h1>
                <input type="button" value="Update Name" onClick={this.updateUserName} />
            </div>
        )
    }
}