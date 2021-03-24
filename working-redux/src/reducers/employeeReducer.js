export default function employees(state=[], action) {
    debugger;
    if(action.type === "ADD_LIST_EMPLOYEES") {
        return action.payload;
    }
    if(state.length === 0) {
        return [{"id":"1","createdAt":"2018-12-03T11:37:42.015Z","name":"Ms. Gaylord Streich","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jagan123/128.jpg"}]
    }
}

// var store = {
//     employees: [data.res],
//     customers: [],
//     flights: []
// }