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

## $.Deferred

Deferreds are an organizational tool to manage asynchronous (and even synchronous) events.They
allow you to transform the untestable spaghetti code that is often written to implement callbacks
into an easily scannable and unit testable chunk of programming. Deferreds can handle callbacks
in series or in parallel. $.Deferred is an implementation of PromisesA.

Asynchronous code is usually hard to read and test, since it is often implemented using nested
anonymous functions with branching logic mixed in for good measure.... callback hell.

While Deferreds do not remove the need for callbacks, they provide a structure for dealing with them,
and they turn things that are often handled as arguments in callbacks into object references.

### .done and .fail

A Deferred represents the future or existing result of a method call. For example, `$.Ajax`
is implemented using Deferred, so the success and error callbacks can be managed using done and fail:

```javascript
$.get('http://blah.com/blah')
    .done(successMethod)
    .fail(failMethod);
```

The above still pretty much looks like using callbacks, but we also have access to several
methods that are usually not implemented so easily with callbacks. For example, a useful method is `always`:

### .always and progress

```javascript
$.get('http://blah.com/blah')
    .done(successMethod)
    .fail(failMethod)
    .always(hideLoadingSpinner);
```

Finally, a deferred implementation can notify its listeners about the progress of the work being done.
This is very useful when using loading bars and other visual indications of work in progress.

```javascript
$.get('http://blah.com/blah')
    .done(successMethod)
    .fail(failMethod)
    .progress(moveProgressBar)
    .always(hideLoadingSpinner);
```

The above code can obviously be implemented using regular callbacks, but Deferreds make the
process more organized and streamlined.

### promises

The above examples are all listening to what happens to deferred instances. Promises are the
subset of the deferred implementation that can be used to listen to the fate of deferreds, but
they cannot be used to pass data in to - that is resolve or reject - a Deferred.

So, in the example above the `$.get` implements deferred and returns a promise. This promise
is the agreement to eventually notify the listener that the async task was completed or failed with
notification of progress meanwhile. This means that Deferreds organizationally make you divide
your code into two parts. The implementation of Deferred objects and the implementation of
promise listeners. This makes your code more organized, since you will now have a suite of
async tasks, and these tasks can be organized into async pathways.

Below are some more examples of using promises. For example, the `then` method can be used to
attach success, failure, and progress methods. It can be used to chain promises:

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
    showLoginModal()
        .then(
            switchToLoggedInState,
            showLoginWarning);
}
```

Then can be used to chain callbacks, and `when` can be used to run them in parallel:

```javascript
$.when(getCurrentTemperature(), getCurrentBarometricPressure(), getCurrentVisibility())
    .then(
        showConditionsView,
        showDataNotAvailableWarning,
        moveProgressBar);
```

### deferreds

So far we have only been looking at how to consume promises, and not how to make them. Implementing
a $.Deferred is definitely a little trickier than simply listening to the outcome of promises.
While jQuery's $.Deferred implemntaion is very powerful and useful, if your code relies on
many complicated asynchronous pathways, it might well be worthwhile to use a separate promise
librrayr - such as `async` - that are specifically geared toward managing promises. This is becuase
- as will be seen below - the implementation of deferreds in jQuery can be a little cumbersome,
since there is only a weak concept of "chaining" deferreds. Though there is discussion on the
jQuery forums as to how to improve this situations, so hopefully things will get better.

Let's take a look at an implementation of a typical [business logic requirement](https://github.com/pajtai/deferred-example/blob/master/app/src/BusinessLogic.js)
for a video on demannd (VOD) application. The flow is that we check for an authorization token.
If the token is available we check whether the user's balance is enough, and if it is then we make
the purhcase and show a confirmation. Each step along the pathway has error handling. In this
case after any errors, the pathway is restarted... this will become clear in the deferred implementations.

So our promise layer looks as follows and nicely represents the business logic:

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
