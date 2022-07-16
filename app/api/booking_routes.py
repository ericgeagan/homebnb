from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Booking, db
from app.forms import BookingForm

booking_routes = Blueprint('bookings', __name__)

def validation_errors_to_error_messages(validation_errors):
	"""
	Simple function that turns the WTForms validation errors into a simple list
	"""
	errorMessages = []
	for field in validation_errors:
			for error in validation_errors[field]:
					errorMessages.append(f'{error}')
	return errorMessages

@booking_routes.route('')
def get_all_bookings():
	bookings = Booking.query.all()
	return {"bookings": [booking.to_dict() for booking in bookings]}

@booking_routes.route('', methods=['POST'])
@login_required
def post_booking():
	form = BookingForm()
	form['csrf_token'].data = request.cookies['csrf_token']
	if form.validate_on_submit():
		new_booking = Booking(
			user_id=form.data['user_id'],
			home_id=form.data['home_id'],
			guests=form.data['guests'],
			start_date=form.data['start_date'],
			end_date=form.data['end_date'],
		)

		db.session.add(new_booking)
		db.session.commit()
		return new_booking.to_dict()
	return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@booking_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_booking(id):
	form = BookingForm()
	form['csrf_token'].data = request.cookies['csrf_token']
	if form.validate_on_submit():
		booking = Booking.query.get(id)

		booking.guests = form.data['guests']
		booking.start_date = form.data['start_date']
		booking.end_date = form.data['end_date']
		db.session.commit()
		return booking.to_dict()
	return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@booking_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_booking(id):
	booking = Booking.query.get(id)
	db.session.delete(booking)
	db.session.commit()
	return {"Successful": 'Successful'}