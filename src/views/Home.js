import React from "react";
import { Link } from "react-router-dom";
import { OutlineButton } from "../components/Button";
import HeroSlide from "../components/HeroSlide";
import MovieList from "../components/MovieList";
import { category, movieType, tvType } from "../api/tmdb";

const Home = () => {
	return (
		<>
			<HeroSlide />
			<div className='container'>
				<div className="section mb-3">
					<div className="section__header mb-2">
						<h2>Trending Movies</h2>
						<Link to='/movie'>
						<OutlineButton className='small'>
							View more
						</OutlineButton>
						</Link>
					</div>
					<MovieList category={category.movie} type={movieType.popular}/>
				</div>
			</div>
		</>
	)
}

export default Home;