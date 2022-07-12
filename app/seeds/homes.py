from app.models import db, Home


# Adds a demo user, you can add other users here if you want
def seed_homes():
	test = Home(
		user_id = 1,
		name = 'testHome',
		address = '123 testAddress',
		city = 'testCity',
		state = 'testState',
		zipcode = 12312,
		bedrooms = 2,
		bathrooms = 2,
		beds = 2,
		max_guests = 2,
		description = 'testDescription',
		price = 200,
		tv = True,
		ac = False,
		wifi = True,
		workspace = False,
		kitchen = True,
		fridge = False,
		microwave = True,
		utensils = False,
		grill = True,
		parking = False,
		pic1 = 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22415475/original/025cd735-d7b3-48bf-ab5e-8803b4d4175a.jpeg?im_w=1200'
	)

	db.session.add(test)
	db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_homes():
	db.session.execute('TRUNCATE homes RESTART IDENTITY CASCADE;')
	db.session.commit()
