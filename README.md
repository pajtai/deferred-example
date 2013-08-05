deferred-example
================

Sample project using $.Deferred.  
 
_by Peter Ajtai & Jonathan Waltner_

To try it out visiting the following website and play around:

http://pajtai.github.io/deferred-example/

or follow the following steps to hack away:

1. Make sure you have [node, npm](https://github.com/creationix/nvm), and [grunt-cli](http://gruntjs.com/getting-started) installed.
1. Run `npm install`
1. Run `grunt server`

Deferreds are important because they are an organizational tool to manage asynchronous (and even synchronous) events. In other words,
they allow you to transform the untestable spaghetti code that is often written to implement callbacks
in series or parallel into an easily scannable and unit testable chunk of programming.

What makes asynchronous hard to read and test is that it is often implemented used nested anonymous functions.... callback hell.

Deferreds are simply wrappers around callbacks. A Deferred represents the future or existing
result of a method call. For example, `$.Ajax` is implemented using Deferred, so the success and error callbacks
can be managed using done and fail:

```javascript
$.get('http://blah.com/blah')
    .done(successMethod)
    .fail(failMethod);
```

The above is still pretty much looks like using callbacks, but we also have access to several
methods that are usually not implemented so easilly with callbacks. For example, a useful method is always:

```javascript
$.get('http://blah.com/blah')
    .done(successMethod)
    .fail(failMethod)
    .always(hideLoadingSpinner);
```

Finally, a deferred implemntation can notify its listeners about the progress of the work being done.

```javascript
$.get('http://blah.com/blah')
    .done(successMethod)
    .fail(failMethod)
    .progress(moveProgressBar)
    .always(hideLoadingSpinner);
```

The above code can obviously be implemented using regular callbacks, but Deferreds makes the
process more organized and streamlined.

One aspect of how Deferreds help in organizing code, is that they divide the use of asunchronous
code into the running and consuming of asynchronous code. Deferreds are used to reference code that
will be completed in the future, and a Deferred can be used to attach a result, failure, or progress.
A promise is simply something that listens to a Deferred. A promise can only react to what happens
to a deferred. It cannot modify a deferred. That is a promise can be used to attach callback, but
a promise cannot be used to attach results, failure, or progress.

Deferreds really shine when running separate asynchronous events in series or in paralled.
Doing this is almost always necessary even in seemingly trivial bits of code. For example
a login modal followed by a login request is two asynchronous events in series. One event's speed
depends on the user's typing, while the other's speed depends on the user's internet connectivity and
server speed.

```javascript
function login() {
    showLoginModal(function(userData) {
        $.post(..., function(success) {
            if (success) {
                switchToLoggedInState();
            } else {
                showLoginWarning();
            }
        })
    })
}
```

The above can be written as follows with Deferreds:

```javascript
function login() {
    showLoginModal()
        .then(
            switchToLoggedInState,
            showLoginWarning);
}
```

Deferreds have a `.then` method that takes three (two optional) arguments. The first argument
 is the success callback, the second is the error callback, and the third is the progress
 notification callback.

Then can be used to chain callbacks, and `when` can be used to run them in parallel:

```javascript
$.when(getCurrentTemperature(), getCurrentBarometricPressure(), getCurrentVisibility())
    .then(
        showConditionsView,
        showDataNotAvailableWarning,
        moveProgressBar);
```

Deferreds can be used to make your code more readable and testable. For example this implementation uses Deferreds to
make the [business logic layer](https://github.com/pajtai/deferred-example/blob/master/app/src/BusinessLogic.js) of a title purchase clear:

```javascript
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
```

References:

http://eng.wealthfront.com/2012/12/jquerydeferred-is-most-important-client.html

http://www.html5rocks.com/en/tutorials/async/deferred/

http://net.tutsplus.com/tutorials/javascript-ajax/wrangle-async-tasks-with-jquery-promises/

http://danieldemmel.me/blog/2013/03/22/an-introduction-to-jquery-deferred-slash-promise/
