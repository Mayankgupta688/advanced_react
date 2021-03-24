export default function employees(state=[], action) {
    debugger;
    if(action.type === "ADD_LIST_EMPLOYEES") {
        return action.payload;
    }

    if(action.type === "DELETE_EMPLOYEE") {
        var filteredList = state.filter((emp) => {
            return emp.id !== action.payload;
        })

        return filteredList
    }

    if(action.type === "DELETE_ALL_EMPLOYEE") {
        return [];
    }

    return state;
}

// var store = {
//     employees: [data.res],
//     customers: [],
//     flights: []
// }