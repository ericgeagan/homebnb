from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')
    if len(user) > 255:
        raise ValidationError('Email address cannot be longer than 255 characters.')

def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')
    if len(user) > 40:
        raise ValidationError('Username cannot be longer than 40 characters.')

def valid_email(form, field):
    email = field.data
    if '.' not in email.split('@')[1]:
        raise ValidationError('Please enter a valid email address.')

def valid_password(form, field):
    password = field.data
    if len(password) < 6:
        raise ValidationError('Password must be at least 6 characters long.')
    if len(password) > 255:
        raise ValidationError('Password cannot be longer than 255 characters.')

class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists, valid_email])
    password = StringField('password', validators=[DataRequired(), valid_password])
