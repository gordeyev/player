;
"use strict";
var MyPlayer;
MyPlayer = function (baseEl) {
  var _this, init;
  _this = this;

  init = function () {
    var playPauseBtn, stopBtn, fileInput;
    playPauseBtn = _this.el.querySelector('.js-play');
    stopBtn = _this.el.querySelector('.js-stop');
    fileInput = _this.el.querySelector('input');
    playPauseBtn.addEventListener('click', _this.triggerPlay);
    stopBtn.addEventListener('click', _this.stop);
    fileInput.addEventListener('change', _this.ready);
  };

  this.el = document.querySelector(baseEl);
  this.isPlaying = false;
  this.stop = function () {
    console.log('Stop!')
  };
  this.triggerPlay = function () {
    if (_this.isPlaying) {
      _this.pause();
    } else {
      _this.play();
    }
    _this.isPlaying = !_this.isPlaying;
  };
  this.play = function () {
    console.log('vasya play');
  };
  this.pause = function () {
    console.log('vasya pause');
  };
  this.ready = function () {
    console.log("Ready");
  };
  init();
};

document.addEventListener("DOMContentLoaded", function(event) {
  var myPlayer;
  myPlayer = new MyPlayer('.js-player');
  myPlayer.stop();
});
