import { ADD_NEW_WEAPON, UPDATED_NAME, TOGGLE_EDITING } from '../Actions/specificWeapon'

export const initialWeaponState = {
    inventoryWeaponArray: [{
        name: '',
        editing: false,
        id: 0,
        cost: 0,
        enchanted: false,
        enchantDesc: '',
        material: '',
        size: '',
        type: '',
        proficiency: '',
        numOfDie: 0,
        dieSize: 0,
        damageType: '',
        range: false,
        ammunition: '',
        conversion: '',
        details: '',
        misc: '',
        weight: 0,
        rarity: 0,
    }],

}

export const specificWeaponReducer = (state = initialWeaponState, action) => {
    switch(action.type){
            case(ADD_NEW_WEAPON):
                return({
                    ...state,
                    inventoryWeaponArray: [
                            ...state.inventoryWeaponArray, 
                            {
                            id: Date.now(),
                            cost: action.payload.cost,
                            enchanted: action.payload.enchanted,
                            enchantDesc: action.payload.enchantDesc,
                            material: action.payload.material,
                            size: action.payload.size,
                            type: action.payload.type,
                            proficiency: action.payload.proficiency,
                            numOfDie: action.payload.numOfDie,
                            dieSize: action.payload.dieSize,
                            damageType: action.payload.damageType,
                            range: action.payload.range,
                            ammunition: action.payload.ammunition,
                            conversion: action.payload.conversion,
                            details: action.payload.details,
                            misc: action.payload.misc,
                            weight: action.payload.weight,
                            rarity: action.payload.rarity,
                                            }]
                        })
            case(UPDATED_NAME):
                return ({
                    ...state,
                    inventoryWeaponArray: [...state.inventoryWeaponArray, {name: action.payload}]
                    })
            case(TOGGLE_EDITING):
                return ({
                    ...state,
                    inventoryWeaponArray: [...state.inventoryWeaponArray, {editing: true}]
                })   
                default:
                return state;
            }
        }
