from flask import Blueprint
from flask_login import login_required
from app.models import Home, db
from app.forms import HomeForm
from app.s3_helpers import (upload_file_to_s3, allowed_file, get_unique_filename)

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
	if 'pic1' in request.files:
		image = request.files['pic1']

		if not allowed_file(image.filename):
			return {"errors": "file type not permitted"}, 400

		image.filename = get_unique_filename(image.filename)

		upload = upload_file_to_s3(image)

		if "url" not in upload:
			return upload, 400

		pic1 = upload['url']
		form = HomeForm()
		form['csrf_token'].data = request.cookies['csrf_token']
		if form.validate_on_submit():

			new_home = Home(
				user_id=form.data['user_id'],
				name=form.data['name'],
				address=form.data['address'],
				city=form.data['city'],
				state=form.data['state'],
				zipcode=form.data['zipcode'],
				bedrooms=form.data['bedrooms'],
				bathrooms=form.data['bathrooms'],
				beds=form.data['beds'],
				max_guests=form.data['max_guests'],
				description=form.data['description'],
				price=form.data['price'],
				tv=form.data['tv'],
				ac=form.data['ac'],
				wifi=form.data['wifi'],
				workspace=form.data['workspace'],
				kitchen=form.data['kitchen'],
				fridge=form.data['fridge'],
				microwave=form.data['microwave'],
				utensils=form.data['utensils'],
				grill=form.data['grill'],
				parking=form.data['parking'],
				pic1=pic1,
			)
			db.session.add(new_home)
			db.session.commit()
			return new_home.to_dict()
		return {'errors': validation_errors_to_error_messages(form.errors)}, 401

	form = HomeForm()
	form['csrf_token'].data = request.cookies['csrf_token']
	if form.validate_on_submit():
		new_home = Home(
			user_id=form.data['user_id'],
			name=form.data['name'],
			address=form.data['address'],
			city=form.data['city'],
			state=form.data['state'],
			zipcode=form.data['zipcode'],
			bedrooms=form.data['bedrooms'],
			bathrooms=form.data['bathrooms'],
			beds=form.data['beds'],
			max_guests=form.data['max_guests'],
			description=form.data['description'],
			price=form.data['price'],
			tv=form.data['tv'],
			ac=form.data['ac'],
			wifi=form.data['wifi'],
			workspace=form.data['workspace'],
			kitchen=form.data['kitchen'],
			fridge=form.data['fridge'],
			microwave=form.data['microwave'],
			utensils=form.data['utensils'],
			grill=form.data['grill'],
			parking=form.data['parking'],
			pic1='https://a0.muscache.com/im/pictures/prohost-api/Hosting-22415475/original/025cd735-d7b3-48bf-ab5e-8803b4d4175a.jpeg?im_w=1200'
		)
		db.session.add(new_home)
		db.session.commit()
		return new_home.to_dict()
	return {'errors': validation_errors_to_error_messages(form.errors)}, 401