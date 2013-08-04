deferred-example
================

Sample project using $.Deferred.  
 
_by Peter Ajtai & Jonathan Waltner_

To try it out:

1. Make sure you have [node, npm](https://github.com/creationix/nvm), and [grunt-cli](http://gruntjs.com/getting-started) installed.
1. Run `npm install`
1. Run `grunt server`

http://pajtai.github.io/deferred-example/

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
