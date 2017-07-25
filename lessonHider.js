app.directive('lessonHider', [function () {
	return {
		templateUrl : './lessonHider.html',
		restrict: 'E',
		scope: {
			lesson: '=',
			dayAlert: '&',
			strikeThrough: '&'
		},
		controller: function($scope, lessonService) {
			$scope.getSchedule = lessonService.getSchedule();
		},
		link: function (scope, elem, attr) {
			scope.getSchedule.then(function(res){
				scope.schedule = res.data;

				scope.schedule.forEach(function(scheduleDay) {
					if (scheduleDay.lesson === scope.lesson) {
						// scope.lesson.crossedOut = false;
						scope.lessonDay = scheduleDay.weekday;
						elem.css('text-decoration', 'line-through');

						return;
					}
				});
			});
		}
	};
}])