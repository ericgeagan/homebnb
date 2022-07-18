import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { addBookingThunk, getAllBookingsThunk } from "../../../store/bookings"
import { deleteHomeThunk } from "../../../store/homes"
import { getAllUsersThunk } from "../../../store/session"
import './homeListing.css'
// import Calendar from 'react-calendar';

const HomeListing = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const home_id = useParams().id
  const sessionUser = useSelector(state => state?.session?.user)

	if (!sessionUser) {
		history.push('/')
	}
	
	const thisHome = useSelector(state => state?.homes)[home_id]
	const users = useSelector(state => state?.session?.users)
	const bookings = Object.values(useSelector(state => state?.bookings)).filter(booking => booking?.home_id === thisHome?.id)
	const [guests, setGuests] = useState(1)
	const [start_date, setStart_date] = useState(new Date().toISOString().substring(0, 10))
	// const [start_date, setStart_date] = useState(new Date())
	const [end_date, setEnd_date] = useState(new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)).toISOString().substring(0, 10))
	const [errors, setErrors] = useState([])

	if (!thisHome) {
		history.push('/')
	}

	useEffect(() => {
    (async() => {
      // await dispatch(authenticate());
      // await dispatch(getAllHomesThunk())
      await dispatch(getAllUsersThunk())
    })();
  }, [dispatch]);

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

	const handleSubmit = async (e) => {
		e.preventDefault()

		const user_id = sessionUser.id

		if (new Date(start_date) >= new Date(end_date)) {
			setErrors(['Checkout must be at least one day after check-in'])
		} else if(existingDate(start_date, end_date)) {
			setErrors(['These dates are fully booked. Please change your check-in and checkout dates.'])
		} else {
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
				// alert('Booking Made!')
				setErrors([])
				history.push('/bookings')
			}
		}
	}

	const handleDelete = async () => {
		await dispatch(deleteHomeThunk(thisHome?.id))
		await dispatch(getAllBookingsThunk())
	}

	const handleEditButton = () => {
		history.push(`/homes/${thisHome?.id}/edit`)
	}


	return (
		<div id='container'>
			<div id='title-name'>{thisHome?.name}</div>
			<div id='city-state'>{thisHome?.address} {thisHome?.city}, {thisHome?.state} {thisHome?.zipcode}</div>
			<img id='home-listing-image' src={thisHome?.pic1 || 'https://user-images.githubusercontent.com/47315479/81145216-7fbd8700-8f7e-11ea-9d49-bd5fb4a888f1.png'}></img>
			<div id='details-container'>
				<div id='details'>
					<div id='details-header'>
						<div id='hosted'>Entire home hosted by {users ? users[thisHome?.user_id]?.username : ''}</div>
						<div id='details-beds'>
							<div id='details-beds-item'>{thisHome?.max_guests} guests ·&nbsp;</div>
							<div id='details-beds-item'>{thisHome?.bedrooms} bedrooms ·&nbsp;</div>
							<div id='details-beds-item'>{thisHome?.beds} beds ·&nbsp;</div>
							<div id='details-beds-item'>{thisHome?.bathrooms} bathrooms</div>
						</div>
					</div>
					<div id='buttons-div'>
						{thisHome?.user_id === sessionUser?.id ? <button id='reserve' onClick={() => handleEditButton()}>Edit</button> : <div></div> }
						{thisHome?.user_id === sessionUser?.id ? <button id='reserve' onClick={() => handleDelete()}>Delete</button> : <div></div> }
					</div>
					<div>
						<div id='details-amenities-header'>About this space</div>
						<div id='description'>{thisHome?.description}</div>
					</div>
					<div id='details-amenities'>
						<div id='details-amenities-header'>What this place offers</div>
						{thisHome?.tv && <div id='amenity'><i className="fa-solid fa-tv"></i>&nbsp;&nbsp;TV with standard cable</div>}
						{thisHome?.ac && <div id='amenity'><i className="fa-solid fa-temperature-low"></i>&nbsp;&nbsp; Central air conditioning</div>}
						{thisHome?.wifi && <div id='amenity'><i className="fa-solid fa-wifi"></i>&nbsp;&nbsp;Wifi</div>}
						{thisHome?.workspace && <div id='amenity'><i className="fa-solid fa-briefcase"></i>&nbsp;&nbsp; Dedicated workspace</div>}
						{thisHome?.kitchen && <div id='amenity'><i className="fa-solid fa-kitchen-set"></i>&nbsp;&nbsp; Kitchen</div>}
						{thisHome?.fridge && <div id='amenity'><i className="fa-solid fa-snowflake"></i>&nbsp;&nbsp; Refrigerator</div>}
						{thisHome?.microwave && <div id='amenity'><i className="fa-solid fa-mug-hot"></i>&nbsp;&nbsp; Microwave</div>}
						{thisHome?.utensils && <div id='amenity'><i className="fa-solid fa-utensils"></i>&nbsp;&nbsp; Dishes and silverware</div>}
						{thisHome?.grill && <div id='amenity'><i className="fa-solid fa-fire-burner"></i>&nbsp;&nbsp;Barbecue utensils</div>}
						{thisHome?.parking && <div id='amenity'><i className="fa-solid fa-car"></i>&nbsp;&nbsp; Free parking</div>}
					</div>
				</div>
				<div id='booking-form'>
					<div id='price'>
						<div id='price-cost'>	${thisHome?.price}&nbsp;</div>
						<div id='price-night'>night</div>
					</div>
					<div id='errors'>
						{errors.map((error, ind) => (
							<div className="booking-error" id='error' key={ind}>{error}</div>
						))}
        	</div>
					<form onSubmit={e => handleSubmit(e)}>
						<div id='dates'>
							<div id='input-div'>
								<div>CHECK-IN</div>
								{/* <Calendar 
									onChange={e => setStart_date(e.target.value)} 
									value={start_date}
								/> */}
								<input
									name='start_date'
									type='date'
									value={start_date}
									onChange={e => setStart_date(e.target.value)}
									min={new Date().toISOString().substring(0, 10)}
									required
								></input>
							</div>
							<div id="input-div">
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
						<div id='input-div-guests'>
							<div id='guests-div'>GUESTS (MAX: {thisHome?.max_guests})</div>
							<input
								name='guests'
								type='number'
								min={1}
								max={thisHome?.max_guests}
								value={guests}
								onChange={e => setGuests(e.target.value)}
							></input>
						</div>
						<button id='reserve' type='submit'>Reserve</button>
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
	)
}

export default HomeListing