(function() {

    var SHOW_LOGIN_MODAL = "showLoginModal",
        View = function(viewEvents) {
            this.events = viewEvents;
        },
        prototypeMethods = {
            showLoginModal: showLoginModal
        };

    window.View = View;

    $.extend(View.prototype, prototypeMethods);

    function showLoginModal(loginModalRequest) {
        this.loginModalRequest = loginModalRequest;
        this.events.trigger(SHOW_LOGIN_MODAL);
    }
}())