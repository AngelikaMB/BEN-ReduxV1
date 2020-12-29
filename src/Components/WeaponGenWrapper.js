import React, { useState, useEffect } from 'react'
import WeaponGenMain from './WeaponGenMain'
import { addNewWeapon } from '../Actions/specificWeapon'
import { randomDown } from '../Constants/randomDown'
import { weaponData } from '../Data/weaponGenData'
import { brandData } from '../Data/brandData'
import styled from 'styled-components'
//import { connect } from 'react-redux'

//Styles

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
`

const initialState = []

const WeaponGenWrapper = () => {
const [newWeapon, setNewWeapon] = useState(initialState)

//randomzing an index from the brandData array and returning that brand object
const brandID = brandData[randomDown(brandData)]

//retrieving selected number of random weapon objects
const newWeapons = () => {
    const newWeaponArray = []
    for(let i = 0; i < 12 ; i++) {
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
        <div className="container">
        <div className="infoBlock">
        <div className='shopName'>
        <h1>Brunhilde's Forge</h1>
        </div>

        <div className='npcContainer'>
        <h3>Brunhilde Boneaxe</h3>
         <p>Female Hill Dwarf</p>
         <p>Typically Considered Chaotic Neutral</p>
         </div>
        </div>


        <div className='logo'><p>sword logo</p></div>


        <div className='discount'>
        <h4>Discount DC:</h4>
        <p>22</p>
        </div>


        <div className='economyBreakdown'>
        <h4>The town is currently suffering a recession.</h4>
        <p>Buy prices are inflated by 15%.</p>
        <p>Sell prices are cut 20%.</p>
        </div>


<CardContainer>
    <CardGrid>
        {newWeapon.map(weapon => (
            <WeaponGenMain key={Math.random(weapon.id)} weapon={weapon} brand={brandID}/>
        ))}

        {/* <WeaponGenMain weaponGen={weaponData[key]} price={weaponData[key].cost}  brand={brandData[brandID]}/> */}

    </CardGrid>
</CardContainer>
        </div>

    )
}

// const mapStateToProps = state => {
//     return {
//         inventoryWeaponArray: state.specificWeaponReducer.inventoryWeaponArray
//     }
// }

export default WeaponGenWrapper