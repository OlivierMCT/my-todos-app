import flask
import flask_sqlalchemy
import os
import flask_cors
import flask_socketio

# application Flask
app = flask.Flask('My_Todos_API')
ws = flask_socketio.SocketIO(app, cors_allowed_origins="*")

flask_cors.CORS(app, origins=['*'], methods=['GET', 'POST', 'PUT', 'DELETE'])

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'database', 'my-todos.sqlite')
db = flask_sqlalchemy.SQLAlchemy(app)

