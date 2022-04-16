#!/usr/bin/env python
# -*- coding: utf-8 -*-
#

from flask import Flask, jsonify, make_response

app = Flask(__name__)

@app.route('/api/token', methods=['POST'])
def getToken():
  response = make_response('{"token": "token"}')
  return addHeaders(response)

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
  response = make_response(jsonify({'realItems': items}))
  return addHeaders(response)

def addHeaders(response):
  response.headers['Content-Type'] = 'application/json; charset=UTF-8'
  response.headers['Access-Control-Allow-Origin'] = '*'
  #response.headers['Access-Control-Allow-Methods'] = 'GET,POST,DELETE,OPTIONS'
  #response.headers['Access-Control-Allow-Headers'] = 'TOKEN,Content-Type,Content-Length,Access-Control-Allow-Headers,Authorization,X-Requested-With,Accept,Referer,User-Agent'
  response.headers['Access-Control-Allow-Headers'] = '*'
  response.headers['Access-Control-Max-Age'] = '3600'
  print(response.headers)
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

