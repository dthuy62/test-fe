import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {categoryList} from "../../Utils/data";
import Card from "../Card";
import "./Slider.scss";
import {Movie} from "../../Utils/Interfaces";
import MovieList from "../MovieList";
import {Detail} from "../../Pages/Home";

interface Props {
    movies?: Movie[];
    viewDetail?: Detail;
    setDetail?: React.Dispatch<React.SetStateAction<Detail>>;
}

const Carousel = (props: Props) => {
	const {movies, viewDetail, setDetail} = props;

	const selectMovie = (id: number) => {
		if (!viewDetail?.isOpened) {
			if (setDetail) {
				setDetail({
					id,
					isOpened: true,
				});
			}
			document.body.style.overflow = "hidden";
		}
	};

	const settings = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 6,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const renderCategories = categoryList.map((item, idx) => (
		<Card key={idx} item={item}/>
	));

	const renderListMovie = movies?.map((item, idx) => (
		<div key={idx} onClick={() => selectMovie(item.id)}>
			<MovieList
				movies={movies}
				id={item.id}
				title={item.title}
				background_image={item.background_image}
				viewDetail={viewDetail}
				setDetail={setDetail}
			/>
		</div>

	));

	return (
		<>
			{
				movies ? (
					<div className='movie-list-horizontal'>
						<Slider {...settings}>
							{renderListMovie}
						</Slider>
					</div>
				) : (
					<div className='category-list'>
						<Slider {...settings}>
							{renderCategories}

						</Slider>
					</div>
				)
			}
		</>


	);
};

export default Carousel;
