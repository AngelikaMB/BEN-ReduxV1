import React from "react";
import { attributes } from "../../Attribute/attribute";
import "../../CSS/about.css";

export default function About() {
	return (
		<div className="about__container">
			<h1 className="about_container--title">About BEN</h1>
			<div className="about__internal-wrapper">
				<div className="about__internal-wrapper__biography">
					<h2 className="about__internal-wrapper__biography--title">
						Developer
					</h2>
					<p className="about__internal-wrapper__biography--paragraph">
						My name is Angelika (Ahn-hel-ee-kuh: she/her) and I've been learning
						how to develop web apps for about 4 months, with my time split
						between a bootcamp and self-teaching. I needed a big portfolio piece
						to showcase my skills, and knew I needed a fullstack app to do that.
						BEN was chosen because my husband's eyes lit up with excitement when
						I offhandedly mentioned the possibility of creating this tool. He
						really enjoys my homebrewed campaign of Perrafen, but strongly
						prefers not to sink the same 9 months of creation time that I did
						into homebrewing from scratch. And really, who can blame him? Thus,
						BEN was born. I hope it brings you all happiness and contributes to
						many fun adventures at the table!
					</p>
					<p className="about__internal-wrapper__biography--paragraph">
						When I'm not coding I'm usually chasing after Fae Wilds, our
						Toy-Poodle mix. In another life, where I have tons of free time and
						no responsibilities, I'm a PC gamer with a love for survival
						base-builders and story-tellers. I also enjoy obliterating my
						husband in games of MTG, free time or not! >:D
					</p>
					<p className="about__internal-wrapper__biography--paragraph">
						The current primary theme is "modern magic". I chose a bright and
						vibrant cyan and magenta scheme to represent the magic of a D&D
						game, juxtapositioned against a clean and mobile-friendly white and
						dark grey design for the modern table-top gamer.
					</p>

					<p className="about__internal-wrapper__biography--paragraph">
						As a final and most important note: my highest priority with BEN, or
						any project I work on, is accessibility. If you find yourself
						struggling to interact with anything in the current design, please
						reach out to me with the form below! I'm striving to establish an
						accessibility-first work pattern, but I still have a lot to learn
						and would love to hear from members of the community. Thank you!
					</p>
				</div>
				<h2 className="about__internal-wrapper__credits--title">Credits</h2>
				<p className="about__internal-wrapper__credits--paragraph">
					All assets used have CC licensing, courtesy of
					<a href="https://thenounproject.com/">The Noun Project</a>,{" "}
					<a href="https://unsplash.com/">Unsplash</a>, or{" "}
					<a href="https://www.pexels.com/">Pexels</a>. You can find a link to
					specific assets and their respective creators below.
				</p>

				<div>
					{attributes.map((item) => {
						return (
							<div key={Math.random(attributes)}>
								<h3 className="about__internal-wrapper__credits--title">
									{item.type}: {item.asset}
								</h3>
								<p className="about__internal-wrapper__credits--paragraph">
									Creator: <a href={item.sourceURL}>{item.author}</a>
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
