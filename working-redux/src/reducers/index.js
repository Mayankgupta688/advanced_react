import { combineReducers } from "redux";

import employees from "./employeeReducer";
import movies from "./moviesReducer";
import flights from "./flightReducer";

export var rootReducer = combineReducers({
    employeeList: employees,
    moviesList: movies,
    flightList: flights
})