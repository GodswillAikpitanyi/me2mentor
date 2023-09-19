''' Module import statements
'''
from flask import Blueprint, jsonify, request, current_app
from flask_login import login_user, current_user, logout_user, login_required
from mentorapp import db, bcrypt
from mentorapp.models import Mentor
from mentorapp.mentors.utils import save_picture, send_reset_email

mentors = Blueprint('mentors', __name__)


@mentors.route("/register", methods=['GET', 'POST'])
def register():
    '''
        a register function for the mentor route
    '''
    # data sent from react in JSON
    data = request.json

    # Validate the data received from React
    if not all(key in data for key in ('username', 'email', 'password')):
        return jsonify({'message': 'Incomplete data'}), 400

    # Check if the email is already registered
    if Mentor.query.filter_by(email=data['email']).first():
        return jsonify({'message': 'Email already registered'}), 400

    # Hash the password
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')

    # Create a new Mentor instance and add it to the database
    mentor = Mentor(
        username=data['username'],
        email=data['email'],
        password_hash=hashed_password
    )
    db.session.add(mentor)
    db.session.commit()

    return jsonify({'message': 'Account has been created! Kindly log in'}), 201


@mentors.route("/login", methods=['GET', 'POST'])
def login():
    '''
        login funtion for the mentor route
    '''
    # data sent from react in JSON
    data = request.json

    # Validate the data received from React
    if not all(key in data for key in ('email', 'password')):
        return jsonify({'message': 'Incomplete data'}), 400

    # Find the mentor by email
    mentor = Mentor.query.filter_by(email=data['email']).first()

    # Check if the mentor exists and the password is correct
    if mentor and bcrypt.check_password_hash(mentor.password_hash, data['password']):
        login_user(mentor)
        return jsonify({'message': 'Login successful'})

    return jsonify({'message': 'Login Unsuccessful. Please check email and password'}), 401



@mentors.route("/logout", methods=['POST'])
@login_required
def logout():
    '''
        logout funtion for the mentor route
    '''
    logout_user()
    return jsonify({'message': 'Logged out'})



@mentors.route("/account", methods=['GET', 'POST'])
@login_required
def update_account():
    '''
    function to update the mentor's account
    '''
    # data sent from react in JSON
    data = request.json

    # Validate the data received from React
    if not all(key in data for key in ('username', 'email', 'picture')):
        return jsonify({'message': 'Incomplete data'}), 400

    # Update mentor's account details
    if data['picture']:
        picture_file = save_picture(data['picture'])
        current_user.profile_picture = picture_file
    current_user.username = data['username']
    current_user.email = data['email']
    db.session.commit()

    return jsonify({'message': 'Your account has been updated!'}), 200



@mentors.route("/reset_password", methods=['GET', 'POST'])
def reset_request():
    '''
        function to reset the password
    '''
    # data sent from react in JSON
    data = request.json

    # Validate the data received from React
    if not all(key in data for key in ('email',)):
        return jsonify({'message': 'Incomplete data'}), 400

    mentor = Mentor.query.filter_by(email=data['email']).first()

    if mentor:
        send_reset_email(mentor)
    # Send a reset email regardless of whether the email exists or not
    # This helps prevent information leakage
    return jsonify({'message': 
                    'An email has been sent with instructions to reset your password.'}), 200


@mentors.route("/reset_password/<token>", methods=['GET', 'POST'])
def reset_token(token):
    '''
    function to get the reset token to reset password
    '''
    # data sent from react in JSON
    data = request.json

    # Validate the data received from React
    if not all(key in data for key in ('password',)):
        return jsonify({'message': 'Incomplete data'}), 400

    user = Mentor.verify_reset_token(token)

    if user is None:
        return jsonify({'message': 'That is an invalid or expired token'}), 400

    # Hash the new password and update it
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    user.password_hash = hashed_password
    db.session.commit()

    return jsonify({'message': 'Your password has been updated! You are now able to log in'}), 200