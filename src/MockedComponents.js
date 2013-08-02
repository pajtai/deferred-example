(function() {

    var CHECK_AUTH_SPEED = "checkAuthSpeed",
        CHECK_AUTH_RESPONSE = "checkAuthResponse",
        VALID = "Valid",
        View = function() {

        },
        API = function() {

        },
        UserData = function(userDataEvents) {
            this.events = userDataEvents;
        },
        userDataPrototypeMethods = {
            getAuthToken: getAuthToken,
            setAuthToken: setAuthToken
        };

    window.View = View;
    window.Api = API;
    window.UserData = UserData;

    $.extend(UserData.prototype, userDataPrototypeMethods);

    function getAuthToken(authTokenRequest) {
        this.authTokenRequest = authTokenRequest;
        this.events.trigger(CHECK_AUTH_RESPONSE);
    }

    function setAuthToken(authToken) {
        VALID === authToken
            ? this.authTokenRequest.resolve()
            : this.authTokenRequest.reject();
    }

}());
