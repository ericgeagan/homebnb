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

	fifth = Home(
		user_id = 1,
		name = '‘The Rookery’ - Dreamy Home w/ Private Dock!',
		address = '4444 S Dr',
		city = 'Yelm',
		state = 'Washington',
		zipcode = 98576,
		bedrooms = 3,
		bathrooms = 2,
		beds = 6,
		max_guests = 10,
		description = "Treat yourself to a picturesque Pacific Northwest trip and stay at this 3-bedroom, 2-bathroom vacation rental in Yelm. Known as the ‘Gateway to Mt. Rainier,’ Yelm offers endless opportunities to get outside — from hiking and fishing to golfing, horseback riding, and so much more. Leaving home will be near impossible; complete with kayaks, a private dock, and unobstructed lake views from the patio, deck, and fire pit sitting area, this home ensures you won't miss a single moment of being away!",
		price = 443,
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
		pic1 = 'https://homebnb.s3.amazonaws.com/187109b57a6b45369c56cf99d0f38b6e.jpg'
	)

	sixth = Home(
		user_id = 1,
		name = 'Middle of Nowhere',
		address = '3000 N Rd',
		city = 'Chelan',
		state = 'Washington',
		zipcode = 98816,
		bedrooms = 3,
		bathrooms = 2,
		beds = 5,
		max_guests = 5,
		description = "Surround yourself with immaculate mountain views at this 3-bedroom, 3.5-bath vacation rental, nestled on the shores of Cle Elum Lake! The home offers every on-site amenity you could desire, including a shared hot tub, fire pit, barbecue, gourmet kitchen, Smart TV, and game room. Begin the day with coffee and a walk down to the shore and end it with a relaxing soak in the hot tub and chit chat around the fire pit. If you need some adventure, hikes, breweries, and lake adventures await nearby!",
		price = 738,
		tv = True,
		ac = True,
		wifi = True,
		workspace = True,
		kitchen = True,
		fridge = True,
		microwave = True,
		utensils = True,
		grill = True,
		parking = False,
		pic1 = 'https://homebnb.s3.amazonaws.com/ba2dea3fce484c419df5ea28f72a826d.jpg'
	)

	seventh = Home(
		user_id = 1,
		name = 'The Rockland Lodge, Lake & Land',
		address = '4124 E Pl',
		city = 'Bremerton',
		state = 'Washington',
		zipcode = 98310,
		bedrooms = 6,
		bathrooms = 3,
		beds = 12,
		max_guests = 16,
		description = "The Rockland Lodge was originally built in 1973 and a 2018 rustic-modern remodel freshened up its charm. A relaxing 60-min Ferry Ride from Seattle gets you to a quiet, densely wooded 20-acre property overlooking Mission Lake and the Olympic Mtns. Biannually, we host 10-20 Artists-in-Residence at the property without charge. To support this primary mission, we rent to small groups for retreats, reunions, workshops, and weddings. Thanks for supporting Artists with your rental!",
		price = 370,
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
		pic1 = 'https://homebnb.s3.amazonaws.com/f17a9d592c1b44d384ae18914b1177bb.jpg'
	)

	eigth = Home (
		user_id = 1,
		name = 'Cottage Retreat Home in a convenient location!',
		address = '8382 W Rd',
		city = 'Burien',
		state = 'Washington',
		zipcode = 98062,
		bedrooms = 2,
		bathrooms = 2,
		beds = 4,
		max_guests = 7,
		description = "Private and secluded retreat home with a full kitchen and entertaining amenities. Convenient location, 5 mins to Burien & 15 to DWTN Seattle, secured parking. Luxurious living w/1800 thread count linens and plush bath towels. Private backyard fire pit, BBQ grill and outdoor eating areas. Lake view from romantic primary bedroom and south facing deck. Board games, books, karaoke machine, smart tv, record player, paddle board, bikes, and kayak available. Your delight is our pleasure!",
		price = 195,
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
		pic1 = 'https://homebnb.s3.amazonaws.com/3deab8f2d3f8441ea6c26a207562e4ec.jpg'
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
	db.session.add(fifth)
	db.session.add(sixth)
	db.session.add(seventh)
	db.session.add(eigth)
	db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_homes():
	db.session.execute('TRUNCATE homes RESTART IDENTITY CASCADE;')
	db.session.commit()
