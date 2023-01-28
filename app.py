import sqlalchemy
from flask import Flask, render_template, jsonify
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect
import pandas as pd
import numpy as np

# Import key
#from key import postgreskey

#connect to local db

protocol = 'postgresql'
username = 'postgres'
password = 'Postgres'
host = 'localhost'
port = 5432
database_name = 'Soccer'
rds_connection_string = f'{protocol}://{username}:{password}@{host}:{port}/{database_name}'
engine = create_engine(rds_connection_string)

inspector = inspect(engine)
table_names = inspector.get_table_names()
#table_names = engine.get_table_names()
print(table_names)


app = Flask(__name__)



@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')


@app.route('/visualization1')
def visualization1():
    return render_template('visualization_1.html')


@app.route('/visualization2')
def visualization2():
    return render_template('visualization_2.html')

@app.route('/visualization3')
def visualization3():
    return render_template('visualization_3.html')


@app.route('/db_call')
def dbCall1():

    results = engine.execute("SELECT * FROM vizualization1")
    return jsonify([dict(_) for _ in results])
    


@app.route('/db_call2')
def dbCall2():

    results = engine.execute("SELECT * FROM vizualization2")
    return jsonify([dict(_) for _ in results])


@app.route('/db_call3')
def dbCall3():
    
    results = engine.execute("SELECT * FROM vizualization3")
    return jsonify([dict(_) for _ in results])

@app.route('/db_call4')
def dbCall4():
    results = engine.execute("SELECT * FROM vizualization3")
    results = pd.DataFrame(results)
    results.loc[:, 0]. unique()
    Stats = {}
    for x in results[0].unique():
        df = results[results[0] == x]
        Stats[x] = list(df[1])
    return jsonify(Stats)

if __name__ == '__main__':

    # Run this when running on LOCAL server...
    app.run(debug=True)

