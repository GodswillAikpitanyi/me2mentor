from flask import render_template, request, Blueprint
from flask_login import login_required
from mentorapp.models import Mentor

main = Blueprint('main', __name__)


@main.route("/")
@main.route("/landing_page", methods=['GET', 'POST'])
def landing_page():
    return render_template('landing_page.html', title='Landing Page')

@main.route("/home")
@login_required
def home():
    page = request.args.get('page', 1, type=int)
    mentors = Mentor.query.order_by(Mentor.created_at.desc()).paginate(page=page, per_page=5)
    return render_template('home.html', mentors=mentors)

@main.route("/about")
def about():
    return render_template('about.html', title='About')
