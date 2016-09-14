(function() {

'use strict';

angular.module('core').controller('HeaderController', headerController);

function headerController($scope, $auth, $state) {
    /* jshint validthis: true */
    var vm = this;

    vm.auth = $auth;
    vm.state = $state;

}

})();
