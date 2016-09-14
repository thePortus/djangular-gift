(function() {

    'use strict';
    /**
     * Signin controller
     *
     * Associated view: public/`auth/views/auth.signin.view.html`
     */
    angular.module('auth').controller('SigninController', signinController);

    function signinController($scope, passwordForgottenModal, $log, $http, $auth, $state, $flash, $translate) {
        /* jshint validthis: true */
        var vm = this;
        vm.signin = signIn;
        vm.showForgottenPasswordModal = showForgottenPasswordModal;
        angular.extend($scope, {
            modalOpened: false
        });

        function signIn(credentials) {
            if ($scope.signinForm && $scope.signinForm.$invalid) {
                $scope.signinForm.$showErrors = true;
                return;
            }
            $http.post('/signin/', credentials)
                .success(function(response) {
                    $auth.setLoggedUser(response);
                    $state.go('home');
                })
                .error(function() {
                    $flash.error($translate.instant('SIGN_IN.BAD_CREDENTIALS'));
                    $scope.credentials = {};
                });
        }

        function showForgottenPasswordModal() {
            $scope.modalOpened = true;
            passwordForgottenModal.open()
                .result
                .finally(function() {
                    $scope.modalOpened = false;
                });
        }
    }

})();
