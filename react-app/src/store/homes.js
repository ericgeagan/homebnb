const ADD_HOME = '/home/add'
const GET_HOMES = '/home/all'
const DELETE_HOME = '/home/delete'

const actionAddHome = home => {
	return {
		type: ADD_HOME,
		home
	}
}

const actionAllHome = homes => {
	return {
		type: GET_HOMES,
		homes
	}
}

const actionDeleteHome = homeId => {
	return {
		type: DELETE_HOME,
		homeId
	}
}

export const getAllHomesThunk = () => async dispatch => {
	const response = await fetch('/api/homes')
	const data = await response.json()
	if (response.ok) {
		dispatch(actionAllHome(data))
	}
}

export const deleteHomeThunk = homeId => async dispatch => {
	const response = await fetch(`/api/homes/${homeId}`, {
		method: 'DELETE'
	})
	if (response.ok) {
		await dispatch(actionDeleteHome(homeId))
		return 'Success'
	}
}

export const addHomeThunk = newHome => async dispatch => {
	const {
		user_id,
		name,
		address,
		city,
		state,
		zipcode,
		bedrooms,
		bathrooms,
		beds,
		max_guests,
		description,
		price,
		tv,
		ac,
		wifi,
		workspace,
		kitchen,
		fridge,
		microwave,
		utensils,
		grill,
		parking,
		pic1,
	} = newHome

	const formData = new FormData()
	formData.append('user_id', user_id)
	formData.append('name', name)
	formData.append('address', address)
	formData.append('city', city)
	formData.append('state', state)
	formData.append('zipcode', zipcode)
	formData.append('bedrooms', bedrooms)
	formData.append('bathrooms', bathrooms)
	formData.append('beds', beds)
	formData.append('max_guests', max_guests)
	formData.append('description', description)
	formData.append('price', price)
	formData.append('tv', tv)
	formData.append('ac', ac)
	formData.append('wifi', wifi)
	formData.append('workspace', workspace)
	formData.append('kitchen', kitchen)
	formData.append('fridge', fridge)
	formData.append('microwave', microwave)
	formData.append('utensils', utensils)
	formData.append('grill', grill)
	formData.append('parking', parking)
	formData.append('pic1', pic1)

	const response = await fetch('/api/homes', {
		method: "POST",
		body: formData
	})

	const data = await response.json()
	if (response.ok) {
		dispatch(actionAddHome(data))
		return null
	} else if (response.status < 500) {
		if (data.errors) {
			return data.errors
		}
	} else {
		return ['An error occurred. Please try again.']
	}
}

export const editHomeThunk = editHome => async dispatch => {
	const {
		homeId,
		user_id,
		name,
		address,
		city,
		state,
		zipcode,
		bedrooms,
		bathrooms,
		beds,
		max_guests,
		description,
		price,
		tv,
		ac,
		wifi,
		workspace,
		kitchen,
		fridge,
		microwave,
		utensils,
		grill,
		parking,
		pic1,
	} = editHome

	const formData = new FormData()
	formData.append('user_id', user_id)
	formData.append('name', name)
	formData.append('address', address)
	formData.append('city', city)
	formData.append('state', state)
	formData.append('zipcode', zipcode)
	formData.append('bedrooms', bedrooms)
	formData.append('bathrooms', bathrooms)
	formData.append('beds', beds)
	formData.append('max_guests', max_guests)
	formData.append('description', description)
	formData.append('price', price)
	formData.append('tv', tv)
	formData.append('ac', ac)
	formData.append('wifi', wifi)
	formData.append('workspace', workspace)
	formData.append('kitchen', kitchen)
	formData.append('fridge', fridge)
	formData.append('microwave', microwave)
	formData.append('utensils', utensils)
	formData.append('grill', grill)
	formData.append('parking', parking)
	formData.append('pic1', pic1)

	const response = await fetch(`/api/homes/${homeId}`, {
		method: "PUT",
		body: formData
	})

	const data = await response.json()
	if (response.ok) {
		dispatch(actionAddHome(data))
		return null
	} else if (response.status < 500) {
		if (data.errors) {
			return data.errors
		}
	} else {
		return ['An error occurred. Please try again.']
	}
}

const homeReducer = (state = {}, action) => {
	let newState = {}
	switch (action.type) {
		case ADD_HOME:
			newState = { ...state, [action.home.id]: action.home }
			return newState
		case GET_HOMES:
			newState = { ...state }
			// console.log(action.homes)
			action.homes.homes.forEach(home => {
				newState[home.id] = home
			})
			return newState
		case DELETE_HOME:
			newState = { ...state }
			delete newState[action.homeId]
			return newState
		default:
			return state
	}
}

export default homeReducer