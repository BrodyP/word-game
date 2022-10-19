import { Dispatch } from "react";
import { translate } from "../../utils/translate/wordValidate";
import { ActionType } from "../action-type";
import { Action, Message, SetBox, UpdateBox } from "../actions";
import { Letters } from "../word";

export const setBox = (word: Array<string>): SetBox => {
  return {
    type: ActionType.SET_BOX,
    payload: word,
  };
};

export const createBox = () => {
  return {
    type: ActionType.CREATE_BOX,
  };
};

export const updateBox = (id: string, letter: string): UpdateBox => {
  return {
    type: ActionType.UPDATE_BOX,
    payload: {
      id,
      letter,
    },
  };
};

export const submit = (
  history: Array<string>,
  order: Array<string>,
  letters: Letters,
  changeNumber: number
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.VALIDATE_START,
      payload: {
        isLoading: true,
      },
    });

    const word = order.map((id) => letters[id]).join("");

    const english = /^[A-Za-z]*$/;

    if (!english.test(word)) {
      setValidateMessage("english_only", dispatch);
      setBox(Array.from(word));
      return;
    }

    if (history.includes(word)) {
      setValidateMessage("duplicate", dispatch);
      setBox(Array.from(word));
      return;
    }

    if (history.length > 0) {
      const letterChangeCount = Array.from(history[history.length - 1])
        .map((letter) => word.includes(letter))
        .filter((result) => result === false).length;

      if (letterChangeCount > changeNumber) {
        setValidateMessage("exceed", dispatch);
        setBox(Array.from(word));
        return;
      }
    }

    const meaning = await translate(word);
    if (!meaning) {
      setValidateMessage("no_meaning", dispatch);
      setBox(Array.from(word));
      return;
    }
    dispatch({
      type: ActionType.SUBMIT,
      payload: word,
    });
  };
};

const setValidateMessage = (
  message: Message | null,
  dispatch: Dispatch<Action>
) => {
  dispatch({
    type: ActionType.VALIDATE_END,
    payload: {
      isLoading: false,
    },
  });

  dispatch({
    type: ActionType.SET_VALIDATE_MESSAGE,
    payload: { message, isShowModal: true },
  });

  const timeId = setTimeout(() => {
    dispatch({
      type: ActionType.SET_VALIDATE_MESSAGE,
      payload: { message: null, isShowModal: false },
    });
  }, 2000);

  return () => {
    clearTimeout(timeId);
  };
};

export const setNumberLetterBox = (numberBox: number) => {
  return (dispatch: Dispatch<Action>) => {
    for (let i = 0; i < numberBox; i++) {
      dispatch({
        type: ActionType.CREATE_BOX,
      });
    }
  };
};
