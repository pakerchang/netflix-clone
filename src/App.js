import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import MovieRow from "./MovieRow";
import requests from "./requests";

function App() {
	return (
		<div className="app">
			<Header />
			<Banner />
			<MovieRow
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<MovieRow
				title="熱門"
				fetchUrl={requests.fetchTrending}
			/>
			<MovieRow
				title="好評熱片"
				fetchUrl={requests.fetchTopRated}
			/>
			<MovieRow
				title="動作"
				fetchUrl={requests.fetchActionMovies}
			/>
			<MovieRow
				title="喜劇"
				fetchUrl={requests.fetchComdeyMovies}
			/>
			<MovieRow
				title="恐怖"
				fetchUrl={requests.fetchHorrorMovies}
			/>
			<MovieRow
				title="浪漫"
				fetchUrl={requests.fetchRomanceMovies}
			/>
			<MovieRow
				title="紀錄片"
				fetchUrl={requests.fetchDocumentaries}
			/>
		</div>
	);
}

export default App;
