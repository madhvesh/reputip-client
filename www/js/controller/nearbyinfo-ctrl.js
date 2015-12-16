(function () {
    'use strict';

    angular.module('visaHackApp').controller('NearbyInfoCtrl', ['$state', 'nearbyInfoApi', NearbyInfoCtrl]);

    function NearbyInfoCtrl($state, nearbyInfoApi) {
        var vm = this;
        
        var nearbyInfo = nearbyInfoApi.getNearbyInfo();

        console.log(nearbyInfo);
        vm.nearbyInfo = nearbyInfo;

        vm.selectCategory = function(id){
            vm.category = id;
            console.log(vm.category);
            $state.go("home.search");
        }

    };
})();