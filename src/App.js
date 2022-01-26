import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Accueil from "./views/Accueil/Accueil";
import APropos from "./views/APropos/APropos";
import Fiche from "./views/Fiche/Fiche";
// import NavBar from "./Layouts/Navbar/Navbar";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={< Navigate replace to="/Accueil" />} />
				<Route path="/Accueil" element={<Accueil />} />
				<Route path="/APropos" element={<APropos />} />
				<Route path="/Fiche/:logementId" element={<Fiche />} />
			</Routes>
		</div>
	);
}

export default App;

/* <NavBar></NavBar> */
