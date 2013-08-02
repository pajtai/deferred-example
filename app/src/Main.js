(function($, BusinessLogic, Api, View) {

    var ALERT = "alert",
        BEGIN = "Begin",
        BEGIN_METHOD = "beginMethod",
        PURCHASE_TITLE = "purchaseTitle",
        STOP = "Stop",
        STOP_PURCHASE = "stopPurchase",
        SUCCESS = "success",
        SECONDARY = "secondary",

        $beginDemo = $("#beginDemo"),
        $currentCall = $("#currentCall"),

        api = new Api(),
        view = new View(),
        events = $("<div/>"),
        businessLogic = new BusinessLogic(view, api, events);

    addEventListeners();
    addClickListeners();

    function addEventListeners() {
        events.on(BEGIN_METHOD, function(event, data) {
            console.log(data);
            if (STOP_PURCHASE === data) {
                stopDemo();
            }
            updateCurrentCall(data);
        });
    }

    function addClickListeners() {
        $beginDemo.click(toggleBeginDemo);
    }

    function toggleBeginDemo() {
        $beginDemo.hasClass(ALERT) ? beginDemo() : stopDemo();
    }

    function beginDemo() {
        $beginDemo
            .removeClass(ALERT)
            .addClass(SUCCESS)
            .text(STOP);
        businessLogic.purchaseTitle(123);
    }

    function stopDemo() {
        $beginDemo
            .removeClass(SUCCESS)
            .addClass(ALERT)
            .text(BEGIN);
        businessLogic.cancelPurchaseTitle();
    }

    function updateCurrentCall(data) {
        console.log("d: " + data);
        $currentCall.find("li > a").removeClass(SUCCESS).addClass(SECONDARY).filter(":contains('" + data + "')").addClass(SUCCESS);
    }
}(window.jQuery, window.BusinessLogic, window.Api, window.View));
