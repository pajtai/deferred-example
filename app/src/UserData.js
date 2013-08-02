(function() {

    var CHECK_AUTH_RESPONSE = "checkAuthResponse",
        VALID = "Valid",
        UserData = function(userDataEvents) {
            this.events = userDataEvents;
        },
        prototypeMethods = {
            getAuthToken: getAuthToken,
            setAuthToken: setAuthToken
        };

    window.UserData = UserData;

    $.extend(UserData.prototype, prototypeMethods);

    function getAuthToken(authTokenRequest) {
        this.authTokenRequest = authTokenRequest;
        this.events.trigger(CHECK_AUTH_RESPONSE);
        return authTokenRequest;
    }

    function setAuthToken(authToken) {
        VALID === authToken
            ? this.authTokenRequest.resolve()
            : this.authTokenRequest.reject();
    }

}());
