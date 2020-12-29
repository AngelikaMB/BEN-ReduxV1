import React from 'react'
import SaveSpecificWeapon from './SaveSpecificWeapon'
import styled from 'styled-components'
// import { dieSize, dieNum, conversionDieSize, conversionDieNum } from '../Constants/damageDiceConversions'

//Styles

const WeaponCard = styled.div`
    margin: 1%;
    width: 25%;
    text-align:  ${pr => pr.theme.display.center};
    border: ${pr => pr.theme.border.style} ${pr => pr.theme.border.size} ${pr => pr.theme.colors.primary};
    border-radius:  ${pr => pr.theme.border.rounded};
    box-shadow: 10px 10px 8px #f4f4f4;
`
const WeaponHeader = styled.div`
    /* h2 {
      font-weight: 300;
    }
    border-bottom: ${pr => pr.theme.border.style} ${pr => pr.theme.border.size} ${pr => pr.theme.colors.primary}; */
`
const WeaponBrand = styled.div`
    /* border-bottom: ${pr => pr.theme.border.style} ${pr => pr.theme.border.size} ${pr => pr.theme.colors.primary}; */
`

const WeaponBody = styled.div`
    /* border-bottom: ${pr => pr.theme.border.style} ${pr => pr.theme.border.size} ${pr => pr.theme.colors.primary}; */
`

const WeaponCurse = styled.div`
    /* border-bottom: ${pr => pr.theme.border.style} ${pr => pr.theme.border.size} ${pr => pr.theme.colors.primary}; */
`



const WeaponGenMain = props => {

return(

        <WeaponCard>
            <WeaponHeader>
            <SaveSpecificWeapon weaponName={props.weapon.name}/>
            </WeaponHeader>
            
            {props.weapon.brand ? 
            <WeaponBrand>
            <p>{props.weapon.brand.name}</p>
    {/* 
    Kindred = Roll on the brand table again, anything but Kindred. Do not display the name, but pull the modifiers except price which should remain as Kindred. */}

            </WeaponBrand>
            : ''}
            <WeaponBody>

                <p>{props.weapon.name}</p>
                <p>{props.weapon.size} {props.weapon.proficiency} {props.weapon.type}</p>
                {/* {props.weapon.name === 'Net' || props.weapon.name === 'Blowgun' ? 
                <p>Damage: {props.weapon.damage} {props.weapon.damageType}</p> 
                : <p>Damage: {dieNum(props)}d{dieSize(props)} {props.weapon.damageType}</p>}
                {props.weapon.conversionNumOfDie ? 
                <p>{props.weapon.conversion} {conversionDieNum(props)}d{conversionDieSize(props)} {weaponData.damageType} </p>
                : ''} */}
                {props.weapon.ammunition ?
                <p>Ammunition: {props.weapon.ammunition}</p>
                : ''}
                <h3>Attributes:</h3>
                <p>{props.weapon.details}</p>
                {props.weapon.range ? <p>Range: {props.weapon.range}</p> : ''}
                <p>{props.weapon.misc}</p>
                <p>{props.weapon.weight} lbs</p>
            </WeaponBody>
            <WeaponCurse>
                <h3>Curse of Named.</h3>
                <p>This curse pastes Lorem Ipsum. This curse pastes Lorem Ipsum. This curse pastes Lorem Ipsum. This curse pastes Lorem Ipsum.</p>
            </WeaponCurse>
            {/* <CurrencyDis price={price} brand={brand}/> */}
        </WeaponCard>
    )
 }

export default WeaponGenMain






