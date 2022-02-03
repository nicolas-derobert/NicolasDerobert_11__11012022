import React, { Fragment } from "react";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import "./GlobalLayout.css"

function GlobalLayout(props) {
	return (
		<Fragment>
			<Header></Header>
			<main className="GlobalLayout">{props.children}</main>
			<Footer></Footer>
		</Fragment>
	);
}

export default GlobalLayout;
