usersController.$inject = ['$scope'];

function usersController($scope) {
  const vm = this;
  vm.message = 'USERS!!!'
  console.log('users');
}

module.exports = usersController;
