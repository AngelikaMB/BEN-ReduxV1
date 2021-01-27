import stringMath from "../Constants/stringMath";

//These naming conventions are terrible

export const dieSize = function (dieSize, dieSizeMod, dieSizeModNum) {
	const dieSizeSetUp = dieSize + dieSizeMod + dieSizeModNum;
	const dieCalc = stringMath(dieSizeSetUp);
	return dieCalc;
};

export function dieNum(numOfDie, dieNumMod) {
	const dieNumSetUp = numOfDie + dieNumMod;
	const dieNumCalc = stringMath(dieNumSetUp);
	return dieNumCalc;
}

export function conversionDieSize(
	conversionDieSize,
	dieSizeMod,
	dieSizeModNum
) {
	const conversionSetUp = conversionDieSize + dieSizeMod + dieSizeModNum;
	const conversionCalc = stringMath(conversionSetUp);
	return conversionCalc;
}

export function conversionDieNum(conversionNumOfDie, dieNumMod) {
	const conversionDieSetUp = conversionNumOfDie + dieNumMod;
	const conversionDieCalc = stringMath(conversionDieSetUp);
	return conversionDieCalc;
}
