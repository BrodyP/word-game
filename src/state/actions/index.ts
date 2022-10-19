import { ActionType } from "../action-type";

export type Message = "no_meaning" | "duplicate" | "exceed" | "english_only";

export interface Submit {
  type: ActionType.SUBMIT;
  payload: string;
}

export interface SetBox {
  type: ActionType.SET_BOX;
  payload: Array<string>;
}

export interface UpdateBox {
  type: ActionType.UPDATE_BOX;
  payload: {
    id: string;
    letter: string;
  };
}
export interface CreateBox {
  type: ActionType.CREATE_BOX;
}

export interface TranslateStart {
  type: ActionType.VALIDATE_START;
  payload: {
    isLoading: boolean;
  };
}

export interface TranslateEnd {
  type: ActionType.VALIDATE_END;
  payload: {
    isLoading: boolean;
  };
}

export interface SetValidateMessage {
  type: ActionType.SET_VALIDATE_MESSAGE;
  payload: { message: Message | null; isShowModal: boolean };
}

export type Action =
  | Submit
  | SetBox
  | CreateBox
  | TranslateStart
  | TranslateEnd
  | SetValidateMessage
  | UpdateBox;
