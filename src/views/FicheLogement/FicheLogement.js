import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import data from "../../Assets/Data/logements.json";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Dropdown from "../../components/Dropdown/Dropdown";
import Caroussel from "../../components/Caroussel/Caroussel";
import "./FicheLogement.css";

function FicheLogement() {
	const params = useParams();
	console.log(params.FicheLogementId);
	const idLogementRecherche = params.FicheLogementId;
	const logement = data.find((logement) => logement.id === idLogementRecherche);
	const logementPictures = logement.pictures;
	const tagList = logement.tags;

	const hostName = logement.host.name;
	const description = logement.description;
	const hostPicture = logement.host.picture;

	// const pictureList = logement.pictures;
	const equipementList = logement.equipments;
	console.log("Hello");

	return (
		<Fragment>
			<div className="caroussel-area">
				<Caroussel arrayofpictures={logementPictures}></Caroussel>
			</div>
			<section className="fichelogement">
				<div className="title">
					<h1>{logement.title}</h1>
					<p className="location">{logement.location}</p>
				</div>
				<div className="host">
					<Host name={hostName} picture={hostPicture}></Host>
				</div>
				<div className="tags">
					{tagList.map((tagObject) => (
						<Tag key={tagObject} tag={tagObject}></Tag>
					))}
				</div>
				<div className="rating">
					<Rate rating={logement.rating}></Rate>
				</div>
				<div className="description">
					<Dropdown
						display={""}
						datatype={"typeDescription"}
						data={description}
						header={"Description"}
					></Dropdown>
				</div>
				<div className="equipement">
					<Dropdown
						display={""}
						datatype={"typeList"}
						data={equipementList}
						header={"Equipement"}
					></Dropdown>
					{/* {equipementList.map((equipement) => (
					<Tag key={tagObject} tag={tagObject}></Tag>
				))} */}
				</div>
			</section>
		</Fragment>
	);
}

export default FicheLogement;
