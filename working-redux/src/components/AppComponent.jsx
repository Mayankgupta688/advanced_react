import React from "react";
import Axios from "axios";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class AppComponent extends React.Component {

    addEmployee() {
        debugger;
        Axios.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((res) => {
            this.props.addEmployeesList(res.data)
        })  
    }

    render() {
        debugger;
        return (
            <div>
                <h1>List of Employees</h1>
                <input type="button" value="Get Data" onClick={this.addEmployee.bind(this)} />
                {this.props.employees.map((emp) => {
                    return (
                        <div>
                            <h2>Employee Name: {emp.name}</h2>
                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateFromStoreToComponentProps(store) {
    debugger;
    return {
        employees: store.employeeList
    }
}

var HigherOrderComponent = connect(mapStateFromStoreToComponentProps, actions)(AppComponent);

export default HigherOrderComponent;