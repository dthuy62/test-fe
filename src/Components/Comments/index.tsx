import React from "react";
import Button from "../Button";
import Images from "../../Constants/Images";
import "./Comments.scss";
import Comment from "../Comment";
import {commentList} from "../../Utils/data";


const Comments = () => (
	<>
		<section className="comment-header">
			<p className="comment-header__title">Comments</p>
			<div className="write-comment-box">
				<input className="add-comment" type="text" placeholder="Write a comment now......"/>
				<Button icon={Images.ENTER_CMT}/>
			</div>

		</section>
		<div className="comment-list">
			{
				commentList.map((item, idx) => (
					<Comment key={idx} item={item}/>
				))
			}
		</div>
		<Button content="More comments" style="white" icon={Images.ENTER_BLACK}/>
	</>

);

export default Comments;
