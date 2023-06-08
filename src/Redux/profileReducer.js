import {profileAPI} from "../api/apiLocal";

const SET_TABLE = 'SET_TABLE';
const CHANGE_TABLES_VALUE = 'CHANGE_TABLES_VALUE';
const ADD_NEW_USER = 'ADD_NEW_USER';
const DELETE_USER = 'DELETE_USER';




let initialState = {
    table: [],
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_TABLE:
            return {
                ...state, table: action.table
            }

        case CHANGE_TABLES_VALUE:

            let field = action.target.name

            return {
                ...state,
                table: state.table.map(
                    user => user.id.toString() === action.target.id
                        ? {
                            ...user,
                            [field]: action.target.inputValue
                        }
                        : user
                ),
            }

        case DELETE_USER:
            return {
                ...state,
                table: state.table.filter(user => user.id.toString() !== action.id)
            }



        case ADD_NEW_USER:
            return {
                ...state,
                table: [...state.table, action.target]
            }


        default:
            return state;


    }
}


export const fetchingC = (table) => {
    return {
        type: SET_TABLE,
        table: table,
    }
}

export const setTableAC = (table) => {
    return {
        type: SET_TABLE,
        table: table,
    }
}

export const changeTablesValue = (target) => {
    return {
        type: CHANGE_TABLES_VALUE,
        target: target,
    }
}

export const addNewUserAC = (target) => {
    return {
        type: ADD_NEW_USER,
        target: target,
    }
}

export const deleteUserFromTableAC = (id) => {
    return {
        type: DELETE_USER,
        id: id,
    }
}



export const setTable = () => {
    return (dispatch) => {
        profileAPI.getTable().then(data => {
            dispatch(setTableAC(data));
        });
    }
}

export const updateTable = (table, id) => {
    return (dispatch) => {
        profileAPI.updateTable(table, id).then(data => {
        });
    }
}

export const addNewUserSend = (table, id) => {
    return (dispatch) => {
        profileAPI.newUserSend(table, id).then(data => {
            if (data.status === 200 || 201) {
                dispatch(addNewUserAC(data.data))
            }
        });

    }
}

export const deleteUserFromTable = (id) => {
    return (dispatch) => {
        profileAPI.deleteFromTable(id).then(data => {
            if (data.status === 200 || 201) {
                dispatch(deleteUserFromTableAC(id))
            }
        });
    }
}


export default profileReducer