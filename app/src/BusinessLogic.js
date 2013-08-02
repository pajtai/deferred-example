(function($) {

    var BEGIN_METHOD = "beginMethod",
        PURCHASE_TITLE = "purchaseTitle",
        STOP_PURCHASE = "stopPurchase",
        BusinessLogic = function(view, api, userData, events) {
            this.view = view;
            this.api = api;
            this.userData = userData;
            this.events = events;
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
            showBuyError: showBuyError,
            cancelPurchaseTitle: cancelPurchaseTitle,
            stopPurchase: stopPurchase
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
        console.log(titleId);
        this
            .getAuthToken()
            .then(
                this.checkBalance(titleId),     // Success authToken
                this.showLoginModal)            // Error authToken
//            .then(
//                this.doPurchase(titleId),       // Success checkBalance
//                this.depositMoney)              // Error checkBalance
//            .then(
//                this.showConfirmation(titleId), // Success doPurchase
//                this.showBuyError(titleId)      // Error doPurchase
//            )
            .always(
                this.stopPurchase.bind(this)
            )
    }

    function getAuthToken() {
        var deferred = new $.Deferred();

        this.stopHandler = deferred;
        this.events.trigger(BEGIN_METHOD, "getAuthToken");

        this.userData.getAuthToken(deferred);
        return deferred.promise();
    }

    function checkBalance(titleId) {
        return function(deferred) {
            console.log("check balance");
        }
    }

    function showLoginModal() {
        console.log("show login modals")
    }

    function depositMoney() {

    }

    function doPurchase() {

    }

    function showConfirmation() {

    }

    function showBuyError() {

    }

    function cancelPurchaseTitle() {

    }

    function stopPurchase() {
        console.log("stop purchase");
        this.events.trigger(BEGIN_METHOD, "stopPurchase");
        this.stopHandler.reject();
    }

}(window.jQuery));
