import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deleteHomeThunk } from '../../store/homes'
import './homeCard.css'

const HomeCard = ({home}) => {
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
				<button onClick={() => handleEditButton()}>Edit</button>
				<button onClick={() => handleDelete()}>Delete</button>
			</div>
		</div>
	)
}

export default HomeCard