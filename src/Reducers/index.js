import { combineReducers } from 'redux'
import { NameReducer } from './NamesReducer'
import { specificWeaponReducer } from './specificWeaponReducer'

export const rootReducer = combineReducers({
    NameReducer,
    specificWeaponReducer
})