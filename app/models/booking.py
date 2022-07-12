from .db import db
from sqlalchemy.orm import relationship

class Booking(db.Model):
	__tablename__ = 'bookings'

	id = db.Column(db.Integer, primary_key=True)
	guests = db.Column(db.Integer, nullable=False)
	start_date = db.Column(db.Date, nullable=False)
	end_date = db.Column(db.Date, nullable=False)
	user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
	home_id = db.Column(db.Integer, db.ForeignKey('homes.id'), nullable=False)

	user = db.relationship("User", back_populates='bookings')
	home = db.relationship("Home", back_populates='bookings', cascade='delete, all')

	def to_dict(self):
		return {
			'id': self.id,
			'user_id': self.user_id,
			'home_id': self.home_id,
			'guests': self.guests,
			'start_date': self.start_date,
			'end_date': self.end_date,
		}