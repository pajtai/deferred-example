(function() {

    var CHECK_BALANCE_RESPONSE = 'checkBalanceResponse',
        ENOUGH = 'Enough',
        Api = function(apiEvents) {
            this.events = apiEvents;
        },
        prototypeMethods = {
            checkBalance: checkBalance,
            reportBalance: reportBalance
        };

    window.Api = Api;

    $.extend(Api.prototype, prototypeMethods);

    function checkBalance(deferred) {
        this.balanceDeferred = deferred;
        this.events.trigger(CHECK_BALANCE_RESPONSE);
    }

    function reportBalance(enough) {
        ENOUGH === enough
            ? this.balanceDeferred.resolve()
            : this.balanceDeferred.reject();
    }
}())
