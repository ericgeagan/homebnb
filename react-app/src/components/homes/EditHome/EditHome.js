import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { editHomeThunk } from "../../../store/homes";

const EditHome = () => {
	const sessionUser = useSelector(state => state?.session?.user)
	const homeId = useParams().id
	const thisHome = useSelector(state => state?.homes)[homeId]
	const history = useHistory()
	const dispatch = useDispatch()
	const [name, setName] = useState(thisHome?.name || '')
	const [address, setAddress] = useState(thisHome?.address || '')
	const [city, setCity] = useState(thisHome?.city || '')
	const [state, setState] = useState(thisHome?.state || '')
	const [zipcode, setZipcode] = useState(thisHome?.zipcode || '')
	const [bedrooms, setBedrooms] = useState(thisHome?.bedrooms || 1)
	const [bathrooms , setBathrooms] = useState(thisHome?.bathrooms || 1)
	const [beds, setBeds] = useState(thisHome?.beds || 1)
	const [max_guests, setMax_guests] = useState(thisHome?.max_guests || 1)
	const [description, setDescription] = useState(thisHome?.description || '')
	const [price, setPrice] = useState(thisHome?.price || 1)
	const [tv, setTv] = useState(thisHome?.tv || false)
	const [ac, setAc] = useState(thisHome?.ac || false)
	const [wifi, setWifi] = useState(thisHome?.wifi || false)
	const [workspace, setWorkspace] = useState(thisHome?.workspace || false)
	const [kitchen, setKitchen] = useState(thisHome?.kitchen || false)
	const [fridge, setFridge] = useState(thisHome?.fridge || false)
	const [microwave, setMicrowave] = useState(thisHome?.microwave || false)
	const [utensils, setUtensils] = useState(thisHome?.utensils || false)
	const [grill, setGrill] = useState(thisHome?.grill || false)
	const [parking, setParking] = useState(thisHome?.parking || false)
	let [pic1, setPic1] = useState(null)
	const [errors, setErrors] = useState([])

	if (!sessionUser) {
		history.push('/')
	}

	useEffect(() => {
		if (thisHome?.user_id !== sessionUser?.id) {
			history.push('/')
		}
	}, [history, sessionUser?.id, thisHome?.user_id])

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

		const user_id = sessionUser?.id

		const newHome = {
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
		}

		const data = await dispatch(editHomeThunk(newHome))
		if (data) {
			setErrors(data)
		} else {
			history.push(`/homes/${thisHome.id}`)
		}
	}

	const updatePic1 = e => {
		const file = e.target.files[0]
		setPic1(file)
	}

	return (
		<div id='new-home'>
			<div id='form-header'>Edit Home Listing</div>
			<div id='notice'><p>Required fields</p>&nbsp;are in red and marked with an&nbsp;<p>*</p></div>
			<form id='form' onSubmit={e => handleSubmit(e)}>
				<div id='errors'>
          {errors.map((error, ind) => (
            <div id='error' key={ind}>{error}</div>
          ))}
        </div>
				<div id='form-box'>
					<label id='required'>Home Name *</label>
					<input
						id='home-input'
						name='name'
						value={name}
						onChange={e => setName(e.target.value)}
						type='text'
						placeholder="Home Name Here"
						required
					></input>
				</div>
				<div id='form-box'>
					<label id='required'>Address *</label>
					<input
						id='home-input'
						name='address'
						value={address}
						onChange={e => setAddress(e.target.value)}
						type='text'
						placeholder="Address"
						required
					></input>
				</div>
				<div id='form-box'>
					<label id='required'>City *</label>
					<input
						id='home-input'
						name='city'
						value={city}
						onChange={e => setCity(e.target.value)}
						type='text'
						placeholder="City"
						required
					></input>
				</div>
				<div id='form-box'>
					<label id='required'>State *</label>
					<input
						id='home-input'
						name='state'
						value={state}
						onChange={e => setState(e.target.value)}
						type='text'
						placeholder="State"
						required
					></input>
				</div>
				<div id='form-box'>
					<label id='required'>Zipcode *</label>
					<input
						id='home-input'
						name='zipcode'
						value={zipcode}
						onChange={e => setZipcode(e.target.value)}
						type='number'
						max={99999}
						min={0}
						placeholder="Zipcode"
						required
					></input>
				</div>
				<div id='form-box'>
					<label id='required'>Bedrooms *</label>
					<input
						id='home-input'
						name='bedrooms'
						value={bedrooms}
						onChange={e => setBedrooms(e.target.value)}
						type='number'
						required
						min={1}
					></input>
				</div>
				<div id='form-box'>
					<label id='required'>Bathrooms *</label>
					<input
						id='home-input'
						name='bathrooms'
						value={bathrooms}
						onChange={e => setBathrooms(e.target.value)}
						type='number'
						required
						min={1}
					></input>
				</div>
				<div id='form-box'>
					<label id='required'>Beds *</label>
					<input
						id='home-input'
						name='beds'
						value={beds}
						onChange={e => setBeds(e.target.value)}
						type='number'
						required
						min={1}
					></input>
				</div>
				<div id='form-box'>
					<label id='required'>Max Guests *</label>
					<input
						id='home-input'
						name='max_guests'
						value={max_guests}
						onChange={e => setMax_guests(e.target.value)}
						type='number'
						required
						min={1}
					></input>
				</div>
				<div id='form-box'>
					<label id='required'>Description *</label>
					<textarea
						rows={5}
						cols={25}
						name='description'
						value={description}
						onChange={e => setDescription(e.target.value)}
						type='text'
						required
					></textarea>
				</div>
				<div id='form-box'>
					<label id='required'>Price *</label>
					<input
						id='home-input'
						name='price'
						value={price}
						onChange={e => setPrice(e.target.value)}
						type='number'
						required
						min={1}
					></input>
				</div>
				<div id='form-box'>
					<label>TV</label>
					<input
						name='tv'
						checked={tv}
						onChange={e => setTv(!tv)}
						type='checkbox'
						id='checkbox'
					></input>
				</div>
				<div id='form-box'>
					<label>AC</label>
					<input
						name='ac'
						checked={ac}
						onChange={e => setAc(!ac)}
						type='checkbox'
						id='checkbox'
					></input>
				</div>
				<div id='form-box'>
					<label>Wifi</label>
					<input
						name='wifi'
						checked={wifi}
						onChange={e => setWifi(!wifi)}
						type='checkbox'
						id='checkbox'
					></input>
				</div>
				<div id='form-box'>
					<label>Workspace</label>
					<input
						name='workspace'
						checked={workspace}
						onChange={e => setWorkspace(!workspace)}
						type='checkbox'
						id='checkbox'
					></input>
				</div>
				<div id='form-box'>
					<label>Kitchen</label>
					<input
						name='kitchen'
						checked={kitchen}
						onChange={e => setKitchen(!kitchen)}
						type='checkbox'
						id='checkbox'
					></input>
				</div>
				<div id='form-box'>
					<label>Fridge</label>
					<input
						name='fridge'
						checked={fridge}
						onChange={e => setFridge(!fridge)}
						type='checkbox'
						id='checkbox'
					></input>
				</div>
				<div id='form-box'>
					<label>Microwave</label>
					<input
						name='microwave'
						checked={microwave}
						onChange={e => setMicrowave(!microwave)}
						type='checkbox'
						id='checkbox'
					></input>
				</div>
				<div id='form-box'>
					<label>Utensils</label>
					<input
						name='utensils'
						checked={utensils}
						onChange={e => setUtensils(!utensils)}
						type='checkbox'
						id='checkbox'
					></input>
				</div>
				<div id='form-box'>
					<label>Grill</label>
					<input
						name='grill'
						checked={grill}
						onChange={e => setGrill(!grill)}
						type='checkbox'
						id='checkbox'
					></input>
				</div>
				<div id='form-box'>
					<label>Parking</label>
					<input
						name='parking'
						checked={parking}
						onChange={e => setParking(!parking)}
						type='checkbox'
						id='checkbox'
					></input>
				</div>
				<div id='form-box'>
					<label>Update Image</label>
					<input
						// id='file'
						name='pic1'
						accept="image/*"
						onChange={updatePic1}
						type='file'
						placeholder="Image 1"
					></input>
				</div>
				<button id='reserve' type='submit'>Update</button>
			</form>
		</div>
	)
}

export default EditHome