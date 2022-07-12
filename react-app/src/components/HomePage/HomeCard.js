import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
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
				<img id='home-card-image' src={home.pic1}></img>
				<div>{home.name}</div>
				<div>{home.address}</div>
				<div>Wifi: {home.wifi ? 'Yes' : 'No'}</div>
				{home?.user_id === sessionUser?.id ? <button onClick={() => handleEditButton()}>Edit</button> : <div></div> }
				<button onClick={() => handleDelete()}>Delete</button>
			</div>
		</div>
	)
}

export default HomeCard