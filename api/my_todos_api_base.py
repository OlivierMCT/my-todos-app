import flask
import flask_sqlalchemy
import os
import flask_cors

# application Flask
app = flask.Flask('My_Todos_API')

flask_cors.CORS(app, origins=['*'])

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'database', 'my-todos.sqlite')
db = flask_sqlalchemy.SQLAlchemy(app)

