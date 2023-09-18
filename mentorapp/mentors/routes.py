from flask import Blueprint, jsonify, request, current_app
from flask_login import login_user, current_user, logout_user, login_required
from mentorapp import db, bcrypt
from mentorapp.models import Mentor
from mentorapp.mentors.forms import (RegistrationForm, LoginForm, UpdateAccountForm,
                                    RequestResetForm, ResetPasswordForm)
from mentorapp.mentors.utils import save_picture, send_reset_email

mentors = Blueprint('mentors', __name__)


@mentors.route("/register", methods=['GET', 'POST'])
def register():
    '''
        a register function for the mentor route
    '''
    data = request.json  # Assuming data is sent as JSON from React

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
    data = request.json  # Assuming data is sent as JSON from React

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
def account():
    form = UpdateAccountForm()
    if form.validate_on_submit():
        if form.picture.data:
            picture_file = save_picture(form.picture.data)
            current_user.image_file = picture_file
        current_user.username = form.username.data
        current_user.email = form.email.data
        db.session.commit()
        flash('Your account has been updated!', 'success')
        return redirect(url_for('mentors.account'))
    elif request.method == 'GET':
        form.username.data = current_user.username
        form.email.data = current_user.email
    image_file = url_for('static', filename='profile_pictures/' + current_user.image_file)
    return render_template('account.html', title='Account', image_file=image_file, form=form)



@mentors.route("/reset_password", methods=['GET', 'POST'])
def reset_request():
    data = request.json  # Assuming data is sent as JSON from React

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
    if current_user.is_authenticated:
        return redirect(url_for('main.home'))
    user = Mentor.verify_reset_token(token)
    if user is None:
        flash('That is an invalid or expired token', 'warning')
        return redirect(url_for('mentors.reset_request'))
    form = ResetPasswordForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user.password = hashed_password
        db.session.commit()
        flash(f'Your password has been updated! You are now able to log in', 'success')
        return redirect(url_for('mentors.login'))
    return render_template('reset_token.html', title='Reset Password', form=form)
