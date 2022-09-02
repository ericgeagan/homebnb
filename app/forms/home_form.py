from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField, TextAreaField, BooleanField
from wtforms.validators import DataRequired, ValidationError

def check_name(form, field):
	name = field.data
	if len(name) > 200:
		raise ValidationError("Name cannot be more than 200 characters.")

def check_address(form, field):
	address = field.data
	if len(address) > 40:
		raise ValidationError("Address cannot be more than 40 characters.")

def check_city(form, field):
	city = field.data
	if len(city) > 40:
		raise ValidationError("City cannot be more than 40 characters.")

def check_state(form, field):
	state = field.data
	if len(state) > 40:
		raise ValidationError("State cannot be more than 40 characters.")

def verify_zipcode(form, field):
	zipcode = field.data
	if zipcode < 1:
		raise ValidationError("Please enter a valid zipcode.")

def verify_description(form, field):
	description = field.data
	if len(description) > 1024:
		raise ValidationError("Description cannot be longer than 1024 characters.")

def number_length(form, field):
	num_field = field.data
	if (num_field > 10):
		raise ValidationError(f'{field.name} cannot exceed 10.')

def price_validator(form, field):
	price = field.data
	if (price > 9999):
		raise ValidationError(f'{field.name} cannot exceed $9999')

class HomeForm(FlaskForm):
	user_id = IntegerField("user_id", validators=[DataRequired()])
	name = StringField("name", validators=[DataRequired(), check_name])
	address = StringField("address", validators=[DataRequired(), check_address])
	city = StringField("city", validators=[DataRequired(), check_city])
	state = StringField("state", validators=[DataRequired(), check_state])
	zipcode = IntegerField("zipcode", validators=[verify_zipcode])
	bedrooms = IntegerField("bedrooms", validators=[DataRequired(), number_length])
	bathrooms = IntegerField("bathrooms", validators=[DataRequired(), number_length])
	beds = IntegerField("beds", validators=[DataRequired(), number_length])
	max_guests = IntegerField("max_guests", validators=[DataRequired(), number_length])
	description = TextAreaField("description", validators=[DataRequired(), verify_description])
	price = DecimalField("price", validators=[DataRequired(), price_validator])
	tv = BooleanField("tv")
	ac = BooleanField("ac")
	wifi = BooleanField("wifi")
	workspace = BooleanField("workspace")
	kitchen = BooleanField("kitchen")
	fridge = BooleanField("fridge")
	microwave = BooleanField("microwave")
	utensils = BooleanField("utensils")
	grill = BooleanField("grill")
	parking = BooleanField("parking")