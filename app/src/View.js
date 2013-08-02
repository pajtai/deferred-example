(function() {

    var SHOW_LOGIN_MODAL = "showLoginModal",
        View = function(viewEvents) {
            this.events = viewEvents;
        },
        prototypeMethods = {
            showLoginModal: showLoginModal,
            login: login
        };

    window.View = View;

    $.extend(View.prototype, prototypeMethods);

    function showLoginModal(loginModalRequest) {
        this.loginModalRequest = loginModalRequest;
        this.events.trigger(SHOW_LOGIN_MODAL);
        return loginModalRequest;
    }

    function login() {
        this.loginModalRequest.resolve();
    }
}())
