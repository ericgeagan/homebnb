import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { deleteBookingThunk, editBookingThunk } from "../../../store/bookings"
import './editBooking.css'

const EditBooking = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const bookingId = useParams().id
	const sessionUser = useSelector(state => state?.session?.user)
	const thisBooking = useSelector(state => state?.bookings)[bookingId]
	const thisHome = useSelector(state => state.homes)[thisBooking?.home_id]
	const users = useSelector(state => state?.session?.users)
	const bookings = Object.values(useSelector(state => state?.bookings)).filter(booking => booking?.home_id === thisHome?.id && booking.id !== thisBooking.id)
	const [guests, setGuests] = useState(thisBooking?.guests || 0)
	const [start_date, setStart_date] = useState(new Date(thisBooking?.start_date || "2022-01-01").toISOString().substring(0,10) || '')
	const [end_date, setEnd_date] = useState(new Date(thisBooking?.end_date || "2022-01-02").toISOString().substring(0,10) || '')
	const [errors, setErrors] = useState([])

	if (!sessionUser) {
		history.push('/')
	}

	useEffect(() => {
		if (thisBooking?.user_id !== sessionUser?.id) {
			history.push('/')
		}
	}, [history, sessionUser?.id, thisBooking?.user_id])

	const dateDiff = (start, end) => {
		const startDate = new Date(start)
		const endDate = new Date(end)
		const diffTime = Math.abs(endDate - startDate);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
		return diffDays
	}

	const dateBetween = (start, end, check) => {
		const startDate = new Date(start)
		const endDate = new Date(end)
		const checkDate = new Date(check)

		if (checkDate >= startDate && checkDate <= endDate) {
			// Date is between the 2 dates
			return true
		} else {
			return false
		}
	}

	const existingDate = (start, end) => {
		// console.log(bookings)
		if (bookings.some(booking => {
			const test1 = dateBetween(booking.start_date, booking.end_date, start)
			const test2 = dateBetween(booking.start_date, booking.end_date, end)
			const test3 = dateBetween(start, end, booking.start_date)
			const test4 = dateBetween(start, end, booking.end_date)
			return test1 || test2 || test3 || test4
		})) {
			return true
		} else {
			return false
		}
	}

	const handleDelete = async (bookingId) => {
		await dispatch(deleteBookingThunk(bookingId))
		history.push('/bookings')
	}

	const handleEdit = async (e) => {
		e.preventDefault()

		const user_id = sessionUser.id

		if (new Date(start_date) >= new Date(end_date)) {
			setErrors(['Checkout must be at least one day after check-in'])
		} else if(existingDate(start_date, end_date)) {
			setErrors(['These dates are fully booked. Please change your check-in and checkout dates.'])
		} else {
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
				// alert('Booking Changed!')
				history.push('/bookings')
			}
		}
	}

	return (
		<div id='edit-container'>
			<div id="form-header">Edit Your Booking at {thisHome?.name}</div>
			<div>
				<img id='home-edit-image' src={thisHome?.pic1 || 'https://user-images.githubusercontent.com/47315479/81145216-7fbd8700-8f7e-11ea-9d49-bd5fb4a888f1.png'}></img>
			</div>
			<div id='edit-div'>
				{/* <div id='edit-booking'>
					<div className="edit-booking" id="booking-form"></div>
				</div> */}
				<div id='edit-booking'>
					<div className="edit-booking" id='edit-booking-form'>
						<div id='price'>
							<div id='price-cost'>	${thisHome?.price}&nbsp;</div>
							<div id='price-night'>night</div>
						</div>
						<div id='errors'>
							{errors.map((error, ind) => (
								<div className="booking-error" id='error' key={ind}>{error}</div>
							))}
						</div>
						<form onSubmit={e => handleEdit(e)}>
							<div id='dates'>
								<div id='input-div'>
									<div>CHECK-IN</div>
									<input
										name='start_date'
										type='date'
										value={start_date}
										onChange={e => setStart_date(e.target.value)}
										min={new Date().toISOString().substring(0, 10)}
										required
									></input>
								</div>
								<div id='input-div'>
									<div>CHECKOUT</div>
									<input
										name='end_date'
										type='date'
										value={end_date}
										onChange={e => setEnd_date(e.target.value)}
										min={new Date(new Date().getTime() + (1 * 24 * 60 * 60 * 1000)).toISOString().substring(0, 10)}
										required
									></input>
								</div>
							</div>
							<div id="input-div-guests">
								<div id='guests-div'>GUESTS (MAX: {thisHome?.max_guests})</div>
								<input
									name='guests'
									type='number'
									min={1}
									max={thisBooking?.max_guests}
									value={guests}
									onChange={e => setGuests(e.target.value)}
								></input>
							</div>
							<button id='reserve' type='submit'>Update</button>
							<button id='reserve' type='button' onClick={() => handleDelete(thisBooking?.id)}>Cancel Trip</button>
							<div id='no-charge'>You won't be charged yet</div>
							<div id='costs-subtotal'>
								<div id='price-per-night'>${thisHome?.price} x {dateDiff(start_date, end_date)} nights</div>
								<div id='total'>${thisHome?.price * dateDiff(start_date, end_date)}</div>
							</div>
							<div id='costs-service'>
								<div id='price-per-night'>Service fee</div>
								<div id='total'>${Math.round((thisHome?.price * dateDiff(start_date, end_date)) * 0.03)}</div>
							</div>
							<div id='costs-total'>
								<div id='total-tag'>Total before taxes</div>
								<div id='total-tag'>${(thisHome?.price * dateDiff(start_date, end_date)) + (Math.round((thisHome?.price * dateDiff(start_date, end_date)) * 0.03))}</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditBooking