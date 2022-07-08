from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField, TextAreaField, BooleanField
from wtforms.validators import DataRequired, ValidationError

def check_name(form, field):
	name = field.data
	if (len(name) > 200):
		raise ValidationError("Name cannot be more than 200 characters")

class HomeForm(FlaskForm):
	user_id = IntegerField("user_id", validators=[DataRequired()])
	name = StringField("name", validators=[DataRequired()])
	address = StringField("address", validators=[DataRequired()])
	city = StringField("city", validators=[DataRequired()])
	state = StringField("state", validators=[DataRequired()])
	zipcode = IntegerField("zipcode", validators=[DataRequired()])
	bedrooms = IntegerField("bedrooms", validators=[DataRequired()])
	bathrooms = IntegerField("bathrooms", validators=[DataRequired()])
	beds = IntegerField("beds", validators=[DataRequired()])
	max_guests = IntegerField("max_guests", validators=[DataRequired()])
	description = TextAreaField("description")
	price = DecimalField("price", validators=[DataRequired()])
	tv = BooleanField("tv", validators=[DataRequired()])
	ac = BooleanField("ac", validators=[DataRequired()])
	wifi = BooleanField("wifi", validators=[DataRequired()])
	workspace = BooleanField("workspace", validators=[DataRequired()])
	kitchen = BooleanField("kitchen", validators=[DataRequired()])
	fridge = BooleanField("fridge", validators=[DataRequired()])
	microwave = BooleanField("microwave", validators=[DataRequired()])
	utensils = BooleanField("utensils", validators=[DataRequired()]
	grill = BooleanField("grill", , validators=[DataRequired()])
	parking = BooleanField("parking", validators=[DataRequired()])