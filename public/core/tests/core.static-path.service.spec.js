(function() {
    
    'use strict';

    (function() {
        describe('staticPath Service Spec', function() {
            // Initialize global variables
            var staticPath;

            beforeEach(module(ApplicationConfiguration.name));

            beforeEach(inject(staticPathInject));

            function staticPathInject(_staticPath_) {
                staticPath = _staticPath_;
                it('should be testable', inject(function() {
                    // The test logic
                    expect(staticPath).toBeDefined();
                }));
            }
        });
    }());

})();
