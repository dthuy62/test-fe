import React from "react";
import "./Ticket.scss";

interface Props {
    content: string;
    style?: string;
}

const Ticket = (props: Props) => {
	const {content, style} = props;

	return (
		<button className={`ticket-label ${content} ${style}`}>{content}</button>
	);
};

export default Ticket;
