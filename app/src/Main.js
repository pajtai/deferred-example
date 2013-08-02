(function($, BusinessLogic, Api, View, UserData) {

    var ALERT = "alert",
        BEGIN = "Begin",
        BEGIN_METHOD = "beginMethod",
        CHECK_AUTH_RESPONSE = "checkAuthResponse",
        PURCHASE_TITLE = "purchaseTitle",
        STOP = "Stop",
        STOP_PURCHASE = "stopPurchase",
        SUCCESS = "success",
        SECONDARY = "secondary",
        SHOW_LOGIN_MODAL = "showLoginModal",
        INSTANT = "Instant",
        FAST = "Fast",
        SLOW = "Slow",

        $beginDemo = $("#beginDemo"),
        $currentCall = $("#currentCall"),
        $getAuthToken = $("#getAuthToken"),
        $checkBalance = $("#checkBalance"),
        $showLoginModal = $("#showLoginModal"),
        $doPurchase = $("#doPurchase"),
        $depositMoney = $("#depositMoney"),

        // Use divs removed from the DOM as separate Event channels
        events = $("<div/>"),
        userDataEvents = $("<div/>"),
        viewEvents = $("<div/>"),
        apiEvents = $("<div/>"),


        api = new Api(apiEvents),
        view = new View(viewEvents),
        userData = new UserData(userDataEvents),
        businessLogic = new BusinessLogic(view, api, userData, events);

    addEventListeners();
    addClickListeners();

    function addEventListeners() {

        // User Data Events
        userDataEvents.on(CHECK_AUTH_RESPONSE, function() {
            var delay = $getAuthToken.find(".speed a").filter(".success").text();
            console.log("delay is: " + delay);
            setTimeout(function() {
                userData.setAuthToken($getAuthToken.find(".result a").filter(".success").text());
            }, getTime(delay));
            console.log("text is " + delay);
        });

        // Business Logic Events
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
        $getAuthToken.on("click", "a", updateSuccessButton);
        $checkBalance.on("click", "a", updateSuccessButton);
        $showLoginModal.on("click", "a", updateSuccessButton);
        $doPurchase.on("click", "a", updateSuccessButton);
        $depositMoney.on("click", "a", updateSuccessButton);
    }

    function updateSuccessButton(event) {
        var $this = $(this),
            $a = $this.parent().parent().find('a');
        console.log("click!");
        event.preventDefault();
        $a.removeClass(SUCCESS).addClass(SECONDARY);
        $this.addClass("success");
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

    function getTime(delay) {
        var time = 0;
        if (FAST === delay) time = 250;
        if (SLOW === delay) time = 1000;
        console.log("delay is: " + time);
        return time;
    }
}(window.jQuery, window.BusinessLogic, window.Api, window.View, window.UserData));
