import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { deleteBookingThunk, editBookingThunk } from "../../../store/bookings"

const EditBooking = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const bookingId = useParams().id
	const sessionUser = useSelector(state => state.session.user)
	const thisBooking = useSelector(state => state.bookings)[bookingId]
	const [guests, setGuests] = useState(thisBooking?.guests || 0)
	const [start_date, setStart_date] = useState(new Date(thisBooking?.start_date || "2022-01-01").toISOString().substring(0,10) || '')
	const [end_date, setEnd_date] = useState(new Date(thisBooking?.end_date || "2022-01-02").toISOString().substring(0,10) || '')
	const [errors, setErrors] = useState([])

	useEffect(() => {
		if (thisBooking?.user_id !== sessionUser?.id) {
			history.push('/')
		}
	}, [history, sessionUser?.id, thisBooking?.user_id])

	const handleEdit = async (e) => {
		e.preventDefault()

		const user_id = sessionUser.id

		const newBooking = {
			bookingId,
			user_id,
			home_id: thisBooking.home_id,
			guests,
			start_date,
			end_date
		}
		
		const data = await dispatch(editBookingThunk(newBooking))
		if (data) {
			setErrors(data)
		} else {
			alert('Booking Changed!')
			history.push('/bookings')
		}
	}

	return (
		<div>
			<form onSubmit={e => handleEdit(e)}>
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
						max={thisBooking.max_guests}
						value={guests}
						onChange={e => setGuests(e.target.value)}
					></input>
				</div>
				<button id='reserve' type='submit'>Edit</button>
			</form>
		</div>
	)
}

export default EditBooking