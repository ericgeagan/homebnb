import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { addBookingThunk } from "../../../store/bookings"
import './homeListing.css'

const HomeListing = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const home_id = useParams().id
	const thisHome = useSelector(state => state.homes)[home_id]
  const sessionUser = useSelector(state => state.session.user)
	const [guests, setGuests] = useState(0)
	const [start_date, setStart_date] = useState('')
	const [end_date, setEnd_date] = useState('')
	const [errors, setErrors] = useState([])

	if (!thisHome) {
		history.push('/')
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const user_id = sessionUser.id

		const newBooking = {
			user_id,
			home_id,
			guests,
			start_date,
			end_date
		}
		
		const data = await dispatch(addBookingThunk(newBooking))
		if (data) {
			setErrors(data)
		} else {
			alert('Booking Made!')
		}
	}

	return (
		<div id='container'>
			<h1>{thisHome.name}</h1>
			<div id='city-state'>{thisHome.city}, {thisHome.state}</div>
			<img id='home-listing-image' src={thisHome.pic1}></img>
			<div id='details-container'>
				<div id='details'>
					<div id='details-header'>
						<div>{thisHome.name}</div>
						<div id='details-beds'>
							<div>{thisHome.max_guests} guests</div>
							<div>{thisHome.bedrooms} bedrooms</div>
							<div>{thisHome.beds} beds</div>
							<div>{thisHome.bathrooms} bathrooms</div>
						</div>
					</div>
					<div id='details-amenities'>
						<div id='details-amenities-header'>What this place offers</div>
						{thisHome.tv && <div>TV with standard cable</div>}
					</div>
				</div>
				<div id='booking-form'>
					<div id='price'>${thisHome.price} night</div>
					<form onSubmit={e => handleSubmit(e)}>
						<div id='dates'>
							<label>Start Date:</label>
							<input
								name='start_date'
								type='date'
								value={start_date}
								onChange={e => setStart_date(e.target.value)}
							></input>
							<label>End Date:</label>
							<input
								name='end_date'
								type='date'
								value={end_date}
								onChange={e => setEnd_date(e.target.value)}
							></input>
						</div>
						<div>
							<label>Guests: </label>
							<input
								name='guests'
								type='number'
								min={0}
								max={thisHome.max_guests}
								value={guests}
								onChange={e => setGuests(e.target.value)}
							></input>
						</div>
						<button id='reserve' type='submit'>Reserve</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default HomeListing