System.register(['aurelia-framework', 'aurelia-router'], function (_export) {
  var inject, Router, _classCallCheck, _createClass, ChildRouter;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      ChildRouter = (function () {
        function ChildRouter(router) {
          _classCallCheck(this, _ChildRouter);

          this.heading = 'Child Router';

          this.router = router;
          router.configure(function (config) {
            config.options.pushState = true;
            config.map([{ route: ['', 'welcome'], moduleId: './welcome', nav: true, title: 'Welcome' }, { route: 'flickr', moduleId: './flickr', nav: true }, { route: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' }]);
          });
        }

        var _ChildRouter = ChildRouter;

        _createClass(_ChildRouter, [{
          key: 'heading',
          value: undefined,
          enumerable: true
        }]);

        ChildRouter = inject(Router)(ChildRouter) || ChildRouter;
        return ChildRouter;
      })();

      _export('ChildRouter', ChildRouter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2luZGV4L2NoaWxkLXJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3FEQU1hLFdBQVc7Ozs7aUNBSmhCLE1BQU07OzhCQUNOLE1BQU07OztBQUhkLGtCQUFZLENBQUM7Ozs7OztBQU1BLGlCQUFXO0FBR1gsaUJBSEEsV0FBVyxDQUdWLE1BQU0sRUFBQzs7O2VBRm5CLE9BQU8sR0FBRyxjQUFjOztBQUd0QixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixnQkFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUN6QixrQkFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ2hDLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDLEVBQUcsUUFBUSxFQUFFLFdBQVcsRUFBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxTQUFTLEVBQUUsRUFDbEYsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFTLFFBQVEsRUFBRSxVQUFVLEVBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxFQUNqRSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUcsUUFBUSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLGNBQWMsRUFBRSxDQUN4RixDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7U0FDSjs7MkJBYlUsV0FBVzs7Ozs7Ozs7QUFBWCxtQkFBVyxHQUR2QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQ0YsV0FBVyxLQUFYLFdBQVc7ZUFBWCxXQUFXOzs7NkJBQVgsV0FBVyIsImZpbGUiOiJ2aWV3cy9pbmRleC9jaGlsZC1yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiL3VuZGVmaW5lZCJ9