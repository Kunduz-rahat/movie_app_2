import React, { useState, useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import tmdbApi, { category, movieType } from "../../api/tmdb";
import apiConfig from "../../api/apiConfig";

import './index.scss';


const HeroSlide = () => {
	SwiperCore.use([Autoplay])
	const [movieItems, setMovieItems] = useState([]);
	useEffect(() => {
		const getMovies = async () => {
			const params = { page: 1 }
			try {
				const response = await tmdbApi.getMovieList(movieType.popular, { params });
				setMovieItems(response.results.slice(0, 5))
				console.log(response)
			} catch {
				console.log('error')
			}
		}
		getMovies();
	}, [])
	return (
		<div className="hero-slide">
			<Swiper
				modules={[Autoplay]}
				grabCursor={true}
				spaceBetween={0}
				slidesPerView={1}
			>
				{movieItems.map((item, index) => (
					<SwiperSlide key={index}>
						{({ isActive }) => (
							<img src={apiConfig.originalImage(item.backdrop_path)} />
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default HeroSlide;