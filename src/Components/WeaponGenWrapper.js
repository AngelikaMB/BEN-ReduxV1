import React, { useState, useEffect } from 'react'
import WeaponGenMain from './WeaponGenMain'
import { addNewWeapon } from '../Actions/specificWeapon'
import { randomDown } from '../Constants/randomDown'
import { weaponData } from '../Data/weaponGenData'
import { brandData } from '../Data/brandData'
//import { connect } from 'react-redux'

const initialState = []

const WeaponGenWrapper = () => {
const [newWeapon, setNewWeapon] = useState(initialState)
const brandID = randomDown(brandData)

function key() {
    return randomDown(weaponData)
}


const newWeapons = () => {
    const newWeaponArray = []
    for(let i = 0; i < 5 ; i++) {
    let key = randomDown(weaponData)
    const generatedWeapon = weaponData[key]
    const newWeapons = generatedWeapon
    

    newWeaponArray.push(newWeapons)
    }
    setNewWeapon(newWeaponArray)
}

useEffect(() => {
    newWeapons()
}, [])

    return(


        <div>
        {newWeapon.map(weapon => (
            <WeaponGenMain key={weapon.id} weapon={weapon} brand={brandID}/>
        ))}




        {/* <WeaponGenMain weaponGen={weaponData[key]} price={weaponData[key].cost}  brand={brandData[brandID]}/> */}
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         inventoryWeaponArray: state.specificWeaponReducer.inventoryWeaponArray
//     }
// }

export default WeaponGenWrapper