import { FETCHING_NAME_START, FETCHING_NAME_SUCCESS, FETCHING_NAME_FAILURE } from '../Actions/blacksmithNames'

const initialNameState = {
    namingArray: [],
    isFetching: false,
    error: ''
}

export const NameReducer = (state = initialNameState, action) => {
    switch (action.type) {
        case(FETCHING_NAME_START):
            return({
                ...state,
                isFetching: true,
                error: ''
            })
        case(FETCHING_NAME_SUCCESS):
            return({
                ...state,
                isFetching: false,
                error: ''
            })
            case(FETCHING_NAME_FAILURE):
                return({
                    ...state,
                    isFetching: false,
                    error: action.payload
                })
        default:
        return state;
    }
}