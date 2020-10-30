angular.module('sampleappApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

    var data = localStorage.getItem('task');
    $scope.taskList = data ? JSON.parse(data) : [];

    $scope.addTaskGroup = function (groupName) {
      if (groupName) {
        $scope.taskList.push({
          TaskGroupName: groupName,
          Status: 'Not Completed',
          TaskList: []
        });
        $scope.taskGroup = '';
        localStorage.setItem('task', JSON.stringify($scope.taskList));
      }
    }

    $scope.addTask = function (taskName, list) {
      if (taskName) {
        list.push({
          TaskName: taskName,
          Completed: false
        });
        $scope.taskName = '';
        localStorage.setItem('task', JSON.stringify($scope.taskList));
      }

    }

    $scope.removeItem = function (index, list) {
      list.splice(index, 1);
      localStorage.setItem('task', JSON.stringify($scope.taskList));
    }

    $scope.onDropComplete = function (index, obj, parentIndex) {
      if (obj && index != obj.parentIndex) {
        var item = $scope.taskList[obj.parentIndex].TaskList.splice(obj.index, 1);
        $scope.taskList[index].TaskList.push(item[0]);
        localStorage.setItem('task', JSON.stringify($scope.taskList));
      }

    }

    $scope.onDropCompleteReorder = function (index, data, parentIndex) {
      if (data && (parentIndex == data.parentIndex)) {
        var drag = $scope.taskList[data.parentIndex].TaskList[data.index];
        var drop = $scope.taskList[data.parentIndex].TaskList[index];

        $scope.taskList[data.parentIndex].TaskList[data.index] = drop;
        $scope.taskList[data.parentIndex].TaskList[index] = drag;
        localStorage.setItem('task', JSON.stringify($scope.taskList));
      }
    }

    $scope.edit = function(data) {
      data.edit = !data.edit;
      localStorage.setItem('task', JSON.stringify($scope.taskList));
    }

    $scope.complete = function(data) {
      data.Completed = !data.Completed;
      localStorage.setItem('task', JSON.stringify($scope.taskList));
    }

  }]);
