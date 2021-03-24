export function addEmployeesList(empList) {
    debugger;
    return {
        type: "ADD_LIST_EMPLOYEES",
        payload: empList
    }
}

export function deleteEmployee(empId, location) {
    return {
        type: "DELETE_EMPLOYEE",
        payload: {
            empId: empId,
            location: location
        },
    }
}