from app.models import db, Home


# Adds a demo user, you can add other users here if you want
def seed_homes():
	first = Home(
		user_id = 2,
		name = 'Newly constructed lakefront home w/ private pool, boat dock, & wrap-around deck!',
		address = '318 Village Dr',
		city = 'Manson',
		state = 'Washington',
		zipcode = 98831,
		bedrooms = 3,
		bathrooms = 2,
		beds = 4,
		max_guests = 4,
		description = "This stunning home is everything that a Lake Chelan home should be. You'll love having your own private pool, boat dock, and 100 feet of waterfront to play with. Plus, there are lake views from nearly every room in the house. This home also features a great kid-friendly space in the loft - it's perfect for movie-watching while lounging in bean bag chairs. There is a lovely gas fireplace in the living room, and outside you'll find a wrap-around deck with a propane fire table, lots of seating, and a private gas grill.\n What's nearby:\n Located just a half-mile away, Willow Point Park is a great place to let the kids run and play or enjoy the sandy beach. This home sits just two miles from downtown Manson, where you'll find great dining options, tasting rooms, and boat rentals. This region is famous for its vineyards, so you'll discover numerous wineries within three miles, and there are even more on the south shore. Just four miles away you'll find the Mill Bay Casino and a boat launch at the Old Mill Park. Head to downtown Chelan for more restaurants, shopping, and family fun at Slidewaters.",
		price = 854,
		tv = True,
		ac = True,
		wifi = True,
		workspace = False,
		kitchen = True,
		fridge = True,
		microwave = True,
		utensils = True,
		grill = True,
		parking = True,
		pic1 = 'https://homebnb.s3.us-west-2.amazonaws.com/pexels-luis-yanez-206172.jpg'
	)

	second = Home(
		user_id = 1,
		name = 'Designer A-Frame Cabin in the Trees',
		address = '373 Oak Dr',
		city = 'Lake Arrowhead',
		state = 'California',
		zipcode = 92352,
		bedrooms = 3,
		bathrooms = 1,
		beds = 5,
		max_guests = 6,
		description = "Meticulously designer-renovated cabin surrounded by mature evergreens and nestled behind a charming seasonal creek. Whether you’re looking to spend time with loved ones or work remotely outside of the city, this is the place to do it all. Relax by the fireplace while light pours in from the wall of windows, grill and chill on the deck, and explore nature right outside your front door. Conveniently located near everything Lake Arrowhead has to offer. You'll never want to leave!\n Upstairs, a spacious lofted bedroom with vaulted ceilings has the best views in the cabin - imagine seeing nothing but trees when you open your eyes. The main level has two more bedrooms with a luxuriously-sized king in one and two smaller beds in the other - perfect for kids or friends that each want their own place to sleep! Full ensuite bathroom in the loft and another full bathroom on the main level with a tub.",
		price = 232,
		tv = True,
		ac = True,
		wifi = True,
		workspace = True,
		kitchen = True,
		fridge = True,
		microwave = True,
		utensils = True,
		grill = False,
		parking = True,
		pic1 = 'https://homebnb.s3.us-west-2.amazonaws.com/pexels-pixabay-164558.jpg'
	)

	third = Home(
		user_id = 1,
		name = 'Lakefront Home to Relax - 30mins to Seattle',
		address = '539 Morris Ave S',
		city = 'Renton',
		state = 'Washington',
		zipcode = 98057,
		bedrooms = 3,
		bathrooms = 2,
		beds = 5,
		max_guests = 8,
		description = "We're sharing our lake front cottage with you. Lake Desire is a small quiet lake just a short drive from Seattle, and you can enjoy all kinds of nature activities. This is a place for our family to create memories, and we're hoping that you will enjoy it.\n For guests who are looking to bring a dog, 2 positive reviews are required.\n The house has three bedrooms: one master bedroom on the main floor, and 2 bedrooms on the ground floor. All bedrooms have lake view.\n There are two bathrooms on the main floor, as the as the kitchen and the laundry room. Laundry detergent is supplied as well.\n Wake up to the peaceful lake view and enjoy a morning yoga. Sit next to the window to read your book. Paddle through the lake or play a few lawn game.",
		price = 499,
		tv = True,
		ac = True,
		wifi = True,
		workspace = True,
		kitchen = True,
		fridge = True,
		microwave = True,
		utensils = True,
		grill = True,
		parking = True,
		pic1 = 'https://homebnb.s3.us-west-2.amazonaws.com/pexels-pixabay-208736.jpg'
	)

	fourth = Home(
		user_id = 1,
		name = 'Charming lakefront cabin with gas fireplace, private hot tub & dock',
		address = '1091 NE Larson Lake Rd',
		city = 'Belfair',
		state = 'Washington',
		zipcode = 98528,
		bedrooms = 1,
		bathrooms = 1,
		beds = 1,
		max_guests = 2,
		description = "Outside, fire up your gas grill and enjoy a summertime cookout while osprey and eagles soar overhead, ducks swim by on the lake, and curious deer wander into the yard. If you want to cast a line, Trail’s End Lake is considered by many to be one of the finest bass and trout-fishing lakes around! Head out on the water from your private dock or the nearby community boat launch, take a refreshing swim, or just stay close to home and relax with a good book on lazy afternoons. There is also a firepit in the yard to roast marshmallows or cook up those trout you just caught.",
		price = 237,
		tv = True,
		ac = False,
		wifi = True,
		workspace = False,
		kitchen = True,
		fridge = True,
		microwave = True,
		utensils = True,
		grill = True,
		parking = True,
		pic1 = 'https://homebnb.s3.us-west-2.amazonaws.com/pexels-pixabay-280222.jpg'
	)

	# test = Home(
	# 	user_id = 1,
	# 	name = 'testHome',
	# 	address = '123 testAddress',
	# 	city = 'testCity',
	# 	state = 'testState',
	# 	zipcode = 12312,
	# 	bedrooms = 2,
	# 	bathrooms = 2,
	# 	beds = 2,
	# 	max_guests = 2,
	# 	description = 'testDescription',
	# 	price = 200,
	# 	tv = True,
	# 	ac = False,
	# 	wifi = True,
	# 	workspace = False,
	# 	kitchen = True,
	# 	fridge = False,
	# 	microwave = True,
	# 	utensils = False,
	# 	grill = True,
	# 	parking = False,
	# 	pic1 = 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22415475/original/025cd735-d7b3-48bf-ab5e-8803b4d4175a.jpeg?im_w=1200'
	# )

	db.session.add(first)
	db.session.add(second)
	db.session.add(third)
	db.session.add(fourth)
	db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_homes():
	db.session.execute('TRUNCATE homes RESTART IDENTITY CASCADE;')
	db.session.commit()
