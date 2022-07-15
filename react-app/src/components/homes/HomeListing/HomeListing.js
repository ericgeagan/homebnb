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
	const users = useSelector(state => state.session.users)
	const [guests, setGuests] = useState(1)
	const [start_date, setStart_date] = useState(new Date().toISOString().substring(0, 10))
	const [end_date, setEnd_date] = useState(new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)).toISOString().substring(0, 10))
	const [errors, setErrors] = useState([])

	if (!thisHome) {
		history.push('/')
	}

	const dateDiff = (start, end) => {
		const startDate = new Date(start)
		const endDate = new Date(end)
		const diffTime = Math.abs(endDate - startDate);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
		return diffDays
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
						<div>Entire home hosted by {users[thisHome.user_id].username}</div>
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
					<div id='price'>
						<div id='price-cost'>	${thisHome.price}&nbsp;</div>
						<div id='price-night'>night</div>
					</div>
					{errors.length > 0 && 
						<ul>
							<p>Please fix the following errors:</p>
							{errors.map((error, idx) => <li key={idx}>{error}</li>)}
						</ul>
					}
					<form onSubmit={e => handleSubmit(e)}>
						<div id='dates'>
							<div id='input-div'>
								<div>CHECK-IN</div>
								<input
									name='start_date'
									type='date'
									value={start_date}
									onChange={e => setStart_date(e.target.value)}
								></input>
							</div>
							<div id="input-div">
								<div>CHECKOUT</div>
								<input
									name='end_date'
									type='date'
									value={end_date}
									onChange={e => setEnd_date(e.target.value)}
								></input>
							</div>
						</div>
						<div id='input-div-guests'>
							<div id='guests-div'>GUESTS</div>
							<input
								name='guests'
								type='number'
								min={1}
								max={thisHome.max_guests}
								value={guests}
								onChange={e => setGuests(e.target.value)}
							></input>
						</div>
						<button id='reserve' type='submit'>Reserve</button>
						<div id='no-charge'>You won't be charged yet</div>
						<div id='costs-subtotal'>
							<div id='price-per-night'>${thisHome.price} x {dateDiff(start_date, end_date)} nights</div>
							<div id='total'>${thisHome.price * dateDiff(start_date, end_date)}</div>
						</div>
						<div id='costs-service'>
							<div id='price-per-night'>Service fee</div>
							<div id='total'>${Math.round((thisHome.price * dateDiff(start_date, end_date)) * 0.03)}</div>
						</div>
						<div id='costs-total'>
							<div id='total-tag'>Total before taxes</div>
							<div id='total-tag'>${(thisHome.price * dateDiff(start_date, end_date)) + (Math.round((thisHome.price * dateDiff(start_date, end_date)) * 0.03))}</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default HomeListing