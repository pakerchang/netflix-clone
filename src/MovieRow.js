import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import movieTrailer from "movie-trailer";
import "./MovieRow.css";

const base_url = "https://image.tmdb.org/t/p/original";

function MovieRow({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		// if (trailerUrl) {
		// 	setTrailerUrl("");
		// } else {
		// 	movieTrailer(movie?.name || "")
		// 		.then((url) => {
		// 			const urlParams = new URLSearchParams(
		// 				new URL(url).search
		// 			);
		// 			setTrailerUrl(urlParams.get("v"));
		// 		})
		// 		.catch((error) => console.log(error));
		// }

		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.name || "")
				.then((url) => {
					const urlParams = new URLSearchParams(
						new URL(url).search
					);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get(fetchUrl);
			setMovies(req.data.results);
			return req;
		}
		fetchData();
	}, [fetchUrl]);

	return (
		<div className="movieRow">
			<h2>{title}</h2>
			<div className="row__poster">
				{movies.map((movie) => (
					<img
						key={movie.id}
						onClick={() => handleClick(movie)}
						className={`posters__image ${
							isLargeRow && "poster__largeRow"
						}`}
						src={`${base_url}${
							isLargeRow
								? movie.poster_path
								: movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
			{trailerUrl && (
				<YouTube videoId={trailerUrl} opts={opts} />
			)}
		</div>
	);
}

export default MovieRow;
