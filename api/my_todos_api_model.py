import sqlalchemy
from my_todos_api_base import db

class Todo(db.Model):
  __tablename__ = "Todos"
  __table_args__ = {'sqlite_autoincrement': True}
  
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  title = sqlalchemy.Column(sqlalchemy.String, nullable=False)
  category = sqlalchemy.Column(sqlalchemy.String, nullable=False)
  dueDate = sqlalchemy.Column(sqlalchemy.Date, nullable=False)
  isDone = sqlalchemy.Column(sqlalchemy.Boolean, nullable=False)
  latitude = sqlalchemy.Column(sqlalchemy.Float, nullable=True)
  longitude = sqlalchemy.Column(sqlalchemy.Float, nullable=True)

  def __init__(self, title, category, dueDate, isDone, latitude, longitude) -> None:
    [self.title, self.category, self.dueDate, self.isDone, self.latitude, self.longitude] = [title, category, dueDate, isDone, latitude, longitude]

  def __str__(self) -> str:
    return str(self.toJson())
  
  def toJson(self): 
    return {
      'id': self.id,
      'title': self.title,
      'category': self.category,
      'dueDate': self.dueDate.strftime('%Y-%m-%d'),
      'isDone': self.isDone,
      'latitude': self.latitude,
      'longitude': self.longitude
    }

