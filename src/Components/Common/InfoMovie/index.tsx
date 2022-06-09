import React from "react";
import Title from "../Title";
import AmountFeeling from "../AmountFeeling";

interface Props {
    title: string;
}

const InfoMovie = (props: Props) => {
	const {title} = props;

	return (
		<>
			<Title title={title}/>
			<AmountFeeling amountLike={1.688} amountView={18.788} amountFollower={332}/>
			<p className="date">Publishing date : 2020.10.15</p>
		</>


	);
};

export default InfoMovie;
