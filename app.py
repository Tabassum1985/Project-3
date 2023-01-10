from flask import Flask, render_template, jsonify
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
import numpy as np
# Import key
from key import postgreskey

#connect to local db

protocol = 'postgresql'
username = ''
password = ''
host = 'localhost'
port = 5432
database_name = 'Soccer'
rds_connection_string = f'{protocol}://{username}:{password}@{host}:{port}/{database_name}'
engine = create_engine(rds_connection_string)

table_names = engine.table_names()
print(table_names)

# reflect an existing database into a new model
Base = automap_base()
print(Base.classes.keys())
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
world_cup1 = Base.classes.Vizualization1
world_cup2 = Base.classes.Vizualization2
world_cup3 = Base.classes.Vizualization3



app = Flask(__name__)



@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')


@app.route('/visualization1')
def crime():
    return render_template('visualization_1.html')


@app.route('/visualization2')
def heatmap():
    return render_template('visualization_2.html')

@app.route('/visualization3')
def heatmap():
    return render_template('visualization_3.html')


@app.route('/db_call')
def dbCall():
    session = Session(engine)

    
    # Query all
    results = session.query(world_cup1.Year, world_cup1.Attendance, world_cup1.MatchID).all()

  


    session.close()
    world_cup_data = []
    for Year, Attendance, MatchID in results:
        n = {
        "Year" : Year,
        "Attendance" : Attendance,
        "MatchID" : MatchID

        }

        world_cup_data.append(n)



    return jsonify(world_cup_data)


@app.route('/db_call2')
def dbCall():
    session = Session(engine)

    
    # Query all
    results = session.query(world_cup2.Year, world_cup2.City, world_cup2.Goals).all()

  


    session.close()
    world_cup_data2 = []
    for Year, Attendance, MatchID in results:
        n = {
        "Year" : Year,
        "City" : City,
        "Goals" : Goals

        }

        world_cup_data2.append(n)



    return jsonify(world_cup_data2)


@app.route('/db_call3')
def dbCall():
    session = Session(engine)

    
    # Query all
    results = session.query(world_cup3.Year, world_cup3.Attendance, world_cup3.MatchID).all()

  


    session.close()
    world_cup_data3 = []
    for Year, Attendance, MatchID in results:
        n = {
        "Year" : Year,
        "Attendance" : Attendance,
        "MatchID" : MatchID

        }

        world_cup_data.append(n)



    return jsonify(world_cup_data3)



if __name__ == '__main__':

    # Run this when running on LOCAL server...
    app.run(debug=True)

