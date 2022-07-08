from .db import db
from sqlalchemy.orm import relationship

class Home(db.Model):
	__tablename__ = 'homes'

	id = db.Column(db.Integer, primary_key=True)
	user_id = db.Column(db.Integer, db.ForeignKey('users.id'))