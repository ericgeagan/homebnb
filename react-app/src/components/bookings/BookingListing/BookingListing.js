import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"

const BookingListing = () => {
	const history = useHistory()
	const sessionUser = useSelector(state => state.session.user)
	const bookings = Object.values(useSelector(state => state.bookings)).filter(booking => booking.user_id === sessionUser?.id)
	const homes = useSelector(state => state.homes)

	if (!sessionUser) {
		history.push('/')
	}

	return (
		<div>
			{bookings.map(booking => (
				<div>
					<div>{booking.guests} Guests at {homes[booking.home_id].name}</div>
				</div>
			))}
		</div>
	)
}

export default BookingListing