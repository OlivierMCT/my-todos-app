from my_todos_api_base import app, db, ws
from my_todos_api_model import Todo
from datetime import datetime
from flask import request

# WebSockets
@ws.on('connect')
def connect():
  print('Nouvelle Connexion WebSocket')

@ws.on('toggling')
def toggleOneById(id):
  todo = Todo.query.get(id)
  todo.isDone = not todo.isDone
  db.session.commit()
  ws.emit('toggled', todo.toJson())  


# API REST
@app.route('/todo', methods=['GET'])
def getAll():
  return [t.toJson() for t in Todo.query.all()]

@app.route('/todo/<int:id>', methods=['GET'])
def getOneById(id):
  todo = Todo.query.get(id)
  if not todo:
    return { 'error': 'La tâche n°' + str(id) + ' n\'existe pas' }, 404
  return todo.toJson()

@app.route('/todo', methods=['POST'])
def addOne():
  errors = []

  title = request.json.get('title')
  if not title: errors.append('Le titre de la tâche est obligatoire')
  
  category = request.json.get('category')
  if not category: errors.append('La catégorie de la tâche est obligatoire')

  dueDate = request.json.get('dueDate')
  if not dueDate: errors.append('La date d\'échéance de la tâche est obligatoire')
  else:
    try:
      dueDate = datetime.strptime(dueDate, '%Y-%m-%d')
    except:
      errors.append('La date d\'échéance de la tâche est invalide')

  latitude = request.json.get('latitude')
  if latitude and not (isinstance(latitude, int) or isinstance(latitude, float)):
    errors.append('La latitude de la tâche est invalide')
  
  longitude = request.json.get('longitude')
  if longitude and not (isinstance(longitude, int) or isinstance(longitude, float)):
    errors.append('La longitude de la tâche est invalide')

  if (latitude == None) != (longitude == None):
    errors.append('La latitude et la longitude de la tâche sont obligatoires ensemble')

  if len(errors) != 0:
    return { "errors": errors }, 400
  
  newTodo = Todo(title, category, dueDate, False, latitude, longitude)
  db.session.add(newTodo)
  db.session.commit()
  return newTodo.toJson(), 201

@app.route('/todo/<int:id>', methods=['PUT'])
def updateOne(id):
  errors = []

  title = request.json.get('title')
  if not title: errors.append('Le titre de la tâche est obligatoire')
  
  category = request.json.get('category')
  if not category: errors.append('La catégorie de la tâche est obligatoire')

  dueDate = request.json.get('dueDate')
  if not dueDate: errors.append('La date d\'échéance de la tâche est obligatoire')
  else:
    try:
      dueDate = datetime.strptime(dueDate, '%Y-%m-%d')
    except:
      errors.append('La date d\'échéance de la tâche est invalide')

  latitude = request.json.get('latitude')
  if latitude and not (isinstance(latitude, int) or isinstance(latitude, float)):
    errors.append('La latitude de la tâche est invalide')
  
  longitude = request.json.get('longitude')
  if longitude and not (isinstance(longitude, int) or isinstance(longitude, float)):
    errors.append('La longitude de la tâche est invalide')

  if (latitude == None) != (longitude == None):
    errors.append('La latitude et la longitude de la tâche sont obligatoires ensemble')

  if len(errors) != 0:
    return { "errors": errors }, 400
  
  todo = Todo.query.get(id)
  if not todo:
    return { 'error': 'La tâche n°' + str(id) + ' n\'existe pas' }, 404
  
  todo.title = title
  todo.category = category
  todo.dueDate = dueDate
  todo.latitude = latitude
  todo.longitude = longitude  
  db.session.commit()

  return todo.toJson()

@app.route('/todo/<int:id>', methods=['DELETE'])
def deleteOneById(id):
  todo = Todo.query.get(id)
  if not todo:
    return { 'error': 'La tâche n°' + str(id) + ' n\'existe pas' }, 404
  db.session.delete(todo)
  db.session.commit()
  
  ws.emit('removed', id) 
  return "", 204


#app.run(debug=True)
ws.run(app, debug=True)