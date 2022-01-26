import React from "react";
import { useParams } from "react-router-dom";

function Fiche() {
	const params = useParams();
	console.log(params.logementId);
	return <div>
    <p>{params.logementId}</p>
  </div>;
}

export default Fiche;
