import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

const BookingCard = ({booking}) => {
	const history = useHistory()
	const homes = useSelector(state => state?.homes)
	const thisHome = useSelector(state => state?.homes)[booking?.home_id]
	const sessionUser = useSelector(state => state?.session?.user)

	if (!sessionUser) {
		history.push('/')
	}

	const handleEditButton = (bookingId) => {
		history.push(`/bookings/${bookingId}/edit`)
	}

	const dateDiff = (start, end) => {
		const startDate = new Date(start)
		const endDate = new Date(end)
		const diffTime = Math.abs(endDate - startDate);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
		return diffDays
	}

	return (
		<div>
			<div>
				<img id='booking-list-image' src={thisHome?.pic1 || 'https://user-images.githubusercontent.com/47315479/81145216-7fbd8700-8f7e-11ea-9d49-bd5fb4a888f1.png'}></img>
			</div>
			<div id='home-card-text'>Booking at {thisHome?.name}</div>
			<div id='booking-info-text'>CHECK-IN: {booking?.start_date.substring(0, 16)}</div>
			<div id='booking-info-text'>CHECKOUT: {booking?.end_date.substring(0, 16)}</div>
			<div id='home-card-text'>Address</div>
			<div>
				<div id='booking-info-text'>{thisHome?.address}</div>
				<div id='booking-info-text'>{thisHome?.city}</div>
			</div>
			<div id='home-card-text'>Cost: ${(thisHome?.price * dateDiff(booking?.start_date, booking?.end_date)) + (Math.round((thisHome?.price * dateDiff(booking?.start_date, booking?.end_date)) * 0.03))}</div>
			{/* <div id='home-card-text'>{booking?.guests} Guests at {thisHome?.name}</div> */}
			<button id='reserve' onClick={() => handleEditButton(booking?.id)}>Edit</button>
		</div>
	)
}

export default BookingCard