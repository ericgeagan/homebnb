import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { addBookingThunk } from "../../../store/bookings"

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
		<div>
			<h1>{thisHome.name}</h1>
			<img id='home-card-image' src={thisHome.pic1}></img>
			<div>{thisHome.address}</div>
			<form onSubmit={e => handleSubmit(e)}>
				<label>Guests: </label>
				<input
					name='guests'
					type='number'
					min={0}
					max={thisHome.max_guests}
					value={guests}
					onChange={e => setGuests(e.target.value)}
				></input>
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
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default HomeListing