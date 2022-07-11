from .db import db
from sqlalchemy.orm import relationship

class Home(db.Model):
	__tablename__ = 'homes'

	id = db.Column(db.Integer, primary_key=True)
	user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
	name = db.Column(db.String(200), nullable=False)
	address = db.Column(db.String, nullable=False)
	city = db.Column(db.String, nullable=False)
	state = db.Column(db.String, nullable=False)
	zipcode = db.Column(db.Integer, nullable=False)
	bedrooms = db.Column(db.Integer, nullable=False)
	bathrooms = db.Column(db.Integer, nullable=False)
	beds = db.Column(db.Integer, nullable=False)
	max_guests = db.Column(db.Integer, nullable=False)
	description = db.Column(db.Text, nullable=False)
	price = db.Column(db.Float, nullable=False)
	tv = db.Column(db.Boolean, nullable=False)
	ac = db.Column(db.Boolean, nullable=False)
	wifi = db.Column(db.Boolean, nullable=False)
	workspace = db.Column(db.Boolean, nullable=False)
	kitchen = db.Column(db.Boolean, nullable=False)
	fridge = db.Column(db.Boolean, nullable=False)
	microwave = db.Column(db.Boolean, nullable=False)
	utensils = db.Column(db.Boolean, nullable=False)
	grill = db.Column(db.Boolean, nullable=False)
	parking = db.Column(db.Boolean, nullable=False)
	pic1 = db.column(db.Text)
	# pic2 = db.column(db.Text)
	# pic3 = db.column(db.Text)
	# pic4 = db.column(db.Text)
	# pic5 = db.column(db.Text)

	user = db.relationship("User", back_populates='homes')

	def to_dict(self):
		return {
			"id": self.id,
			"user_id": self.user_id,
			"name": self.name,
			"address": self.address,
			"city": self.city,
			"state": self.state,
			"zipcode": self.zipcode,
			"bedrooms": self.bedrooms,
			"bathrooms": self.bathrooms,
			"beds": self.beds,
			"max_guests": self.max_guests,
			"description": self.description,
			"price": self.price,
			"tv": self.tv,
			"ac": self.ac,
			"wifi": self.wifi,
			"workspace": self.workspace,
			"kitchen": self.kitchen,
			"fridge": self.fridge,
			"microwave": self.microwave,
			"utensils": self.utensils,
			"grill": self.grill,
			"parking": self.parking,
			"pic1": self.pic1,
			# "pic2": self.pic2,
			# "pic3": self.pic3,
			# "pic4": self.pic4,
			# "pic5": self.pic5,
		}