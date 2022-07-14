import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { deleteHomeThunk } from '../../store/homes'
import './homeCard.css'

const HomeCard = ({home}) => {
	const sessionUser = useSelector(state => state.session.user)
	const dispatch = useDispatch()
	const history = useHistory()

	const handleDelete = async () => {
		await dispatch(deleteHomeThunk(home.id))
	}

	const handleEditButton = () => {
		history.push(`/homes/${home.id}/edit`)
	}

	return (
		<div>
			<div>
				<NavLink to={`/homes/${home.id}`} >
					<img id='home-card-image' alt={home.name} src={home.pic1}></img>
				</NavLink>
				<div>{home.city}, {home.state}</div>
				<div>${home.price} night</div>
				{home?.user_id === sessionUser?.id ? <button onClick={() => handleEditButton()}>Edit</button> : <div></div> }
				{home?.user_id === sessionUser?.id ? <button onClick={() => handleDelete()}>Delete</button> : <div></div> }
			</div>
		</div>
	)
}

export default HomeCard