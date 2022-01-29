import React from "react";
import Star from "../Star/Star";
import "./Rate.css";

function Rate(props) {
    const filledStar = parseInt(props.rating) ;
    const totalNumberOfStar = 5;
    let emptyStar = totalNumberOfStar - filledStar;

	return (
		<div className="rate">
           { [...Array(filledStar)].map((e, i) => <Star status="filled" key={i}></Star>)}
           { [...Array(emptyStar)].map((e, i) => <Star status="empty" key={i}></Star>)}
          {/* { [
  ...Array(committedFieldsToAdd),
].map((value: undefined, index: number) => (
  <Field id={index + 1} key={index} />
))} */}
		</div>
	);
}

export default Rate;
// { [...Array(filledStar)].map((e, i) => <span className="busterCards" key={i}>♦</span>)}
