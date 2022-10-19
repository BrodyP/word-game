import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state/reducer";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
