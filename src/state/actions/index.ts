import {ActionType} from "../action-types";
import {ActionCreatorsMapObject} from "redux";

export type Action =
    SearchRepositoriesStateAction |
    SearchRepositoriesStateSuccessAction |
    SearchRepositoriesStateErrorAction

interface SearchRepositoriesStateAction {
    type: ActionType.SEARCH_REPOSITORIES
}

interface SearchRepositoriesStateSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS
    payload: string[]
}

interface SearchRepositoriesStateErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR
    payload: string
}