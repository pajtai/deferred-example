(function() {

    var SHOW_LOGIN_MODAL = "showLoginModal",
        SHOW_BUY_ERROR = "showBuyError",
        SHOW_DEPOSIT_MONEY = "showDepositMoney",
        SHOW_CONFIRMATION = "showConfirmation",
        View = function(viewEvents) {
            this.events = viewEvents;
        },
        prototypeMethods = {
            showLoginModal: showLoginModal,
            login: login,
            depositMoney: depositMoney,
            moneyDeposited: moneyDeposited,
            showConfirmation: showConfirmation,
            hideConfirmation: hideConfirmation,
            showBuyError: showBuyError,
            hideBuyError: hideBuyError
        };

    window.View = View;

    $.extend(View.prototype, prototypeMethods);

    function showLoginModal(loginModalRequest) {
        this.loginModalRequest = loginModalRequest;
        this.events.trigger(SHOW_LOGIN_MODAL);
        // We return the passed in deferred for convenience in attaching done, etc to the call
        return loginModalRequest;
    }

    function login() {
        this.loginModalRequest.resolve();
    }

    function depositMoney(depositMoneyRequest) {
       this.depositMoneyRequest = depositMoneyRequest;
        this.events.trigger(SHOW_DEPOSIT_MONEY);
        return depositMoneyRequest;
    }

    function moneyDeposited() {
        this.depositMoneyRequest.resolve();
    }

    function showConfirmation(showConfirmationRequest) {
        this.showConfirmationRequest = showConfirmationRequest;
        this.events.trigger(SHOW_CONFIRMATION);
        return showConfirmationRequest;
    }

    function hideConfirmation() {
        this.showConfirmationRequest.resolve();
    }

    function showBuyError(showErrorRequest) {
        this.showBuyErrorRequest = showErrorRequest;
        this.events.trigger(SHOW_BUY_ERROR);
        return showErrorRequest;
    }

    function hideBuyError() {
        this.showBuyErrorRequest.resolve();
    }
}())
