var timestamp = 3665;
var hours = Math.floor(timestamp / 60 / 60);
var minutes = Math.floor(timestamp / 60) - (hours * 60);
var seconds = timestamp % 60;
var formatted = hours + ' час ' + minutes + ' минута ' + seconds + ' секунд';
console.log(formatted);