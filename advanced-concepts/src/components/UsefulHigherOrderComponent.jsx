import React from "react";
import Axios from "axios";

class ComponentForManager extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    componentDidMount() {
        Axios.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            this.setState({
                employeeList: response.data
            })
        })
    }

    getEmployeeListLength = () => {
        alert(this.state.employeeList.length);
    }

    reRenderComponent = () => {
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <h1>This is The Employee List for Manager</h1>
                <input type="button" value="Get Employee List Length" onClick={this.getEmployeeListLength} /><br/><br/>
                <input type="button" value="Re-Render" onClick={this.reRenderComponent} />
                {this.state.employeeList.map((emp) => {
                    return (
                        <div>
                            <h1>Employee Name is: {emp.name}</h1>
                        </div>    
                    )
                })}
            </div>
        )
    }
}

class ComponentForHR extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    componentDidMount() {
        Axios.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            this.setState({
                employeeList: response.data
            })
        })
    }

    getEmployeeListLength = () => {
        alert(this.state.employeeList.length);
    }

    reRenderComponent = () => {
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <h1>This is The Employee List for HR</h1>
                <input type="button" value="Get Employee List Length" onClick={this.getEmployeeListLength} /><br/><br/>
                <input type="button" value="Re-Render" onClick={this.reRenderComponent} />
                {this.state.employeeList.map((emp) => {
                    return (
                        <div>
                            <h1>Employee Name is: {emp.name}</h1>
                            <h1>Employee Id is: {emp.id}</h1><hr/>
                        </div>    
                    )
                })}
            </div>
        )
    }
}

class ComponentForDirector extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    componentDidMount() {
        Axios.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            this.setState({
                employeeList: response.data
            })
        })
    }

    getEmployeeListLength = () => {
        alert(this.state.employeeList.length);
    }

    reRenderComponent = () => {
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <h1>This is The Employee List for Director</h1>
                <input type="button" value="Get Employee List Length" onClick={this.getEmployeeListLength} /><br/><br/>
                <input type="button" value="Re-Render" onClick={this.reRenderComponent} />
                {this.state.employeeList.map((emp) => {
                    return (
                        <div>
                            <h1>Employee Name is: {emp.name}</h1>
                            <h1>Employee Id is: {emp.id}</h1><hr/>
                        </div>    
                    )
                })}
            </div>
        )
    }
}

class ComponentForLead extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    componentDidMount() {
        Axios.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            this.setState({
                employeeList: response.data
            })
        })
    }

    getEmployeeListLength = () => {
        alert(this.state.employeeList.length);
    }

    reRenderComponent = () => {
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <h1>This is The Employee List for Lead</h1>
                <input type="button" value="Get Employee List Length" onClick={this.getEmployeeListLength} /><br/><br/>
                <input type="button" value="Re-Render" onClick={this.reRenderComponent} />
                {this.state.employeeList.map((emp) => {
                    return (
                        <div>
                            <h1>Employee Name is: {emp.name}</h1>
                            <h1>Employee Id is: {emp.id}</h1><hr/>
                        </div>    
                    )
                })}
            </div>
        )
    }
}

function getComponent(employeeType) {
    if(employeeType === "HR") {
        return ComponentForHR
    } else if(employeeType === "Director") {
        return ComponentForDirector
    } else if(employeeType === "Manager") {
        return ComponentForManager
    } else {
        return ComponentForLead
    }
}

var HigherOrderComponent = getComponent("Manager");

export default HigherOrderComponent;