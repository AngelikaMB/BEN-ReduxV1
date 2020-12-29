import React, { useState } from 'react'
import styled from 'styled-components'
import { updateName } from '../Actions/specificWeapon'
import { connect } from 'react-redux'

//Styles

const EditableTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

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
            {props.name.map((weapon) => (
                <div key={Date.now()}>
                <h3 >{weapon.name}</h3>
                <p>{weapon.size}</p>

        <EditableTitle>
        <label>Edit Weapon Name: </label>
            <input 
            type='text'
            placeholder={weapon.name}
            value={weaponName}
            onChange={handleChanges}
            />
        
        <button className='saveButton' onClick={() => props.updateName
        (newWeaponName)}>-- R E N A M E --</button>
        </EditableTitle>
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