import React from "react";

export default class PureComponentImplementation extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Mayank", 
            userArray: [1, 2, 3, 4]
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.updateName();
        }, 1000)
    }

    updateName = () => {
        var data = [...this.state.userArray];
        data.push(5)
        this.setState({
            userName: "Mayank",
            userArray: data
        });
    }

    render() {
        debugger;
        return (
            <div>
                <h1>Welcome {this.state.userName}</h1>
                {this.state.userArray.map((val) => {
                    return <label style={{"marginRight": "10px"}}>{val}</label>
                })}
                <SampleComponent {...this.state}></SampleComponent>
            </div>
        )
    }
}


class SampleComponent extends React.PureComponent {
    render() {
        debugger;
        return (
            <div>
                <h1>User Name from the Child is {this.props.userName}</h1>
                {this.props.userArray.map((val) => {
                    return <label style={{"marginRight": "10px"}}>{val}</label>
                })}
            </div>
            
        )
    }
}