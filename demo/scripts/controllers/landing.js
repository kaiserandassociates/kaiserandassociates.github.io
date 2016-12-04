//var _data = require('config/data.json');
angular.module('kaiserApp')
    .controller('LandingCtrl', function($scope, $http, ModalService) {
        $scope.customQuote = function() {
            ModalService.showModal({
                templateUrl: "scripts/views/quotation.html",
                controller: "QuotationController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = result ? "You said Yes" : "You said No";
                });
            });
        };
        $http.get('/_data/landing.json').then(function(response) {
            $scope.about = response.data.about;
            $scope.skills = response.data.skills;
            $scope.services = response.data.services;
            $scope.team = response.data.team;
            $scope.packages = response.data.packages;
        });
    });
