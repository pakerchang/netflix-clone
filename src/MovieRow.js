import React, {
	useEffect,
	useRef,
	useState,
} from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import movieTrailer from "movie-trailer";
import "./MovieRow.css";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const base_url = "https://image.tmdb.org/t/p/original";

function MovieRow({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");
	const rowRef = useRef(null);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.name || "")
				.then((url) => {
					const urlParams = new URLSearchParams(
						new URL(url).search
					);
					console.log(urlParams);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) =>
					console.log("error message : " + error)
				);
		}
	};

	// scroll button click 
	const scroll = (scrollOffset) => {
		rowRef.current.scrollLeft += scrollOffset;
	};

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get(fetchUrl);
			setMovies(req.data.results);
			// console.log(req);
			return req;
		}
		fetchData();
	}, [fetchUrl]);

	return (
		<div className="movieRow">
			<h2>{title}</h2>

			<div className="row__poster" ref={rowRef}>
				<div
					className="row__scrollBtn scrollArrow__back"
					onClick={() => scroll(-420)}>
					<ArrowBackIosIcon />
				</div>

				{movies.map((movie) => (
					<img
						key={movie.id}
						onClick={() => handleClick(movie)}
						className={`posters__image ${
							isLargeRow && "poster__largeRow"
						}`}
						src={`${base_url}${movie.poster_path}`}
						alt={movie.name}
					/>
				))}
				<div
					className="row__scrollBtn scrollArrow__forward"
					onClick={() => scroll(420)}>
					<ArrowForwardIosIcon />
				</div>
			</div>

			{trailerUrl && (
				<YouTube videoId={trailerUrl} opts={opts} />
			)}
		</div>
	);
}

export default MovieRow;
