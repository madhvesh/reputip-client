(function () {
    'use strict';

    angular.module('visaHackApp').controller('merchantInfoDetailCtrl', ['$scope','$stateParams', 'merchantInfoApi',merchantInfoDetailCtrl]);

    function merchantInfoDetailCtrl($stateParams,$scope,merchantInfoApi) {
        var vm = this;
        console.log("$stateParams ",$stateParams.id);
        var merchantInfo = merchantInfoApi.getMerchantInfo();
        console.log(merchantInfo);
        $stateParams.id = 17273955;
        vm.id = $stateParams.id;

        console.log($stateParams.id);
        var data = _.chain(merchantInfo)
                    .find({"id" : vm.id})
                    .value();
        vm.data = data;

        vm.following = false;
        $scope.rate = 3;
        $scope.max = 5;

        vm.toggleFollow = function(){
            vm.following = !vm.following;
        }; 

        console.log(data);

    };
})();