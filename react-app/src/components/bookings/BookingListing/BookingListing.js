import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { deleteBookingThunk } from "../../../store/bookings"
import './bookingListing.css'

const BookingListing = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user)
	const bookings = Object.values(useSelector(state => state.bookings)).filter(booking => booking.user_id === sessionUser?.id)
	const homes = useSelector(state => state.homes)

	if (!sessionUser) {
		history.push('/')
	}

	const handleDelete = async (bookingId) => {
		await dispatch(deleteBookingThunk(bookingId))
	}

	const handleEditButton = (bookingId) => {
		history.push(`/bookings/${bookingId}/edit`)
	}

	return (
		<div id='container'>
			{bookings.map(booking => (
				<div>
					<div>{booking.guests} Guests at {homes[booking.home_id].name}</div>
					<button onClick={() => handleEditButton(booking.id)}>Edit</button>
					<button onClick={() => handleDelete(booking.id)}>Delete</button>
				</div>
			))}
		</div>
	)
}

export default BookingListing