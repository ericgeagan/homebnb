import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addHomeThunk } from "../../../store/homes";

const NewHome = () => {
	const sessionUser = useSelector(state => state.session.user)
	const history = useHistory()
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [address, setAddress] = useState('')
	const [city, setCity] = useState('')
	const [state, setState] = useState('')
	const [zipcode, setZipcode] = useState('')
	const [bedrooms, setBedrooms] = useState(0)
	const [bathrooms , setBathrooms] = useState(0)
	const [beds, setBeds] = useState(0)
	const [max_guests, setMax_guests] = useState(0)
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState(0)
	const [tv, setTv] = useState(false)
	const [ac, setAc] = useState(false)
	const [wifi, setWifi] = useState(false)
	const [workspace, setWorkspace] = useState(false)
	const [kitchen, setKitchen] = useState(false)
	const [fridge, setFridge] = useState(false)
	const [microwave, setMicrowave] = useState(false)
	const [utensils, setUtensils] = useState(false)
	const [grill, setGrill] = useState(false)
	const [parking, setParking] = useState(false)
	let [pic1, setPic1] = useState(null)
	const [errors, setErrors] = useState([])

	const handleSubmit = async (e) => {
		e.preventDefault()

		if(pic1 && !pic1.name.endsWith("pdf") &&
		!pic1.name.endsWith("png") &&
		!pic1.name.endsWith("jpg") &&
		!pic1.name.endsWith( "pdf") &&
		!pic1.name.endsWith("jpeg") &&
		!pic1.name.endsWith("gif")
		){
			setErrors(['File type not allowed'])
			return
		}

		if (!pic1) {
			pic1 = 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22415475/original/025cd735-d7b3-48bf-ab5e-8803b4d4175a.jpeg?im_w=1200'
		}

		const user_id = sessionUser.id

		const newHome = {
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
		}

		console.log(newHome)
		const data = await dispatch(addHomeThunk(newHome))
		if (data) {
			setErrors(data)
		} else {
			history.push('/')
		}
	}

	const updatePic1 = e => {
		const file = e.target.files[0]
		setPic1(file)
	}

	return (
		<div>
			<h1>Create a Home Listing</h1>
			{errors.length > 0 && 
				<ul>
					<p>Please fix the following errors:</p>
					{errors.map((error, idx) => <li key={idx}>{error}</li>)}
				</ul>
			}
			<form onSubmit={e => handleSubmit(e)}>
				<label>Home Name:</label>
				<input
					name='name'
					value={name}
					onChange={e => setName(e.target.value)}
					type='text'
					placeholder="Home Name Here"
				></input>
				<label>Address:</label>
				<input
					name='address'
					value={address}
					onChange={e => setAddress(e.target.value)}
					type='text'
					placeholder="Address"
				></input>
				<label>City:</label>
				<input
					name='city'
					value={city}
					onChange={e => setCity(e.target.value)}
					type='text'
					placeholder="City"
				></input>
				<label>State:</label>
				<input
					name='state'
					value={state}
					onChange={e => setState(e.target.value)}
					type='text'
					placeholder="State"
				></input>
				<label>Zipcode:</label>
				<input
					name='zipcode'
					value={zipcode}
					onChange={e => setZipcode(e.target.value)}
					type='number'
					max='99999'
					placeholder="Zipcode"
				></input>
				<label>Bedrooms:</label>
				<input
					name='bedrooms'
					value={bedrooms}
					onChange={e => setBedrooms(e.target.value)}
					type='number'
				></input>
				<label>Bathrooms:</label>
				<input
					name='bathrooms'
					value={bathrooms}
					onChange={e => setBathrooms(e.target.value)}
					type='number'
				></input>
				<label>Beds:</label>
				<input
					name='beds'
					value={beds}
					onChange={e => setBeds(e.target.value)}
					type='number'
				></input>
				<label>Max Guests:</label>
				<input
					name='max_guests'
					value={max_guests}
					onChange={e => setMax_guests(e.target.value)}
					type='number'
				></input>
				<label>Description:</label>
				<textarea
					rows={5}
					cols={25}
					name='description'
					value={description}
					onChange={e => setDescription(e.target.value)}
					type='text'
					placeholder="Description"
				></textarea>
				<label>Price:</label>
				<input
					name='price'
					value={price}
					onChange={e => setPrice(e.target.value)}
					type='number'
				></input>
				<label>TV</label>
				<input
					name='tv'
					checked={tv}
					onChange={e => setTv(!tv)}
					type='checkbox'
				></input>
				<label>AC</label>
				<input
					name='ac'
					checked={ac}
					onChange={e => setAc(!ac)}
					type='checkbox'
				></input>
				<label>Wifi</label>
				<input
					name='wifi'
					checked={wifi}
					onChange={e => setWifi(!wifi)}
					type='checkbox'
				></input>
				<label>Workspace</label>
				<input
					name='workspace'
					checked={workspace}
					onChange={e => setWorkspace(!workspace)}
					type='checkbox'
				></input>
				<label>Kitchen</label>
				<input
					name='kitchen'
					checked={kitchen}
					onChange={e => setKitchen(!kitchen)}
					type='checkbox'
				></input>
				<label>Fridge</label>
				<input
					name='fridge'
					checked={fridge}
					onChange={e => setFridge(!fridge)}
					type='checkbox'
				></input>
				<label>Microwave</label>
				<input
					name='microwave'
					checked={microwave}
					onChange={e => setMicrowave(!microwave)}
					type='checkbox'
				></input>
				<label>Utensils</label>
				<input
					name='utensils'
					checked={utensils}
					onChange={e => setUtensils(!utensils)}
					type='checkbox'
				></input>
				<label>Grill</label>
				<input
					name='grill'
					checked={grill}
					onChange={e => setGrill(!grill)}
					type='checkbox'
				></input>
				<label>Parking</label>
				<input
					name='parking'
					checked={parking}
					onChange={e => setParking(!parking)}
					type='checkbox'
				></input>
				<label>Image 1</label>
				<input
					name='pic1'
					accept="image/*"
					onChange={updatePic1}
					type='file'
					placeholder="Image 1"
				></input>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default NewHome