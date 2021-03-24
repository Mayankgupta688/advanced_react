export default function flight(state=[], action) {
    if(action.type === "ADD_LIST_FLIGHTS") {
        return action.payload;
    }

    return state;
}

// var store = {
//     employees: [data.res],
//     customers: [],
//     flights: []
// }