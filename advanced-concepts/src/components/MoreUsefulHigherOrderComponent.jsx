import React from "react";
import Axios from "axios";

function ComponentForManager(props) {
    return (
        <div>
            <h1>This is The Employee List for Manager</h1>
            {props.employeeList.map((emp) => {
                return (
                    <div>
                        <h1>Employee Name is: {emp.name}</h1>
                    </div>    
                )
            })}
        </div>
    )
}

function ComponentForHR(props) {
    return (
        <div>
            <h1>This is The Employee List for HR</h1>
            {props.employeeList.map((emp) => {
                return (
                    <div>
                        <h1>Employee Name is: {emp.name}</h1>
                        <h1>Employee Id is: {emp.id}</h1>
                        <h1>Employee Created at: {emp.createdAt}</h1><hr/>
                    </div>    
                )
            })}
        </div>
    )
}

function ComponentForDirector(props) {
    return (
        <div>
            <h1>This is The Employee List for Director</h1>
            {props.employeeList.map((emp) => {
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

function ComponentForLead(props) {
    return (
        <div>
            <h1>This is The Employee List for Lead</h1>
            {props.employeeList.map((emp) => {
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

function getComponent(WrapperComponet) {
    return class extends React.Component {
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
                    <input type="button" value="Get Employee List Length" onClick={this.getEmployeeListLength} /><br/><br/>
                    <input type="button" value="Re-Render" onClick={this.reRenderComponent} />
                    <WrapperComponet employeeList={this.state.employeeList}></WrapperComponet>
                </div>
            )
        }
    }
}

var HigherOrderComponent = getComponent(ComponentForHR);

export default HigherOrderComponent;