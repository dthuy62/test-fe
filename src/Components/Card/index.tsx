import React from "react";
import "./Card.scss";

interface CategoryProps {
    item: {
        id: number;
        title: string;
    }

}


const Card = ({item}: CategoryProps) => {
	const {title} = item;

	return (
		<div className='card'>
			{title}
		</div>
	);
};

export default Card;
