import React from "react";
import "./Dropdown.css";
import { useState } from "react";

function Dropdown(props) {
	const [show, setShow] = useState(false);
    const [data, setData] = useState(props.data);
    // const [header, setHeader] = useState(props.data);

	const clickHandler = () => {
		setShow(!show);
		// setHeader(props.header);

		if (props.datatype === 'typeDescription') {
            const content = props.data;
            setData(content);
		}
        if (props.datatype === 'typeList') {
            const content = props.data.map((element,id) => <li  key={id}>{element}</li>)
            setData(content);
		}
	};
	return (
		<div className="dropdown">
			<div onClick={clickHandler} className={`button ${show?"displayed":""}`}>
				{props.header}
			</div>
			<div className={`display-area ${show?"displayed":""}`}>
                {data}
			</div>
		</div>
	);
}

export default Dropdown;
