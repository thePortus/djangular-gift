(function() {

    'use strict';

    angular.module('core')
        .factory('$fakeModal', fakeModal);

        function fakeModal($q, $rootScope) {
            // see https://docs.angularjs.org/api/ng/service/$q
            function FakeModal() {
                /* jshint validthis: true */
                var vm = this;
                vm._resultDeferred = $q.defer();
                vm._openedDeferred = $q.defer();
                vm._renderedDeferred = $q.defer();
                vm.result = vm._resultDeferred.promise;
                vm.opened = vm._openedDeferred.promise;
                vm.rendered = vm._renderedDeferred.promise;
            }
            FakeModal.prototype.open = fakeModalOpen;
            FakeModal.prototype.close = fakeModalClose;
            FakeModal.prototype.dismiss = fakeModalDismiss;
            FakeModal.$new = fakeModalNew;

            function fakeModalOpen(options) {
                /* jshint validthis: true */
                var vm = this;
                vm._openedDeferred.resolve();
                vm._renderedDeferred.resolve();
                // Propagate promise resolution to 'then' functions using $apply().
                $rootScope.$apply();
                return vm;
            }

            function fakeModalClose(value) {
                                /* jshint validthis: true */
                var vm = this;
                vm._resultDeferred.resolve(value);
                $rootScope.$apply();
            }

            function fakeModalDismiss(reason) {
                                /* jshint validthis: true */
                var vm = this;
                vm._resultDeferred.reject(reason);
                $rootScope.$apply();
            }

            function fakeModalNew() {
                return new FakeModal();
            }
    
            return FakeModal;
        }

})();
