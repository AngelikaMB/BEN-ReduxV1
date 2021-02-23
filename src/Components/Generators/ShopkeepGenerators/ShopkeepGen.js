import React from "react";
import forge from "../../../Assets/unsplash-forge-chantelLim_squared.jpg";
import { ReactComponent as HammerAnvil } from "../../../Assets/HammerAnvil.svg";
import "../../../CSS/shopkeep.css";

import DwarfName from "../NameGenerators/DwarfName";

export default function ShopkeepGen() {
	return (
		<div className="shopkeep__wrapper">
			<div className="shopkeep_wrapper--align">
				<div className="shopkeep__info-block">
					<div className="shopkeep__info-block__shopName">
						<h1>$Brunhilde's Hammer & Forge</h1>
					</div>
					<div className="shopkeep__info-block--wrapper">
						<div className="shopkeep__info-block__pcBlock">
							<button className="btn shopkeep__info-block__btn">
								NPC Overview
							</button>
							<DwarfName className="shopkeep__info-block__pcBlock--npc-name" />
							<p className="shopkeep__info-block__pcBlock--npc-desc">
								$Female $Hill Dwarf
							</p>
							<p className="shopkeep_info-block__pcBlock--npc-alignment">
								Typically Considered $Chaotic Neutral
							</p>
							<p className="shopkeep__info-block__dmBlock--description">
								Discount DC:
							</p>
							<h2 className="shopkeep__info-block__dmBlock--score">$22</h2>
						</div>

						<div className="shopkeep__info-block__dmBlock">
							<button className="btn shopkeep__info-block__btn">
								The DM Screen
							</button>
							<div className="shopkeep__info-block--spacer shopkeep__info-block__dmBlock--description">
								<p>The $town is currently $suffering a recession.</p>
							</div>

							<h3 className="shopkeep__info-block__dmBlock--description">
								Sell prices
							</h3>
							<p className="shopkeep__info-block__dmBlock--score">
								$inflated by 15%.
							</p>
							<h3 className="shopkeep__info-block__dmBlock--description">
								Buy prices
							</h3>
							<p className="shopkeep__info-block__dmBlock--score">$cut 20%.</p>
						</div>
					</div>
				</div>
				<div className="shopkeep__info-block__logo--wrapper">
					<div className="shopkeep__info-block__logo--wrapper-internal">
						<HammerAnvil className="shopkeep__infoblock__logo--svg-icon" />
						<img
							src={forge}
							alt="tongs in fiery bed of charcoal"
							className="shopkeep__info-block__logo"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
