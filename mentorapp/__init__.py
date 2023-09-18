""" installed package imports """
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_mail import Mail
from mentorapp.config import Config



# Configurations #

db = SQLAlchemy()
bcrypt = Bcrypt()
login_manager = LoginManager()
login_manager.login_view = 'mentees.login'
login_manager.login_view = 'mentors.login'
login_manager.login_message_category = 'info'

mail = Mail()


def create_app(config_class=Config):
    '''
        function to run the app
    '''
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)

    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    mail.init_app(app)

    # circular import prevention #
    from mentorapp.mentees.routes import mentees
    from mentorapp.mentors.routes import mentors
    from mentorapp.main.routes import main
    from mentorapp.errors.handlers import errors

    # Flask blueprint register
    app.register_blueprint(mentees)
    app.register_blueprint(mentors)
    app.register_blueprint(main)
    app.register_blueprint(errors)

    return app
