from app.models import db, Booking
from datetime import date

# Adds a demo user, you can add other users here if you want
def seed_bookings():
	demo = Booking(
		user_id = 1,
		home_id = 1,
		guests = 2,
		start_date = date(2022, 6, 10),
		end_date = date(2022, 6, 12),
	)

	db.session.add(demo)

	db.session.commit()


# Uses a raw SQL query to TRUNCATE the bookings table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_bookings():
	db.session.execute('TRUNCATE bookings RESTART IDENTITY CASCADE;')
	db.session.commit()
