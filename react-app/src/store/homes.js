const ADD_HOME = '/home/add'

const actionAddHome = home => {
	return {
		type: ADD_HOME,
		home
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

const homeReducer = (state = {}, action) => {
	let newState = {}
	switch (action.type) {
		case ADD_HOME:
			newState = { ...state, [action.home.id]: action.home }
			return newState
		default:
			return state
	}
}

export default homeReducer