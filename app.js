var app = angular.module('timeCounter', []);
app.controller('MainDate', [function(){
	var self = this;
	var weddingDate = new Date('04/11/2015 10:30');
	var actualDate = new Date(Date.now());

	self.yearsLeft = Math.abs(weddingDate.getFullYear() - actualDate.getFullYear());
	self.monthLeft = Math.abs(weddingDate.getMonth() - actualDate.getMonth());
	self.daysLeft = Math.abs(weddingDate.getDate() - actualDate.getDate());
	self.hourLeft = Math.abs(weddingDate.getHours() - actualDate.getHours());
	self.minutesLeft = Math.abs(weddingDate.getMinutes() - actualDate.getMinutes());
	self.secondsLeft = Math.abs(weddingDate.getSeconds() - actualDate.getSeconds());
	self.realLeftDay = weddingDate.getDate() - actualDate.getDate();
	// self.realLeftHours = weddingDate.getHours() - actualDate.getHours();
	// self.realLeftMinutes = weddingDate.getMinutes() - actualDate.getMinutes();
	// self.realLeftSeconds = weddingDate.getSeconds() - actualDate.getSeconds();

	self.getShowMessageFuture = function(day){
		if (day > 0) {
			return true;
		}

	};

	self.getShowMessagePast = function(item){
		if (item < 0){
			return true;
		}
	};
}]);