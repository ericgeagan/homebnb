import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import BookingCard from "./BookingCard"
import './bookingListing.css'

const BookingListing = () => {
	const history = useHistory()
	const sessionUser = useSelector(state => state?.session?.user)
	const bookings = Object.values(useSelector(state => state?.bookings)).filter(booking => booking?.user_id === sessionUser?.id).sort((a, b) => {
		const dateFrom = a.start_date
		const dateTo = b.start_date

		const from = Date.parse(dateFrom)
		const to = Date.parse(dateTo)

		// console.log(dateFrom, dateTo)
		return from - to
	})

	if (!sessionUser) {
		history.push('/')
	}

	return (
		<div id='container'>
			<div id='title-message'>Current Bookings for {sessionUser?.username}</div>
			<div id='bookings-container'>
				{bookings?.length > 0 ? bookings.map(booking => (
					<div>
						<BookingCard key={booking?.id} booking={booking}/>
					</div>
				)) : <div id='title-message'>No Trips Currently Booked!</div>}
			</div>
		</div>
	)
}

export default BookingListing