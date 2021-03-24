import React from "react";
import Axios from "axios";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class EmployeeList extends React.Component {

    render() {
        debugger;
        return (
            <div>
                <h2>Length of Employees in Database: {this.props.employees.length}</h2>
            </div>
        )
    }
}

function mapStateFromStoreToComponentProps(store) {
    return {
        employees: store.employeeList
    }
}

var HigherOrderComponentLength = connect(mapStateFromStoreToComponentProps, actions)(EmployeeList);

export default HigherOrderComponentLength;