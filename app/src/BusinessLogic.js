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
            stopPurchase: stopPurchase,
            notifyProgress: notifyProgress
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
                this.showLoginModal(titleId), // Error authToken
                this.notifyProgress()) // Notification method
            .then(
                this.doPurchase(titleId),       // Success checkBalance
                this.depositMoney,              // Error checkBalance
                this.notifyProgress())
            .then(
                this.showConfirmation(titleId), // Success doPurchase
                this.showBuyError(titleId),      // Error doPurchase
                this.notifyProgress()
            )
            .done(
                this.stopPurchase.bind(this)
            )
            .fail(function() {
                console.log("Faill!!!!!!");
                console.log("Faill!!!!!!");
                console.log("Faill!!!!!!");
                console.log("Faill!!!!!!");
                console.log("Faill!!!!!!");
            })


//        var self = this;
//        this.notifyProgress(BEGIN_METHOD, 'getAuthToken');
//        this.getAuthToken(function (result) {
//            if (VALID === result) {
//                self.notifyProgress(BEGIN_METHOD, 'checkBalance');
//                self.checkBalance(function (balance) {
//                    if (ENOUGH === balance) {
//                        self.notifyProgress(BEGIN_METHOD, 'doPurchase');
//                        self.doPurchase(function (success) {
//                            if (success) {
//                                self.notifyProgress(BEGIN_METHOD, 'showConfirmation');
//                                self.showConfirmation();
//                            } else {
//                                self.notifyProgress(BEGIN_METHOD, 'showBuyError');
//                                self.showBuyError();
//                            }
//                        });
//                    } else {
//                        self.notifyProgress(BEGIN_METHOD, 'depositMoney');
//                        self.depositMoney();
//                    }
//                });
//            } else {
//                self.notifyProgress(BEGIN_METHOD, 'showLoginModal');
//                self.showLoginModal();
//            }
//        });
    }

    function getAuthToken() {
        console.log("-getAuthToken" + new Date());
        var deferred = new $.Deferred();

        this.userData.getAuthToken(deferred);
        deferred.notify(BEGIN_METHOD, 'getAuthToken');
        return deferred.promise();
    }

    function checkBalance(titleId) {
        return function () {
            console.log("-checkBalance");
            var deferred = new $.Deferred();

            deferred.notify(BEGIN_METHOD, 'checkBalance');

            this.api.checkBalance(deferred);
            return deferred.promise();
        }.bind(this);
    }

    function showLoginModal(titleId) {
        return function() {
            console.log("-showLoginModal" + new Date());
            var deferred = new $.Deferred();
            deferred.notify(BEGIN_METHOD, "showLoginModal");
            this
                .view
                .showLoginModal(deferred)
                .progress(this.notifyProgress())
                .always(function() {this.purchaseTitle(titleId)}.bind(this));
        }.bind(this);
    }

    function depositMoney() {
        return function() {
            console.log('-depositMoney');
        }.bind(this);
    }

    function doPurchase(titleId) {
        return function () {
            console.log("-doPurhcase");
            var deferred = new $.Deferred();

            deferred.notify(BEGIN_METHOD, 'doPurchase');

            this.api.checkBalance(deferred);
            return deferred.promise();
        }.bind(this);
    }

    function showConfirmation() {
        return function() {
            console.log("-showConfirmation");
        }.bind(this);
    }

    function showBuyError() {
        return function() {
            console.log("-showBuyError");
        }.bind(this);
    }

    function cancelPurchaseTitle() {
        return function() {
            console.log("-cancelPurchaseTitle");
        }.bind(this);
    }

    function stopPurchase() {
        console.log("-stopPurcahse");
        this.events.trigger(BEGIN_METHOD, "stopPurchase");
    }

    function notifyProgress () {
        return function(arg, methodName) {
            if (!arg || !methodName) {
                return;
            }
            console.log(arg + ' : ' + methodName + " - " + new Date().getTime());
            this.events.trigger(arg, methodName);
        }.bind(this);
    }

}(window.jQuery));
