from app.models import db, Booking
from datetime import date

# Adds a demo user, you can add other users here if you want
def seed_bookings():
	first = Booking(
		user_id = 1,
		home_id = 1,
		guests = 2,
		start_date = date(2022, 8, 12),
		end_date = date(2022, 8, 14),
	)

	second = Booking(
		user_id = 1,
		home_id = 1,
		guests = 3,
		start_date = date(2022, 11, 12),
		end_date = date(2022, 11, 14),
	)

	third = Booking(
		user_id = 1,
		home_id = 2,
		guests = 4,
		start_date = date(2022, 9, 20),
		end_date = date(2022, 9, 22),
	)

	fourth = Booking(
		user_id = 3,
		home_id = 2,
		guests = 5,
		start_date = date(2022, 12, 4),
		end_date = date(2022, 12, 8),
	)

	fifth = Booking(
		user_id = 1,
		home_id = 3,
		guests = 6,
		start_date = date(2022, 4, 16),
		end_date = date(2022, 4, 19),
	)

	sixth = Booking(
		user_id = 2,
		home_id = 4,
		guests = 2,
		start_date = date(2022, 2, 20),
		end_date = date(2022, 2, 22),
	)

	db.session.add(first)
	db.session.add(second)
	db.session.add(third)
	db.session.add(fourth)
	db.session.add(fifth)
	db.session.add(sixth)

	db.session.commit()


# Uses a raw SQL query to TRUNCATE the bookings table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_bookings():
	db.session.execute('TRUNCATE bookings RESTART IDENTITY CASCADE;')
	db.session.commit()
