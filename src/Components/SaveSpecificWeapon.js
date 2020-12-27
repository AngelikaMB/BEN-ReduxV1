import React, { useState } from 'react'
import { updateName } from '../Actions/specificWeapon'
import { connect } from 'react-redux'


//Slice of state

//Each generated weapon would need a unique ID.
//if the user saves the weapon, all available information related to that id gets pushed to state
//the cost of the weapon is modified depending on whether they select materials, enchants, etc.
//You should be able to name the weapon (user input or generated).
//

const initialState = {
    name: ''
}

const SaveSpecificWeapon = props => {
const { weaponName } = props

const [newWeaponName, setNewWeaponName] = useState(initialState)

 const handleChanges = e => ({
     [e.target.name]: e.target.value
 })

    return(


    <div>
            {props.name.map((weapon, id) => (
                <div key={id}>
                <h3 >{weapon.name}</h3>
                <p>{weapon.size}</p>

        <div>
        <label>Edit Weapon Name: </label>
            <input 
            type='text'
            placeholder={weapon.name}
            value={weaponName}
            onChange={handleChanges}
            />

        <button className='saveButton' onClick={() => props.updateName(newWeaponName)}>Save</button>
        </div>
        </div>
        ))}
        
    </div>
    )
}


//This is mapping a brand new object, not editing an existing object already in state.

const mapStateToProps = state => {
    return {
    name: state.specificWeaponReducer.inventoryWeaponArray
    }
}

export default connect(mapStateToProps, {updateName})(SaveSpecificWeapon)