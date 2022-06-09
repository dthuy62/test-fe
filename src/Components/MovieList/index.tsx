import React, {useEffect, useState} from "react";
import "./MovieList.scss";
import {Detail} from "../../Pages/Home";
import Modal from "../Modal";
import AmountFeeling from "../Common/AmountFeeling";
import Images from "../../Constants/Images";
import {Movie} from "../../Utils/Interfaces";

interface Props {
    movies?: Movie[];

    id: number;
    title: string;
    background_image: string;

    viewDetail?: Detail;
    setDetail?: React.Dispatch<React.SetStateAction<Detail>>;
    style?: string;
    firstEl?: string | null;
	moviesList?: Movie[]
}

const MovieList = (props: Props) => {
	const {id, title, background_image, viewDetail, setDetail, firstEl, movies, moviesList} = props;


	const [isSelected, setIsSelected] = useState(false);

	useEffect(() => {
		setIsSelected(id === viewDetail?.id);
	}, [viewDetail]);

	const closeDetail = () => {
		if (setDetail) {
			setDetail({
				id: 0,
				isOpened: false,
			});
		}
		document.body.style.overflow = "unset";
	};

	return (
		<>
			{
				isSelected ? (
					<section className='modal'>
						<Modal
							moviesList={moviesList}
							title={title}
							background_image={background_image}
							movies={movies}
							firstEl={firstEl}
						/>
						<p className="modal__btn-close" onClick={closeDetail}>X</p>
					</section>
				) : (
					<div className="movie-card">
						{
							firstEl && <img className="tz-label" src={Images.LABEL_TZ} alt="tz-label"/>
						}
						<div className='movie-card__thumbnail'>
							<picture><img src={background_image} alt="thumbnail_image"/></picture>
							<div className="movie-card__thumbnail--hover">
								<p>This is the space that
                                    contains the video......
								</p>
								<p>02:33</p>
							</div>
						</div>
						<div className="movie-card__desc">
							<div className="movie-card__desc-author">
								<img src={Images.AVATAR} alt="author"/>
								<p>{title.length > 15 ? `${title.slice(0, 14)}...` : title}</p>
							</div>
							<AmountFeeling amountLike={18} amountView={18}/>
						</div>
					</div>
				)
			}
		</>

	);
};

export default MovieList;
