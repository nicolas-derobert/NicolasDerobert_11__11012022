import React from "react";
import "./Thumb.css";


function Thumb(props) {
	return (
		<article className="thumb">			        
			<div><img src={props.cover} alt="{props.title}" />
			</div>
			<h2>{props.title}</h2>
		</article>
	);
}

export default Thumb;
