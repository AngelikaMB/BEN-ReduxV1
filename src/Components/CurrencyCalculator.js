import React, { useState, useEffect } from "react";
// import { ReactComponent as GoldCoin } from "../Assets/goldenCoin.svg";
// import { ReactComponent as PlatCoin } from "../Assets/platinumCoin.svg";
// import { ReactComponent as SilvCoin } from "../Assets/silverCoin.svg";
// import { ReactComponent as CopCoin } from "../Assets/bronzeCoin.svg";
import styled from "styled-components";

//Styles
const CoinWrapper = styled.div`
	display: ${(pr) => pr.theme.display.disCol};
	background: black;
	border-bottom-left-radius: 13px;
	border-bottom-right-radius: 13px;
`;
const CoinDisplay = styled.div`
	display: ${(pr) => pr.theme.display.disFlex};
	justify-content: space-evenly;
	align-items: center;
	margin: 0 10%;
	padding: 2px;
	color: ${(pr) => pr.theme.colors.secondary};
`;
const initialState = [];

export default function CurrencyConvert(props) {
	const [costArray, setCostArray] = useState(initialState);
	const { price, brand } = props;

	let plat = 0;
	let gold = 0;
	let silver = 0;
	let copper = 0;

	let conversion = (price) => {
		//multiples base cost by brand modifier
		function x() {
			if (props.brand.name === "Echroel") {
				return Math.ceil(price * brand.cost) + 100000;
			}
			return Math.ceil(price * brand.cost);
		}

		//Calculates all cost modifiers and divides total by breakpoints
		const platDiv = 1000;
		const goldDiv = 100;
		const silvDiv = 10;
		let quo1 = 0;
		let quo2 = 0;

		return (
			(plat = Math.floor(x() / platDiv)),
			(quo1 = x() % platDiv),
			(gold = Math.floor(quo1 / goldDiv)),
			(quo2 = x() % goldDiv),
			(silver = Math.floor(quo2 / silvDiv)),
			(copper = x() % silvDiv)
		);
	};

	conversion(price);

	//shaping calculated breakpoints
	const cost = {
		plat: plat,
		gold: gold,
		silver: silver,
		copper: copper,
	};

	//setting price point object to component state
	useEffect(() => {
		setCostArray((costArray) => [...costArray, cost]);
	}, []);

	return (
		<CoinWrapper>
			{!plat && !gold && !silver && !copper ? (
				<h3>Loading...</h3>
			) : (
				costArray.map((price) => (
					<CoinDisplay key={Math.random(Date.now())}>
						<h3>Platinum: {price.plat}</h3>
						<h3>Gold: {price.gold}</h3>
						<h3>Silver: {price.silver}</h3>
						<h3>Copper: {price.copper}</h3>
					</CoinDisplay>
				))
			)}
		</CoinWrapper>
	);
}
