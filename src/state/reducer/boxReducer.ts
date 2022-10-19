import produce from "immer";
import { ActionType } from "../action-type";
import { Action } from "../actions";
import { Letters } from "../word";

interface BoxState {
  history: Array<string>;
  order: Array<string>;
  letters: Letters;
}

const initialState: BoxState = {
  history: [],
  order: [],
  letters: {},
};

export const boxReducer = produce(
  (state: BoxState = initialState, action: Action): BoxState => {
    switch (action.type) {
      case ActionType.CREATE_BOX:
        const id = randomId();
        state.order.push(id);
        state.letters[id] = "";
        return state;

      case ActionType.SET_BOX:
        action.payload.forEach((v, i) => {
          state.letters[state.order[i]] = v;
        });
        return state;

      case ActionType.UPDATE_BOX:
        state.letters[action.payload.id] = action.payload.letter;
        return state;

      case ActionType.SUBMIT:
        state.history.push(action.payload);
        return state;

      default:
        return state;
    }
  },
  initialState
);

const randomId = () => {
  return Math.random().toString(36).substring(2, 5);
};
