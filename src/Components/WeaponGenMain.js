import React from 'react'
// import SaveSpecificWeapon from './SaveSpecificWeapon'
// import styled from 'styled-components'
// import { dieSize, dieNum, conversionDieSize, conversionDieNum } from '../Constants/damageDiceConversions'




const WeaponGenMain = props => {

console.log(props)
// const { weaponData, price, brand } = props;

// console.log(props.weaponData)

return(

    <div>

    </div>

    )
 }

export default WeaponGenMain





// //Styles
// const WeaponCard = styled.div`
//     display: ${pr => pr.theme.display.display};
//     flex-direction: ${pr => pr.theme.display.flexCol};
//     text-align:  ${pr => pr.theme.display.center};
//     background:  ${pr => pr.theme.colors.background};
//     color:  ${pr => pr.theme.colors.text};
//     border: ${pr => pr.theme.border.style} ${pr => pr.theme.border.size} ${pr => pr.theme.colors.primary};
//     border-radius:  ${pr => pr.theme.border.rounded};
//     width: 20%;
// `
// const WeaponHeader = styled.div`
//     display: ${pr => pr.theme.display.display};
//     h2 {
//       font-weight: 300;
//     }
//     border-bottom: ${pr => pr.theme.border.style} ${pr => pr.theme.border.size} ${pr => pr.theme.colors.primary};
// `
// const WeaponBrand = styled.div`
//     border-bottom: ${pr => pr.theme.border.style} ${pr => pr.theme.border.size} ${pr => pr.theme.colors.primary};
// `

// const WeaponBody = styled.div`
//     border-bottom: ${pr => pr.theme.border.style} ${pr => pr.theme.border.size} ${pr => pr.theme.colors.primary};
// `

// const WeaponCurse = styled.div`
//     border-bottom: ${pr => pr.theme.border.style} ${pr => pr.theme.border.size} ${pr => pr.theme.colors.primary};
// `



//         <WeaponCard>
//             <WeaponHeader>
//             <SaveSpecificWeapon/>
//                 <h2>{props.weaponData.name}</h2>
//             </WeaponHeader>
//             {brand ? 
//             <WeaponBrand>
//             <p>{brand.name}</p>
// {/* 
// Kindred = Roll on the brand table again, anything but Kindred. Do not display the name, but pull the modifiers except price which should remain as Kindred. */}

//             </WeaponBrand>
//             : ''}
//             <WeaponBody>
//                 <p>{weaponData.size} {weaponData.proficiency} {weaponData.type}</p>
//                 {weaponData.name === 'Net' || weaponData.name === 'Blowgun' ? 
//                 <p>Damage: {weaponData.damage} {weaponData.damageType}</p> 
//                 : <p>Damage: {dieNum(props)}d{dieSize(props)} {weaponData.damageType}</p>}
//                 {weaponData.conversionNumOfDie ? 
//                 <p>{weaponData.conversion} {conversionDieNum(props)}d{conversionDieSize(props)} {weaponData.damageType} </p>
//                 : ''}
//                 {weaponData.ammunition ?
//                 <p>Ammunition: {weaponData.ammunition}</p>
//                 : ''}
//                 <h3>Attributes:</h3>
//                 <p>{weaponData.details}</p>
//                 {weaponData.range ? <p>Range: {weaponData.range}</p> : ''}
//                 <p>{weaponData.misc}</p>
//                 <p>{weaponData.weight} lbs</p>
//             </WeaponBody>
//             <WeaponCurse>
//                 <h3>Curse of Named.</h3>
//                 <p>This curse pastes Lorem Ipsum. This curse pastes Lorem Ipsum. This curse pastes Lorem Ipsum. This curse pastes Lorem Ipsum.</p>
//             </WeaponCurse>
//             {/* <CurrencyDis price={price} brand={brand}/> */}
//         </WeaponCard>