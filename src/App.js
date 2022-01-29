import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Accueil from "./views/Accueil/Accueil";
import APropos from "./views/APropos/APropos";
import FicheLogement from "./views/FicheLogement/FicheLogement";
import GlobalLayout from "./Layouts/GlobalLayout/GlobalLayout";
import ErroPage from "./views/ErroPage/ErroPage.js";
// import NavBar from "./Layouts/Navbar/Navbar";

import "./App.css";


function App() {
	return (
		<div className="App">
			<GlobalLayout>
				<Routes>
					<Route path="*" element={<ErroPage />} />
					<Route path="/" element={<Navigate replace to="/Accueil" />} />
					<Route path="/Accueil" element={<Accueil />} />
					<Route path="/APropos" element={<APropos />} />
					<Route
						path="/FicheLogement/:FicheLogementId"
						element={<FicheLogement />}
					/>
				</Routes>
			</GlobalLayout>
		</div>
	);
}

export default App;

/* <NavBar></NavBar> */
