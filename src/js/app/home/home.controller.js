homeController.$inject = ['$scope'];

function homeController($scope) {
  const vm = this;
  vm.message = 'Home!';
}

module.exports = homeController;
