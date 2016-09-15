(function() {
    
'use strict';
/**
 * Signup controller
 *
 * Associated view: public/`auth/views/auth.signup.view.html`
 */
angular.module('auth').controller('SignupController', signupController);

    function signupController($scope, $auth, $state, $flash, $translate, $http) {
        /* jshint validthis: true */
        var vm = this;
        vm.signup = signUp;

        function signUp(credentials) {
            if ($scope.signupForm && $scope.signupForm.$invalid) {
                $scope.signupForm.$showErrors = true;
                return;}

            $http.post('/signup/', credentials)
                .success(function(response) {
                    $auth.setLoggedUser(response);
                    $state.go('home');
                })
                .error(function() {
                    $flash.error($translate.instant('SIGN_UP.BAD_CREDENTIALS'));
                    $scope.credentials = {};
                });
        }
    }

})();
