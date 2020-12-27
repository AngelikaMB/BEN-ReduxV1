import { ADD_NEW_WEAPON, TOGGLE_EDITING, UPDATED_NAME } from '../Actions/specificWeapon'

export const initialWeaponState = {
    weaponArray: [],
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
}

export const specificWeaponReducer = (state = initialWeaponState, action) => {
    switch(action.type){
            case(ADD_NEW_WEAPON):
                return({
                    ...state,
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
                        })
            case(UPDATED_NAME):
                return ({
                    ...state,
                    name: action.payload,
                    editing: false
                    })
            case(TOGGLE_EDITING):
                return ({
                    ...state,
                    editing: !state.editing
                    })
                default:
                return state;
            }
        }
