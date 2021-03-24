import React from "react";
import ReactDOM from "react-dom";
import HigherOrderComponent from "./components/AppComponent";
import HigherOrderComponentLength from "./components/EmployeeList";

import { createStore } from "redux";
import { Provider }  from "react-redux";

import { rootReducer } from "./reducers/index";

var applicationStore = createStore(rootReducer);

ReactDOM.render((
    <Provider store={applicationStore}>
        <HigherOrderComponentLength></HigherOrderComponentLength>
        <HigherOrderComponent></HigherOrderComponent>
        
    </Provider>
), document.getElementById("root"))