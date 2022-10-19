import { combineReducers } from "redux";
import { boxReducer } from "./boxReducer";
import { validateReducer } from "./validateReducer";

const reducers = combineReducers({
  box: boxReducer,
  validate: validateReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
