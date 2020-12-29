import React from 'react';
import { ReactComponent as GoldCoin } from '../Assets/goldenCoin.svg'
import { ReactComponent as PlatCoin } from '../Assets/PlatinumCoin.svg'
import { ReactComponent as SilvCoin } from '../Assets/silverCoin.svg'
import { ReactComponent as CopCoin } from '../Assets/bronzeCoin.svg'
import styled from 'styled-components'

//Styles
const CoinWrapper = styled.div`
    display: ${pr => pr.theme.display.disCol};
`
const CoinDisplay = styled.div`
    display: ${pr => pr.theme.display.disFlex};
    justify-content: space-evenly;
    align-items: center;
    padding: 2px;
    background: black;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    h4 {
        color: white;
    }
`

export default function CurrencyConvert(props) {

const { price, brand } = props

let plat = 0
let gold = 0
let silver = 0
let copper = 0

//Calculates all cost modifiers and divides total by breakpoints
let conversion  = (price) => {

function x() {
    if(props.brand.name === 'Echroel') {
       return (
           Math.ceil(price * brand.cost)+100000)
    }
    return(
        Math.ceil(price * brand.cost))
}

const platDiv = 1000
const goldDiv = 100
const silvDiv = 10
let quo1 = 0
let quo2 = 0

return (
plat = Math.floor(x() / platDiv),
quo1 = x() % platDiv,
gold = Math.floor(quo1 / goldDiv),
quo2 = x() % goldDiv,
silver = Math.floor(quo2 / silvDiv),
copper = x() % silvDiv
)};

conversion(price)

    return (
        <CoinWrapper>
            <CoinDisplay>
                <PlatCoin width={25} height={25} alt='platinum coin'/>
                <h4>{plat}</h4>
                 <GoldCoin width={25} height={25} alt='golden coin' />
                <h4>{gold}</h4>
                <SilvCoin width={25} height={25} alt='silver coin' />
                <h4>{silver}</h4>
                <CopCoin width={25} height={25} alt='copper coin' />
                <h4>{copper}</h4>
            </CoinDisplay>
        </CoinWrapper>
    )
}