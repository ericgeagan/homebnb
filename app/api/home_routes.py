from flask import Blueprint
from flask_login import login_required
from app.models import Home, db
from app.forms import HomeForm

home_routes = Blueprint('homes', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@home_routes.route('')
def get_all_homes():
	homes = Home.query.all()
	return {"homes": [home.to_dict() for home in homes]}

@home_routes.route('', methods=['POST'])
@login_required
def post_home():
	#Add aws s3 upload
	form = HomeForm()
	form['csrf_token'].data = request.cookies['csrf_token']
	if form.validate_on_submit():
		new_home = Home(
			user_id=form.data['user_id']
			name=form.data['name']
			address=form.data['address']
			city=form.data['city']
			state=form.data['state']
			zipcode=form.data['zipcode']
			bedrooms=form.data['bedrooms']
			bathrooms=form.data['bathrooms']
			beds=form.data['beds']
			max_guests=form.data['max_guests']
			description=form.data['description']
			price=form.data['price']
			tv=form.data['tv']
			ac=form.data['ac']
			wifi=form.data['wifi']
			workspace=form.data['workspace']
			kitchen=form.data['kitchen']
			fridge=form.data['fridge']
			microwave=form.data['microwave']
			utensils=form.data['utensils']
			grill=form.data['grill']
			parking=form.data['parking']
		)
		db.session.add(new_home)
		db.session.commit()
		return new_home.to_dict()
	return {'errors': validation_errors_to_error_messages(form.errors)}, 401