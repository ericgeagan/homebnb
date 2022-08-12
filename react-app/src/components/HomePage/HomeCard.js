import React from 'react'
import { NavLink } from 'react-router-dom'
import './homeCard.css'

const HomeCard = ({home}) => {

	const handleError = (e) => {
		e.target.src = ''
		e.target.src = home.pic1
	}

	return (
		<div>
			<div>
				<NavLink id='home-card-text' to={`/homes/${home.id}`} >
					<img id='home-card-image' onError={e => handleError(e)} alt={home.name} src={home.pic1 || 'https://user-images.githubusercontent.com/47315479/81145216-7fbd8700-8f7e-11ea-9d49-bd5fb4a888f1.png'}></img>
					<div id='home-card-text'>{home.city}, {home.state}</div>
					<div id='home-card-text'>${home.price} night</div>
				</NavLink>
			</div>
		</div>
	)
}

export default HomeCard