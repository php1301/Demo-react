import {combineReducers} from "redux";
import userReducer from "../reducers/userReducers";
const rootReducer = combineReducers ({
    userReducer//userReducer: userReducer
})
export default rootReducer;