import {createStore} from "redux";
import {catalogReducer} from "./reducer";

export const store = createStore(catalogReducer);