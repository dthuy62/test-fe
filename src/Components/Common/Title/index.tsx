import React from "react";

interface Props {
    title: string;
}

const Title = (props: Props) => {
	const {title} = props;

	return (
		<p>
			{title}
		</p>
	);
};

export default Title;
