(function() {
    'use strict';

    var Api = function(apiEvents) {
            this.events = apiEvents;
        },
        prototypeMethods = {
            checkBalance: checkBalance,
            reportBalance: reportBalance,
            doPurchase: doPurchase,
            purchaseDone: purchaseDone
        };

    window.Api = Api;

    $.extend(Api.prototype, prototypeMethods);

    function checkBalance(deferred) {
        this.balanceDeferred = deferred;
        this.events.trigger(CHECK_BALANCE_RESPONSE);
        return deferred;
    }

    function reportBalance(enough) {
        ENOUGH === enough
            ? this.balanceDeferred.resolve()
            : this.balanceDeferred.reject();
    }

    function doPurchase(deferred) {
        this.balanceDeferred = deferred;
        this.events.trigger(DO_PURCHASE);
        return deferred;
    }

    function purchaseDone(success) {
        SUCCESS === success
            ? this.balanceDeferred.resolve()
            : this.balanceDeferred.reject();
    }
}());
