(function () {
    'use strict';

    angular.module('visaHackApp').controller('MerchantInfoCtrl', ['$scope','$state', 'merchantInfoApi', MerchantInfoCtrl]);

    function MerchantInfoCtrl($scope,$state, merchantInfoApi) {
        var vm = this;
        
        var merchantInfo = merchantInfoApi.getMerchantInfo();
        var nearbyInfo = merchantInfoApi.getMerchantCoordData();

        console.log(merchantInfo);
        //console.log("$state ",$state.id);
        vm.merchantInfo = merchantInfo;
           $scope.rate = 3;
           $scope.max = 5;

        vm.selectMerchant = function(id){
            $state.id = id;
            console.log($state.id);
            $state.go("home.search.id");
        }

    };
})();