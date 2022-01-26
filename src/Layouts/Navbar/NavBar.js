import * as React from "react";
import { NavLink } from "react-router-dom";
import  "./Navbar.css";

function NavBar() {
	return (
		<section  className="Navbar ">
			<ul>
				<li>
					<NavLink
						to="/Accueil"
						className={({isActive}) => isActive ? "active" : ""}
					>
						Accueil
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/APropos"
						className={({isActive}) => isActive ? "active" : ""}
					>
						A propos
					</NavLink>
				</li>
			</ul>
		</section>
		// 	<section className="Navbar">
		// 	<ul>
		// 		<li>
		// 			Accueil

		// 		</li>
		// 		<li>
		// 			A propos

		// 				A propos

		// 		</li>
		// 	</ul>
		// </section>
	);
}

export default NavBar;
