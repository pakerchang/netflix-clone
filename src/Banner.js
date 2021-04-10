import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get(
				requests.fetchNetflixOriginals
			);
			setMovie(
				req.data.results[
					Math.floor(
						Math.random() * req.data.results.length - 1
					)
				]
			);
		}
		fetchData();
	}, []);
	// console.log(movie);
	const truncate = (str, n) => {
		return str?.length > n
			? str.substr(0, n - 1) + "..."
			: str;
	};
	return (
		<header
			className="banner"
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
				backgroundSize: "cover",
				width:"100%",
			}}>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.name ||
						movie?.title ||
						movie?.original_name}
				</h1>
				<div className="banner__btns">
					<button className="banner__btn">播放</button>
					<button className="banner__btn">我的片單</button>
				</div>
				<h1 className="banner__description">
					{truncate(movie?.overview, 200)}
				</h1>
			</div>
			<div className="banner__fadeBottom" />
		</header>
	);
}

export default Banner;
