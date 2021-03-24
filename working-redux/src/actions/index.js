export function addEmployeesList(empList) {
    debugger;
    return {
        type: "ADD_LIST_EMPLOYEES",
        payload: empList
    }
}

export function deleteEmployee(empId) {
    return {
        type: "DELETE_EMPLOYEE",
        payload: empId
    }
}

export function deleteAllEmployee() {
    return {
        type: "DELETE_ALL_EMPLOYEE"
    }
}