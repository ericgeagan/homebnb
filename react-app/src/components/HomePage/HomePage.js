import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "./HomeCard";

const HomePage = () => {
	const homes = Object.values(useSelector(state => state.homes))
	
	return (
		<div>
			{homes.map(home => <HomeCard key={home.id} home={home} />)}
		</div>
	)
}

export default HomePage