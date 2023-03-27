import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../state";


export const udeTypedSelector: TypedUseSelectorHook<RootState> = useSelector;