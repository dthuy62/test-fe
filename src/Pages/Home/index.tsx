import axios from "axios";
import React, {useEffect, useState} from "react";
import Header from "../../Components/Header";
import Carousel from "../../Components/Slider";
import MovieColection from "../../Components/MovieColection";
import {Movie} from "../../Utils/Interfaces";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";


export interface Detail {
    id: number;
    isOpened: boolean;

}

const headers = {
	"Content-Type": "application/json;charset=UTF-8",
	"Access-Control-Allow-Origin": "*",
	Accept: "application/json",
};


const Home = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	// eslint-disable-next-line no-unused-vars
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);

	const [viewDetail, setDetail] = useState<Detail>({
		id: 0,
		isOpened: false,
	});

	useEffect(() => {
		const getMovie = async () => {
			try {
				const res = await axios.get(`api/v2/list_movies.json?limit=25&page=${page}`, {
					headers,
					data: {},
				});

				setMovies([...movies, ...res.data.data.movies]);

				setLoading(false);
			} catch (err) {

			}
		};

		getMovie();
	}, [page]);


	return (
		<div className="home-page">
			<Header/>
			<Carousel/>
			<MovieColection
				movies={movies}
				viewDetail={viewDetail}
				setDetail={setDetail}
				page={page}
				setPage={setPage}
			/>
			<Banner
				movies={movies}
				viewDetail={viewDetail}
				setDetail={setDetail}
				page={page}
				setPage={setPage}
			/>

			<Carousel
				movies={movies}
				viewDetail={viewDetail}
				setDetail={setDetail}
			/>
			<Footer/>


		</div>
	);
};

export default Home;
