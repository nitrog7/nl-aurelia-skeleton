System.register(["aurelia-router"], function (_export) {
  var Router, _createClass, _classCallCheck, ChildRouter;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ChildRouter = _export("ChildRouter", (function () {
        function ChildRouter(router) {
          _classCallCheck(this, ChildRouter);

          this.heading = "Child Router";
          this.router = router;
          router.configure(function (config) {
            config.map([{ route: ["", "welcome"], moduleId: "index/welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "index/flickr", nav: true }, { route: "child-router", moduleId: "index/child-router", nav: true, title: "Child Router" }]);
          });
        }

        _createClass(ChildRouter, null, {
          inject: {
            value: function inject() {
              return [Router];
            }
          }
        });

        return ChildRouter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4L2NoaWxkLXJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BRVEsTUFBTSxpQ0FFRCxXQUFXOzs7O0FBRmhCLFlBQU0sa0JBQU4sTUFBTTs7Ozs7Ozs7O0FBRUQsaUJBQVc7QUFFWCxpQkFGQSxXQUFXLENBRVYsTUFBTSxFQUFDO2dDQUZSLFdBQVc7O0FBR3BCLGNBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO0FBQzlCLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGdCQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQ3pCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDLEVBQUcsUUFBUSxFQUFFLGVBQWUsRUFBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxTQUFTLEVBQUUsRUFDdEYsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFTLFFBQVEsRUFBRSxjQUFjLEVBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxFQUNyRSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUcsUUFBUSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLGNBQWMsRUFBRSxDQUM1RixDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7U0FDSjs7cUJBWlUsV0FBVztBQUNmLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUFFOzs7O2VBRHpCLFdBQVciLCJmaWxlIjoiaW5kZXgvY2hpbGQtcm91dGVyLmpzIiwic291cmNlUm9vdCI6Ii91bmRlZmluZWQifQ==