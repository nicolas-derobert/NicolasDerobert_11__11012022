import React, { Fragment } from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
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
