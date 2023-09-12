""" installed package imports """
from flask import Flask
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
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    mail.init_app(app)

    # circular import prevention #
    '''from recipeapp.users.routes import users
    from recipeapp.recipes.routes import recipes
    from recipeapp.main.routes import main
    from recipeapp.errors.handlers import errors'''

    # Flask blueprint register
    app.register_blueprint(users)
    app.register_blueprint(recipes)
    app.register_blueprint(main)
    app.register_blueprint(errors)

    return app
