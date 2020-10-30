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
    }

    $scope.onDropComplete = function (index, obj, parentIndex) {
      console.log(parentIndex, obj)
      if (obj && index != obj.parentIndex) {
        var item = $scope.taskList[obj.parentIndex].TaskList.splice(obj.index, 1);
        $scope.taskList[index].TaskList.push(item[0]);
        localStorage.setItem('task', JSON.stringify($scope.taskList))
      }

    }

    $scope.onDropCompleteReorder = function (index, data, parentIndex) {
      if (data && (parentIndex == data.parentIndex)) {
        var drag = $scope.taskList[data.parentIndex].TaskList[data.index];
        var drop = $scope.taskList[data.parentIndex].TaskList[index];

        $scope.taskList[data.parentIndex].TaskList[data.index] = drop;
        $scope.taskList[data.parentIndex].TaskList[index] = drag;
      }
    }

  }]);
