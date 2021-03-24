export default function movies(state=[], action) {
    if(action.type === "ADD_LIST_MOVIES") {
        return action.payload;
    }

    return state;
}

// var store = {
//     employees: [data.res],
//     customers: [],
//     flights: []
// }