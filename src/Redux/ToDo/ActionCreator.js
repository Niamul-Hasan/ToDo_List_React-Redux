import { ADDED, AllCOMPLETED, CLEARCOMPLETED, COLORSELECTED, TOGOLED, DELETED } from './ActionTypes';

export const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText
    }
}

export const colorselected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId,
            color
        }
    }
}

export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId
    }
}

export const togoled = (todoId) => {
    return {
        type: TOGOLED,
        payload: todoId
    }
}

export const allcompleted = () => {
    return {
        type: AllCOMPLETED,
    }
}

export const clearcompleted = () => {
    return {
        type: CLEARCOMPLETED,
    }
}
