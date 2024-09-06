from flask import Flask, jsonify
from flask_cors import CORS
import time
import datetime


app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/')
def hello_world():
    return "Hello World"

@app.route('/api/sam')
def get_current_time():
    time = datetime.datetime.now()
    return {
        "name": "Sam",
        "career": "Software Developer",
        "date": time.strftime("%m/%d/%Y, %H:%M:%S")
    }

if __name__ == '__main__':
    app.run(debug=True)
