import { createStore } from "redux";
import AppReducer from "./AppReducers/AppReducer";

export const store=createStore(AppReducer)