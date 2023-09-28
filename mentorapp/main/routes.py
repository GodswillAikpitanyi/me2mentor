from flask import Flask, request, jsonify, Blueprint
from flask_login import login_required
from mentorapp.schemas import MentorSchema, MenteeSchema
from mentorapp.models import Mentor, Mentee
from mentorapp.mentors.routes import mentors_schema


main = Blueprint('main', __name__)


@main.route("/")
@main.route("/landing_page", methods=['GET', 'POST'])
def landing_page():
    return jsonify({'message': 'Welcome to the landing page!'})

@main.route("/home", methods=['GET'])
#@login_required
def get_mentors():
    '''function to display the mentors on the home page'''
    all_mentors = Mentor.query.all()
    result = mentors_schema.dump(all_mentors)
    return jsonify(result)

    '''page = request.args.get('page', 1, type=int)
    mentors = Mentor.query.order_by(Mentor.created_at.desc()).paginate(page=page, per_page=5)
    mentor_list = [{'mentor_id': mentor_id, 'name': mentor.first_name, 'description': mentor.description} for mentor in mentors.items]
    return jsonify({'mentors': mentor_list, 'total_pages': mentors.pages})'''

@main.route("/about")
def about():
    return jsonify({'message': 'This is the About page!'})


@main.route("/register", methods=['GET', 'POST'])
def register():
    '''
        a register function for the mentee route
    '''
    try:
        # Parse JSON data from the request
        data = request.get_json()
        mentee_schema = MenteeSchema()

        # Load (deserialize) the JSON data using MenteeSchema
        mentee = mentee_schema.load(data)

        # Checks if email already exists in the db.
        existing_mentee = Mentee.query.filter_by(email=mentee.email).first()
        if existing_mentee:
            return "Email already exists", 409

        db.session.add(mentee)
        db.session.commit()
        return mentee_schema.jsonify(mentee), 201

    except Exception as e:
        return str(e), 400