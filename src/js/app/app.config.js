function appConfig($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/home', {
      controller: require('./home/home.controller.js'),
      controllerAs: 'vm',
      template: require('./home/home.template.pug')
    })
    .when('/users', {
      controller: require('./users/users.controller.js'),
      controllerAs: 'vm',
      template: require('./users/users.template.pug')
    })
    .otherwise({
      redirectTo: '/home'
    });
}

module.exports = appConfig;
