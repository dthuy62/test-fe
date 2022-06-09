import React from "react";
import Images from "../../../Constants/Images";
import "./AmountFeeling.scss";

interface Props {
    amountLike: number;
    amountView: number;
    amountFollower?: number;
}

const AmountFeeling = (props: Props) => {
	const {amountLike, amountView, amountFollower} = props;

	return (
		<div className="amount-feeling">
			<div className={`amount-feeling__like`}>
				<img src={Images.IC_LIKE_BLACK} alt=""/>
				<p>{amountLike}</p>
			</div>
			<div className={`amount-feeling__view`}>
				<img src={Images.IC_VIEW} alt=""/>
				<p>{amountView}</p>
			</div>
			{
				amountFollower && <div className={`amount-feeling__follower`}>
					<img src={Images.IC_FOLLOWER_BLACK} alt=""/>
					<p>{amountFollower}</p>
				</div>
			}

		</div>
	);
};

export default AmountFeeling;
