import * as ActionType from "./../constants/ActionType";
export const actOnDelete = id => {
    return {
        type: ActionType.DELETE_USER,
        id
    }
}
export const actOnEdit = user => {
    return {
        type: ActionType.EDIT_USER,
        user
    }
}
export const actOnSaveUser = user =>{
    return {
        type: ActionType.SAVE_USER,
        user
    }
}
export const actOnFilter = keyWord =>{
    return {
        type: ActionType.FILTER,
        keyWord
    }
}
