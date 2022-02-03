import React, { Fragment } from "react";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";
import Gallery from "../../Layouts/Gallery/Gallery";

function Accueil() {
	return (
		<Fragment>
			<Jumbotron></Jumbotron>
			<Gallery></Gallery>
		</Fragment>
	);
}

export default Accueil;
