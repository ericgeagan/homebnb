const ADD_BOOKING = '/booking/add'
const GET_BOOKINGS = '/booking/all'
const DELETE_BOOKING = '/booking/delete'

const actionAddBooking = booking => {
	return {
		type: ADD_BOOKING,
		booking
	}
}

const actionAllBooking = bookings => {
	return {
		type: GET_BOOKINGS,
		bookings
	}
}

const actionDeleteBooking = bookingId => {
	return {
		type: DELETE_BOOKING,
		bookingId
	}
}

export const getAllBookingsThunk = () => async dispatch => {
	const response = await fetch('/api/bookings')
	const data = await response.json()
	if (response.ok) {
		dispatch(actionAllBooking(data))
	}
}

export const deleteBookingThunk = bookingId => async dispatch => {
	const response = await fetch(`/api/bookings/${bookingId}`, {
		method: 'DELETE'
	})
	if (response.ok) {
		await dispatch(actionDeleteBooking(bookingId))
		return 'Success'
	}
}

export const addBookingThunk = newBooking => async dispatch => {
	const {
		user_id,
		home_id,
		guests,
		start_date,
		end_date
	} = newBooking

	const formData = new FormData()
	formData.append('user_id', user_id)
	formData.append('home_id', home_id)
	formData.append('guests', guests)
	formData.append('start_date', start_date)
	formData.append('end_date', end_date)

	const response = await fetch('/api/bookings', {
		method: "POST",
		body: formData
	})

	const data = await response.json()
	if (response.ok) {
		dispatch(actionAddBooking(data))
		return null
	} else if (response.status < 500) {
		if (data.errors) {
			return data.errors
		}
	} else {
		return ['An error occurred. Please try again.']
	}
}

export const editBookingThunk = editBooking => async dispatch => {
	const {
		bookingId,
		user_id,
		home_id,
		guests,
		start_date,
		end_date
	} = editBooking

	const formData = new FormData()
	formData.append('user_id', user_id)
	formData.append('home_id', home_id)
	formData.append('guests', guests)
	formData.append('start_date', start_date)
	formData.append('end_date', end_date)

	const response = await fetch(`/api/bookings/${bookingId}`, {
		method: "PUT",
		body: formData
	})

	const data = await response.json()
	if (response.ok) {
		dispatch(actionAddBooking(data))
		return null
	} else if (response.status < 500) {
		if (data.errors) {
			return data.errors
		}
	} else {
		return ['An error occurred. Please try again.']
	}
}

const bookingReducer = (state = {}, action) => {
	let newState = {}
	switch (action.type) {
		case ADD_BOOKING:
			newState = { ...state, [action.booking.id]: action.booking}
			return newState
		case GET_BOOKINGS:
			newState = { ...state }
			action.bookings.bookings.forEach(booking => {
				newState[booking.id] = booking
			})
			return newState
		case DELETE_BOOKING:
			newState = { ...state }
			delete newState[action.bookingId]
			return newState
		default:
			return state
	}
}

export default bookingReducer