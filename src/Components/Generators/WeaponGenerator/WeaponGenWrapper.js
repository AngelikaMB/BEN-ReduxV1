import React, { useState, useEffect } from "react";
import WeaponGenMain from "./WeaponGenMain";
import { randomDown } from "../../../Constants/randomDown";
import { weaponData } from "../../../Data/weaponGenData";
import { brandData } from "../../../Data/brandData";
import ShopKeepGen from "../ShopkeepGenerators/ShopkeepGen";
import styled from "styled-components";

//Styles

const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CardGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 80%;
`;

const initialState = [];

const WeaponGenWrapper = () => {
	const [newWeapon, setNewWeapon] = useState(initialState);
	const [newBrand, setNewBrand] = useState(initialState);

	//retrieving selected number of random weapon objects
	const newWeapons = () => {
		const newWeaponArray = [];
		//for loop dictates how many weapons to retrieve
		for (let i = 0; i < 6; i++) {
			//generating random index
			let key = randomDown(weaponData);
			//selecting weapon object by index
			const generatedWeapon = weaponData[key];
			//pushing weapon objects to array
			newWeaponArray.push(generatedWeapon);
		}
		//setting weapon array to component state
		setNewWeapon(newWeaponArray);
	};

	//Same as above, but for brand objects
	const selectBrand = () => {
		const newBrandArray = [];
		for (let i = 0; i < 6; i++) {
			let key = randomDown(brandData);
			const pickBrand = brandData[key];
			newBrandArray.push(pickBrand);
		}
		setNewBrand(newBrandArray);
	};

	useEffect(() => {
		newWeapons();
		selectBrand();
	}, []);

	return (
		<div className="container">
			<ShopKeepGen />
			<CardContainer>
				<CardGrid>
					{newWeapon.map((weapon, index) => {
						const weaponBrand = newBrand[index];
						return (
							<WeaponGenMain
								key={Math.random(weapon.id)}
								weapon={weapon}
								brand={weaponBrand}
							/>
						);
					})}
				</CardGrid>
			</CardContainer>
		</div>
	);
};

// const mapStateToProps = state => {
//     return {
//         inventoryWeaponArray: state.specificWeaponReducer.inventoryWeaponArray
//     }
// }

export default WeaponGenWrapper;
