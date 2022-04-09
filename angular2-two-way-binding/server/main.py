#!/usr/bin/env python
# -*- coding: utf-8 -*-
#

from flask import Flask, jsonify, make_response
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type,Origin'

@cross_origin()
@app.route('/api/token', methods=['POST'])
def getToken():
  response = make_response('token')
  return addHeaders(response)

@cross_origin()
@app.route('/api/items', methods=['POST'])
def getItems():
  items = [
    {
      'id': 1,
      'title': 'Real item #1',
    },
    {
      'id': 2,
      'title': 'Real item #2',
    }
  ]
  response = make_response(jsonify({'real-items': items}))
  return addHeaders(response)

def addHeaders(response):
  #response.headers['Content-Type'] = 'application/json'
  response.headers['Content-Type'] = '*'
  #response.headers['Access-Control-Allow-Origin'] = 'localhost'
  #response.headers['Access-Control-Allow-Origin'] = 'http://localhost:4200'
  #response.headers['Access-Control-Allow-Origin'] = '*'
  response.headers['Access-Control-Allow-Origin'] = '*'
  #response.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS,PUT,PATCH,DELETE'
  #response.headers['Access-Control-Allow-Headers'] = 'Access-Control-Allow-Headers,Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,X-Access-Token,XKey,Authorization'
  response.headers['Access-Control-Allow-Methods'] = '*'
  response.headers['Access-Control-Allow-Headers'] = '*'
  return response


@app.route('/api/test', methods=['GET'])
def test():
  testItems = [
    {
      'id': 1,
      'title': 'Test item #1',
    },
    {
      'id': 2,
      'title': 'Test item #2',
    }
  ]
  return jsonify({'test-items': testItems})

if __name__ == '__main__':
  app.run(debug=True, port=8888)

