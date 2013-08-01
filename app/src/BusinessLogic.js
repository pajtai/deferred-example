(function() {

    var BusinessLogic = function(view, api) {
            this.view = view;
            this.api = api;
        },
        prototypeMethods = {
            getApi: getApi,
            getView: getView,
            purchaseTitle: purchaseTitle,
            getAuthToken: getAuthToken,
            checkBalance: checkBalance,
            showLoginModal: showLoginModal,
            depositMoney: depositMoney,
            doPurchase: doPurchase,
            showConfirmation: showConfirmation,
            showBuyError: showBuyError
        };

    window.BusinessLogic = BusinessLogic;

    $.extend(BusinessLogic.prototype, prototypeMethods);

    function getApi() {
        return this.api;
    }

    function getView() {
        return this.view;
    }

    function purchaseTitle(titleId) {
        this
            .getAuthToken()
            .then(
                this.checkBalance(titleId),     // Success authToken
                this.showLoginModal)            // Error authToken
            .then(
                this.doPurchase(titleId),       // Success checkBalance
                this.depositMoney)              // Error checkBalance
            .then(
                this.showConfirmation(titleId), // Success doPurchase
                this.showBuyError(titleId)      // Error doPurchase
            )
    }

    function getAuthToken() {

    }

    function checkBalance() {

    }

    function showLoginModal() {

    }

    function depositMoney() {

    }

    function doPurchase() {

    }

    function showConfirmation() {

    }

    function showBuyError() {

    }
}());