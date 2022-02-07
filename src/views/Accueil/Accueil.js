import React, { Fragment } from "react";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import Gallery from "../../layouts/gallery/Gallery";

function Accueil() {
	return (
		<Fragment>
			<Jumbotron></Jumbotron>
			<Gallery></Gallery>
		</Fragment>
	);
}

export default Accueil;
