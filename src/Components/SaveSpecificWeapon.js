import React, { useState } from 'react'
import { toggleEditing, updateName } from '../Actions/specificWeapon'
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

const [newWeaponName, setNewWeaponName] = useState(initialState)

 const handleChanges = e => {
     setNewWeaponName(e.target.value)
 }

    return(

    //     <div>
    //     {!props.editing ? (
    //         <h3>{props.name}{' '}
    //         <i className="far fa-edit"
    //             onClick={() => props.toggleEditing()}
    //             />
    //         </h3>

    // ) : (

        <div>
        <label>Weapon Name: </label>
        <input 
        type='text'
        placeholder='Weapon Name'
        value={newWeaponName.name}
        onChange={handleChanges}
        />
        <button onClick={() => 
        props.updateName(newWeaponName)}>Save</button>
        </div>
       //)}
        //</div>
    )
}

const mapStateToProps = state => {
    return {
    name: state.specificWeaponReducer.name,
    editing: state.specificWeaponReducer.editing
    }
}

export default connect(mapStateToProps, {toggleEditing, updateName})(SaveSpecificWeapon)