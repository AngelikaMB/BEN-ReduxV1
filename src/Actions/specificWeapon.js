export const ADD_NEW_WEAPON = 'ADD_NEW_WEAPON'
export const TOGGLE_EDITING = 'TOGGLE_EDITING'
export const UPDATED_NAME = 'UPDATED_NAME'


export function toggleEditing() {
    return { type: TOGGLE_EDITING }
}

export const updateName = newName => {
    return { type: UPDATED_NAME, payload: newName}
}

export const addNewWeapon = newWeaponData => {
    return({type: ADD_NEW_WEAPON, payload: newWeaponData})
}