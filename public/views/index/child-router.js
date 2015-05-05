System.register([], function (_export) {
  var _classCallCheck, _createClass, ChildRouter;

  return {
    setters: [],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      ChildRouter = (function () {
        function ChildRouter() {
          _classCallCheck(this, ChildRouter);

          this.heading = 'Child Router';
        }

        _createClass(ChildRouter, [{
          key: 'heading',
          value: undefined,
          enumerable: true
        }, {
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.map([{ route: ['', 'welcome'], moduleId: './welcome', nav: true, title: 'Welcome' }, { route: 'flickr', moduleId: './flickr', nav: true, title: 'Flickr' }, { route: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' }]);

            this.router = router;
          }
        }]);

        return ChildRouter;
      })();

      _export('ChildRouter', ChildRouter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2luZGV4L2NoaWxkLXJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3FDQUFhLFdBQVc7Ozs7Ozs7Ozs7O0FBQVgsaUJBQVc7aUJBQVgsV0FBVztnQ0FBWCxXQUFXOztlQUN0QixPQUFPLEdBQUcsY0FBYzs7O3FCQURiLFdBQVc7Ozs7OztpQkFHUCx5QkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDO0FBQzdCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDLEVBQUcsUUFBUSxFQUFFLFdBQVcsRUFBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxTQUFTLEVBQUUsRUFDbEYsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFTLFFBQVEsRUFBRSxVQUFVLEVBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFFLEVBQ2pGLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsY0FBYyxFQUFFLENBQ3hGLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEI7OztlQVhVLFdBQVc7Ozs2QkFBWCxXQUFXIiwiZmlsZSI6InZpZXdzL2luZGV4L2NoaWxkLXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIvdW5kZWZpbmVkIn0=