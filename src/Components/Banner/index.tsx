import React from "react";
import Images from "../../Constants/Images";
import Button from "../Button";
import "./Banner.scss";
import {Movie} from "../../Utils/Interfaces";
import {Detail} from "../../Pages/Home";
import AmountFeeling from "../Common/AmountFeeling";

interface Props {
    movies: Movie[];
    viewDetail: Detail;
    setDetail: React.Dispatch<React.SetStateAction<Detail>>;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Banner = (props: Props) => (
	<div className="banner">
		<div className="banner__inner">
			<div className="banner__inner-title">
				<p className="subTitle">TUTORIAL</p>
				<p className="desc">Let's look at 7 ways
                        to use motion trend
                        more effectively
                        in the first tutorial.</p>
				<Button content="watch now "/>
			</div>
			<div className="banner__inner-video">
				<img src={Images.VIDEO_THUMB_LIVE} alt=""/>
				<img className="btn-play" src={Images.BUTTON_PLAY} alt=""/>
				<img className="live-label" src={Images.LABEL_LIVE} alt=""/>
				<p className="time">02:33</p>
			</div>
			<div className="banner__inner-mini-slider">
				<div className="mini-slider__movie">
					<div className="thumbnail">
						<picture>
							<img src={Images.IMG_MINI_THUMB_1} alt=""/>
						</picture>
					</div>
					<div className="desc">
						<h3>Tutorial</h3>
						<p>A tutorial video with Motion Trend. Let's Learn
                                Motion Trends.
						</p>
						<AmountFeeling amountLike={18} amountView={18}/>
					</div>
				</div>
				<div className="mini-slider__movie">
					<div className="thumbnail">
						<picture>
							<img src={Images.IMG_MINI_THUMB_2} alt=""/>
						</picture>
					</div>
					<div className="desc">
						<h3>Tutorial</h3>
						<p>A tutorial video with Motion Trend. Let's Learn
                                Motion Trends.
						</p>
						<AmountFeeling amountLike={18} amountView={18}/>
					</div>
				</div>
				<div className="mini-slider__movie">
					<div className="thumbnail">
						<picture>
							<img src={Images.IMG_MINI_THUMB_3} alt=""/>
						</picture>
					</div>
					<div className="desc">
						<h3>Tutorial</h3>
						<p>A tutorial video with Motion Trend. Let's Learn
                                Motion Trends.
						</p>
						<AmountFeeling amountLike={18} amountView={18}/>
					</div>
				</div>
			</div>
		</div>


	</div>
);

export default Banner;
