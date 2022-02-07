import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Accueil from "./views/accueil/Accueil";
import APropos from "./views/apropos/APropos";
import FicheLogement from "./views/fichelogement/FicheLogement";
import GlobalLayout from "./layouts/globallayout/GlobalLayout";
import ErroPage from "./views/erropage/ErroPage.js";
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
						path="/fichelogement/:FicheLogementId"
						element={<FicheLogement />}
					/>
				</Routes>
			</GlobalLayout>
		</div>
	);
}

export default App;