import React from 'react'
import { NavLink } from 'react-router-dom'
import './homeCard.css'

const HomeCard = ({home}) => {

	return (
		<div>
			<div>
				<NavLink to={`/homes/${home.id}`} >
					<img id='home-card-image' alt={home.name} src={home.pic1 || 'https://user-images.githubusercontent.com/47315479/81145216-7fbd8700-8f7e-11ea-9d49-bd5fb4a888f1.png'}></img>
				</NavLink>
				<div>{home.city}, {home.state}</div>
				<div>${home.price} night</div>
			</div>
		</div>
	)
}

export default HomeCard