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
            checkBuyPermissions: checkBuyPermissions,
            depositMoney: depositMoney,
            doPurchase: doPurchase,
            setParentalControls: setParentalControls,
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
                this.checkBalance(titleId),
                this.showLoginModal)
            .then(
                this.checkBuyPermissions(titleId),
                this.depositMoney)
            .then(
                this.doPurchase(titleId),
                this.setParentalControls
            )
            .then(
                this.showConfirmation(titleId),
                this.showBuyError(titleId)
            )
    }

    function getAuthToken() {

    }

    function checkBalance() {

    }

    function showLoginModal() {

    }

    function checkBuyPermissions() {

    }

    function depositMoney() {

    }

    function doPurchase() {

    }

    function setParentalControls () {

    }

    function showConfirmation() {

    }

    function showBuyError() {

    }
}());