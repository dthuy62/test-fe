import React from "react";
import "./Button.scss";

interface Props {
    icon?: string;
    content?: string;
    style?: string;
}

const Button = (props: Props) => {
	const {icon, content, style} = props;
	const color = style || "black";

	return (
		<button className={`btn ${content} ${color}`}>
			<img src={icon} alt=""/>
			<p>{content}</p>
		</button>
	);
};

export default Button;
