app.controller('lessonCtrl', ['$scope', function ($scope) {
	$scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
	$scope.test = "Two day data binding"

	$scope.announceDay = function(lesson, day) {
		if (day === undefined) {alert(lesson + " is not on the schedule.")}
		 else {alert(lesson + ' is active on ' + day + '.');}
	}

	


}])