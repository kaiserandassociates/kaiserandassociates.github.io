angular.module('kaiserApp')
  .controller('QuotationController', function($scope, close) {
    // initialize
    $scope.estimate = '0.00';
    $scope.business = 'sole-trader';
    $scope.payroll = false;
    $scope.payroll_interval = 'week';
    $scope.partners = 2;
    $scope.self_assessment_partners = $scope.partners || 2;
    $scope.directors = 1;
    $scope.payroll_employees = 1;
    $scope.self_assessment_directors = 1;
    $scope.turnover = 10000;

    $scope.close = function(result) {
      close(result, 200);
    };
    $scope.calculate = function() {
      $scope.estimate = '200.00';
    };
  });
