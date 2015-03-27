(function() {

    var BusinessLogic = function(view, api, userData, events) {
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

    function purchaseTitle(titleID) {
        var self = this,
            successStream = Rx.Observable.fromArray([]),
            failureStream = Rx.Observable.fromArray([]);

        Rx.Observable
            .fromPromise(this.getAuthToken())
            .forEach(function (success) {
                successStream(success);
            }, function (failure) {
                failureStream.push(failure);
            });

        successStream.forEach(function () {
            console.log('success');
        });

        failureStream.forEach(function () {
            console.log('failure');
        });
        //
        //Rx.Observable
        //    .flatMapLatest(this.getAuthToken)
        //    .forEach(function() {
        //        // promise is resolved with undefined
        //        console.log('success');
        //    }, function() {
        //        console.log('YEAH?');
        //    });

    }

    function purchaseTitleOld(titleId) {
        console.log(titleId);
        this
            .getAuthToken()
            .then(
                this.checkBalance(titleId),     // Success authToken
                this.showLoginModal(titleId), // Error authToken
                this.notifyProgress()) // Notification method
            .then(
                this.doPurchase(titleId),       // Success checkBalance
                this.depositMoney(),              // Error checkBalance
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
            // We do not return this deferred, since we want to break the chain and start again after showing the login modal
            this
                .view
                .showLoginModal(deferred)
                .progress(this.notifyProgress())
                .always(function() {this.purchaseTitle(titleId)}.bind(this));

            // To break the chain we keep it alive forever.
            return new $.Deferred();
        }.bind(this);
    }

    function depositMoney(titleId) {
        return function() {
            console.log('-depositMoney');
            var deferred = new $.Deferred();
            deferred.notify(BEGIN_METHOD, "depositMoney");

            this
                .view
                .depositMoney(deferred)
                .progress(this.notifyProgress())
                .always(function() {this.purchaseTitle(titleId)}.bind(this));

            // To break the chain we keep it alive forever.
            return new $.Deferred();
        }.bind(this);
    }

    function doPurchase(titleId) {
        return function () {
            console.log("-doPurhcase");
            var deferred = new $.Deferred();

            deferred.notify(BEGIN_METHOD, 'doPurchase');

            this.api.doPurchase(deferred);
            return deferred.promise();
        }.bind(this);
    }

    function showConfirmation() {
        return function () {
            console.log("-showConfirmation");
            var deferred = new $.Deferred();

            deferred.notify(BEGIN_METHOD, 'showConfirmation');

            this.view.showConfirmation(deferred)
                .progress(this.notifyProgress())
                .done(function() {
                    deferred.notify(BEGIN_METHOD, 'stop');
                });
            return deferred.promise();
        }.bind(this);
    }

    function showBuyError(titleId) {
        return function () {
            console.log("-showBuyError");
            var deferred = new $.Deferred();

            deferred.notify(BEGIN_METHOD, 'showBuyError');

            this.view.showBuyError(deferred)
                .progress(this.notifyProgress())
                .always(function() {this.purchaseTitle(titleId)}.bind(this));

            // To break the chain we keep it alive forever.
            return new $.Deferred();
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
            this.events.trigger(arg, methodName);
        }.bind(this);
    }

}());
