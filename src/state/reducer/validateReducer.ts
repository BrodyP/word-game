import produce from "immer";
import { ActionType } from "../action-type";
import { Action, Message } from "../actions";

interface ValidateState {
  isLoading: boolean;
  isShowModal: boolean;
  message: Message | null;
}

const initialState: ValidateState = {
  message: null,
  isLoading: false,
  isShowModal: false,
};

export const validateReducer = produce(
  (state: ValidateState = initialState, action: Action) => {
    switch (action.type) {
      case ActionType.VALIDATE_START:
        state.isLoading = true;
        return state;

      case ActionType.VALIDATE_END:
        state.isLoading = false;
        return state;

      case ActionType.SET_VALIDATE_MESSAGE:
        state.message = action.payload.message;
        state.isShowModal = action.payload.isShowModal;
        return state;

      default:
        return state;
    }
  },
  initialState
);
