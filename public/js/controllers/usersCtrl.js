(function(){

  angular
  .module('scaffold')

  .controller('usersCtrl', usersCtrl);

  usersCtrl.$inject = ["$state", "Auth"];

  function usersCtrl($state, Auth) {
    let userCtrlVm = this;
    userCtrlVm.login = (user) => {
      Auth.login(user);
    }
    userCtrlVm.register = (user) => {
      if (user.password === userCtrlVm.confirm){
        Auth.register(user)
      }
      else {
        swal({
          title: "Passwords do not match!",
          text: "Please re-enter your passwords and try again",
          type: "error",
          showConfirmButton: true,
          closeOnConfirm: true,
          timer: 2500
        })
      }
    }

  };
})()
