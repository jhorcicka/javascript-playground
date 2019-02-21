
function id(elementId) {
  return document.getElementById(elementId);
}

function debug(text) {
  console.log('DEBUG: ' + text);
}

function camera() {
  var cameraSucces = function(imageData) {
    var image = id('image');
    image.src = imageData;
    //image.src = "data:image/jpeg;base64," + imageData;
  };
  var cameraError = function(message) {
    debug('Camera action failed: ' + message);
  };
  var cameraOptions = { // navigator.camera.CameraOptions
    quality: 50,
    destinationType: Camera.DesinationType.FILE_URI,
    sourceType: Camera.PictureSourceType.CAMERA,
    encodingType: Camera.EncodingType.JPEG,
    mediaType: Camera.MediaType.PICTURE,
    allowEdit: false,
    correctOrientation: true
  };

  navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
  //navigator.camera.cleanup(onSuccess, onFail); // ios only?
}

var app = {
  initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function() {
    id('ok-button').addEventListener('click', function() {
      camera();
    });
  }
};

app.initialize();

