(function($, BusinessLogic, Api, View, UserData) {

        // Store strings as variables to help with IDE auto completion.
    var ALERT = "alert",
        BEGIN = "Begin",
        BEGIN_METHOD = "beginMethod",
        CHECK_AUTH_RESPONSE = "checkAuthResponse",
        CHECK_BALANCE_RESPONSE = 'checkBalanceResponse',
        DO_PURCHASE = 'doPurchase',
        STOP = "In Progress",
        STOP_PURCHASE = "stopPurchase",
        SUCCESS = "success",
        SECONDARY = "secondary",
        SHOW_BUY_ERROR = "showBuyError",
        SHOW_CONFIRMATION = "showConfirmation",
        SHOW_DEPOSIT_MONEY = "showDepositMoney",
        SHOW_LOGIN_MODAL = "showLoginModal",
        INSTANT = "Instant",
        FAST = "Fast",
        SLOW = "Slow",

        // Cache some DOM elements. Caching could be more aggressive than this.
        $beginDemo = $("#beginDemo"),
        $currentCall = $("#currentCall"),
        $getAuthToken = $("#getAuthToken"),
        $checkBalance = $("#checkBalance"),
        $showLoginModal = $("#showLoginModal"),
        $doPurchase = $("#doPurchase"),
        $depositMoney = $("#depositMoney"),
        $showBuyError = $("#showBuyError"),
        $showConfirmation = $("#showConfirmation"),

        // Use divs removed from the DOM as separate Event channels
        businessLogicEvents = $("<div/>"),
        userDataEvents = $("<div/>"),
        viewEvents = $("<div/>"),
        apiEvents = $("<div/>"),


        // Construct the businessLogic layer by injecting its needed dependencies
        api = new Api(apiEvents),
        view = new View(viewEvents),
        userData = new UserData(userDataEvents),
        businessLogic = new BusinessLogic(view, api, userData, businessLogicEvents);

    addEventListeners();
    addClickListeners();

    /**
     * Listen to the api, view, and userData and respond to events on them.
     * This is how we are mocking out these layers.
     */
    function addEventListeners() {

        // User Data Events
        userDataEvents.on(CHECK_AUTH_RESPONSE, function() {
            sendResponseBack(
                userData, "setAuthToken", $getAuthToken);
        });

        // Api Events
        apiEvents.on(CHECK_BALANCE_RESPONSE, function() {
            sendResponseBack(
                api, "reportBalance", $checkBalance);
        });
        apiEvents.on(DO_PURCHASE, function() {
            sendResponseBack(
                api, "purchaseDone", $doPurchase);
        });

        // View Events
        viewEvents.on(SHOW_LOGIN_MODAL, function() {
            sendResponseBack(
                view, "login", $showLoginModal);
        });
        viewEvents.on(SHOW_DEPOSIT_MONEY, function() {
            sendResponseBack(
                view, "moneyDeposited", $depositMoney);
        });
        viewEvents.on(SHOW_CONFIRMATION, function() {
            sendResponseBack(
                view, "hideConfirmation", $showConfirmation);
        });
        viewEvents.on(SHOW_BUY_ERROR, function() {
            sendResponseBack(
                view, "hideBuyError", $showBuyError);
        });

        // Business Logic Events
        businessLogicEvents.on(BEGIN_METHOD, function(event, data) {
            if (STOP_PURCHASE === data) {
                stopDemo();
            }
            updateCurrentCall(data);
        });
    }

    /**
     * Respond to a data request.
     * The response's contents and the response speed will depend on DOM settings.
     * @param method
     * @param $ellie
     */
    function sendResponseBack(context, method, $ellie) {
        if ("login" === method) {
            console.log(">>>>>>>>>>>>>> ");
        }
        setTimeout(function() {
            if ("login" === method) {
                console.log("------------- " + getDelay($ellie));
            }
            context[method](
                getResult(
                    $ellie));
        }, getDelay($ellie));
    }

    /**
     * Get the speed of the response by querying the DOM.
     * @param $ellie
     * @returns {*}
     */
    function getDelay($ellie) {
        return getTime(
            $ellie
                .find(".speed a")
                .filter(".success")
                .text());
    }

    /**
     * Convert the qualitative desired speed of a response into milliseconds.
     * @param delay
     * @returns {number}
     */
    function getTime(delay) {
        var time = 1000;
        if (INSTANT === delay) time = 0;
        if (FAST === delay) time = 250;
        if (SLOW === delay) time = 1000;
        return time;
    }

    /**
     * Get the desired response by querying the DOM.
     * @param $ellie
     * @returns {*}
     */
    function getResult($ellie) {
        return $ellie
            .find(".result a")
            .filter(".success")
            .text();
    }

    function addClickListeners() {
        $beginDemo.click(toggleBeginDemo);
        $getAuthToken.on("click", "a", updateSuccessButton);
        $checkBalance.on("click", "a", updateSuccessButton);
        $showLoginModal.on("click", "a", updateSuccessButton);
        $doPurchase.on("click", "a", updateSuccessButton);
        $depositMoney.on("click", "a", updateSuccessButton);
        $showConfirmation.on("click", "a", updateSuccessButton);
    }

    /**
     * Make sure that only one button in a button group has the 'success' class.
     * @param event
     */
    function updateSuccessButton(event) {
        var $this = $(this),
            $a = $this.parent().parent().find('a');
        console.log("click!");
        event.preventDefault();
        $a.removeClass(SUCCESS).addClass(SECONDARY);
        $this.addClass("success");
    }

    function toggleBeginDemo() {
        if ($beginDemo.hasClass(ALERT)) beginDemo();
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

    /**
     * Visually represent the current method that is being run on the businessLogic layer.
     * @param data
     */
    function updateCurrentCall(data) {
        console.log(data);
        $currentCall.find("li > a").removeClass(SUCCESS).addClass(SECONDARY).filter(":contains('" + data + "')").addClass(SUCCESS);
    }
}(window.jQuery, window.BusinessLogic, window.Api, window.View, window.UserData));
