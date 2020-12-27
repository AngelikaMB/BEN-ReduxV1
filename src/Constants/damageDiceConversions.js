import stringMath from '../Constants/stringMath'

export const dieSize = function (props) {
  const dieSizeSetUp = props.weaponData.dieSize+props.brand.dieSizeMod+props.brand.dieSizeModNum
  const dieCalc = stringMath(dieSizeSetUp)
  return(dieCalc)
}

export function dieNum(props) {
  const dieNumSetUp = props.weaponData.numOfDie+props.brand.dieNumMod
  const dieNumCalc = stringMath(dieNumSetUp)
  return (dieNumCalc)
}

export function conversionDieSize(props) {
  const conversionSetUp = props.weaponData.conversionDieSize+props.brand.dieSizeMod+props.brand.dieSizeModNum
  const conversionCalc = stringMath(conversionSetUp)
  return (conversionCalc)
}

export function conversionDieNum(props) {
  const conversionDieSetUp = props.weaponData.conversionNumOfDie+props.brand.dieNumMod
  const conversionDieCalc = stringMath(conversionDieSetUp)
  return conversionDieCalc
}