console.log("hehehe"); // Đảm bảo mã JavaScript của bạn hoạt động
var app = angular.module("myapp", []);
app.controller("myctrl", function ($scope) {
  $scope.calculate = function () {
    var a = parseFloat($scope.width);
    var b = parseFloat($scope.length);
    $scope.acreage = a * b;
    $scope.perimeter = (a + b) * 2;
  };
});
