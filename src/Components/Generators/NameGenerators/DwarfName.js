import React, { useState, useEffect } from "react";
import { dwarfFamilyNamePrefix } from "../../../Data/dwarfFamilyNamePrefix";
import { dwarfFamilyNameSuffix } from "../../../Data/dwarfFamilyNameSuffix";
import { randomDown } from "../../../Constants/randomDown";

const initialState = {};

export default function DwarfName() {
	const [surName, setSurName] = useState(initialState);

	const genSurName = () => {
		const surNameArray = [];
		for (let i = 0; i < 1; i++) {
			let key = randomDown(dwarfFamilyNamePrefix);
			const chosenPrefix = dwarfFamilyNamePrefix[key];
			surNameArray.push(chosenPrefix);
		}

		for (let i = 0; i < 1; i++) {
			let key = randomDown(dwarfFamilyNameSuffix);
			const chosenPrefix = dwarfFamilyNameSuffix[key];
			surNameArray.push(chosenPrefix);
		}

		const surNameConcat = surNameArray.join("");

		function toTitleCase(str) {
			return str.replace(/\w\S*/g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			});
		}

		setSurName(toTitleCase(surNameConcat));
	};

	useEffect(() => {
		genSurName();
	}, []);

	// const genSurName = () => {
	// 	//randomizes the prefix
	// 	const selector = () => {
	// 		return randomDown(dwarfFamilyNamePrefix);
	// 	};
	// 	//return prefix based on randomizer
	// 	const chosenPrefix = dwarfFamilyNamePrefix[selector];

	// 	setSurName(chosenPrefix);
	// 	console.log(chosenPrefix);
	// };

	return (
		<div>
			<p>$Brunhilde {`${surName}`}</p>
		</div>
	);
}
