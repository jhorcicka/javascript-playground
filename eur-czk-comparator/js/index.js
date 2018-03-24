
function id(elementId) {
  return document.getElementById(elementId);
};

function debug(text) {
  console.log('DEBUG: ' + text);
};

function compare() {
  var eurId = 'eur';
  var czkId = 'czk';
  var resultId = 'result';
  var eurValue = id(eurId).value;
  var czkValue = id(czkId).value;
  var result = '';

  if (isNaN(eurValue)) {
    result = "'" + eurValue + "' is not a number!";
  }

  if (isNaN(czkValue)) {
    result += "<br/>'" + czkValue + "' is not a number!";
  }

  if (!result) {
    var eurToCzk = eurValue * 26.0;
    result = eurValue + 'E = ' + eurToCzk + 'CZK<br/>';

    if (eurToCzk > czkValue) {
      result += eurToCzk + ' > ' + czkValue + ' (use CZK)';
    } else {
      result += eurToCzk + ' <= ' + czkValue + ' (use EUR)';
    }
  }

  id(resultId).innerHTML = result;
};

var app = {
  initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function() {
    id('execution-button').addEventListener('click', function() {
      compare();
    });
  }
};

app.initialize();

