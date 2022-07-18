import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "./HomeCard";
import './homePage.css'

const HomePage = () => {
	const homes = Object.values(useSelector(state => state.homes)).slice(0, 8)
	
	return (
		<div id='body-container'>
			<div id='home-card-container'>
				{homes.map(home => <HomeCard key={home.id} home={home} />)}
			</div>
		</div>
	)
}

export default HomePage