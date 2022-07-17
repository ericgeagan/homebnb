from flask_wtf import FlaskForm
from wtforms import IntegerField, DateField
from wtforms.validators import DataRequired, ValidationError
from app.models import Booking

class BookingForm(FlaskForm):
		user_id = IntegerField("user_id", validators=[DataRequired()])
		home_id = IntegerField("home_id", validators=[DataRequired()])
		guests = IntegerField('guests', validators=[DataRequired()])
		start_date = DateField('start_date', validators=[DataRequired()])
		end_date = DateField('end_date', validators=[DataRequired()])
