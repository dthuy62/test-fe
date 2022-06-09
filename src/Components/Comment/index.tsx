import React from "react";
import "./Comment.scss";
import Images from "../../Constants/Images";

interface Props {
    item: {
        id: number;
        content: string;
        avatar: string;
        time: string;
        owner: string
    }
}

const Comment = ({item}: Props) => {
	const {content, avatar, time, owner} = item;

	return (
		<div className="comment-card">
			<div className="comment-card-header">
				<div className="comment-card__owner">
					<img src={avatar} alt="avatar" />
					<div className="comment-card__owner-info">
						<p>{owner}</p>
						<p>{time}</p>
					</div>
				</div>
				<div className="actions">
					<img src={Images.IC_RM} alt="remove" />
					<img src={Images.IC_RP} alt="report" />
				</div>
			</div>

			<div className="comment-card__content">
				{content}
			</div>

		</div>
	);
};

export default Comment;
