'''
    relevant imports
'''
from marshmallow import fields, post_load
from mentorapp import ma
from mentorapp.models import Mentee, Mentor

class MenteeSchema(ma.SQLAlchemyAutoSchema):
    '''
        mentee model schema
    '''
    id = fields.Int()
    first_name = fields.Str()
    last_name = fields.Str()
    age = fields.Int()
    email = fields.Email()
    username = fields.Str()
    profile_picture = fields.Str()
    interests = fields.Str()

    @post_load
    def make_mentee(self, data, **kwargs):
        '''
            schema function to create mentee
        '''
        return Mentee(**data)


class MentorSchema(ma.SQLAlchemyAutoSchema):
    '''
        mentee model schema
    '''
    id = fields.Int()
    first_name = fields.Str()
    last_name = fields.Str()
    age = fields.Int()
    email = fields.Email()
    profile_picture = fields.Str()
    expertise = fields.Str()

    @post_load
    def make_mentor(self, data, **kwargs):
        '''
            schema function to create mentee
        '''
        return Mentor(**data)
