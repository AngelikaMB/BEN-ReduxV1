import React from "react";
import SaveSpecificWeapon from "./SaveSpecificWeapon";
import {
	dieSize,
	dieNum,
	conversionDieSize,
	conversionDieNum,
} from "../../../Constants/damageDiceConversions";
import CurrencyConvert from "../../CurrencyCalculator";
import styled from "styled-components";
// import { dieSize, dieNum, conversionDieSize, conversionDieNum } from '../Constants/damageDiceConversions'

//Styles

const WeaponCard = styled.div`
	margin: 1%;
	width: 25%;
	text-align: ${(pr) => pr.theme.display.center};
	border: ${(pr) => pr.theme.border.style} ${(pr) => pr.theme.border.size}
		${(pr) => pr.theme.colors.primary};
	border-radius: ${(pr) => pr.theme.border.rounded};
	box-shadow: 10px 10px 8px #f4f4f4;
	// background: linear-gradient(to left, transparent 80%, #00ecfd08), linear-gradient(to right, transparent 80%, #00ecfd08);
	background-color: white;
`;
const WeaponHeader = styled.div`
	h2 {
		font-weight: 300;
	}
`;
const WeaponBrand = styled.div`
	padding: 0 3%;
`;

const WeaponBody = styled.div`
	padding: 0 3%;
`;

const WeaponCurse = styled.div`
	padding: 0 3%;
`;
const InventoryRuler = styled.div`
	height: 1px;
	background-color: lightgrey;
	width: 100%;
	margin: 0 auto;
	background-image: linear-gradient(to right, white, #00ecfd, #b200fd, white);
`;

const WeaponGenMain = (props) => {
	return (
		<WeaponCard>
			<WeaponHeader>
				<SaveSpecificWeapon weaponName={props.weapon.name} />
			</WeaponHeader>

			{props.brand !== {} ? (
				<WeaponBrand>
					<p>{props.brand.name}</p>
					{/* 
    Kindred = Roll on the brand table again, anything but Kindred. Do not display the name, but pull the modifiers except price which should remain as Kindred. */}
					<InventoryRuler />
				</WeaponBrand>
			) : (
				""
			)}
			<WeaponBody>
				<p>{props.weapon.name}</p>
				<p>
					{props.weapon.size} {props.weapon.proficiency} {props.weapon.type}
				</p>
				{props.weapon.name === "Net" || props.weapon.name === "Blowgun" ? (
					<p>
						Damage: {props.weapon.damage} {props.weapon.damageType}
					</p>
				) : (
					<p>
						Damage: {dieNum(props.weapon.numOfDie, props.brand.dieNumMod)}d
						{dieSize(
							props.weapon.dieSize,
							props.brand.dieSizeMod,
							props.brand.dieSizeModNum
						)}{" "}
						{props.weapon.damageType}
					</p>
				)}
				{props.weapon.conversionNumOfDie ? (
					<p>
						{props.weapon.conversion}{" "}
						{conversionDieNum(
							props.weapon.conversionNumOfDie,
							props.brand.dieNumMod
						)}
						d
						{conversionDieSize(
							props.weapon.conversionDieSize,
							props.brand.dieSizeMod,
							props.brand.dieSizeModNum
						)}{" "}
						{props.weapon.damageType}{" "}
					</p>
				) : (
					""
				)}
				{props.weapon.ammunition ? (
					<p>Ammunition: {props.weapon.ammunition}</p>
				) : (
					""
				)}
				<InventoryRuler />
				<h3>Attributes:</h3>

				<p>{props.weapon.details}</p>
				{props.weapon.range ? <p>Range: {props.weapon.range}</p> : ""}
				<p>{props.weapon.misc}</p>
				<p>{props.weapon.weight} lbs</p>
			</WeaponBody>
			<InventoryRuler />
			<WeaponCurse>
				<h3>Curse of Placeholder Text</h3>
				<p>
					This curse pastes Lorem Ipsum. This curse pastes Lorem Ipsum. This
					curse pastes Lorem Ipsum. This curse pastes Lorem Ipsum.
				</p>
			</WeaponCurse>
			<CurrencyConvert price={props.weapon.cost} brand={props.brand} />
		</WeaponCard>
	);
};

export default WeaponGenMain;
