module.exports = function (grunt) {

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      meta: {
          banner:
            '/*'+
            'Copyright (c) Microsoft Open Technologies, Inc.  All rights reserved.\r\n' +
            'Microsoft Open Technologies. Licensed under the Apache License, Version 2.0 (the "License"); you.\r\n' +
            'may not use this file except in compliance with the License. You may.\r\n' +
            'obtain a copy of the License at.\r\n\r\n' +
            'http://www.apache.org/licenses/LICENSE-2.0.\r\n\r\n' +
            'Unless required by applicable law or agreed to in writing, software.\r\n' +
            'distributed under the License is distributed on an "AS IS" BASIS,.\r\n' +
            'WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or.\r\n' +
            'implied. See the License for the specific language governing permissions.\r\n' +
            'and limitations under the License..\r\n' +
            '*/'
      },
      concat: {
          all: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/intro.js',
              'src/core/headers/basicheader-modern.js',

              // Stack trace start
              'src/core/longstacktraces/longstackbegin.js',
              'src/core/longstacktraces/longstacktraces.js',

              'src/core/internal/errors.js',

              'src/core/headers/enumeratorheader.js',

              'src/core/internal/bindcallback.js',
              'src/core/internal/dontenums.js',
              'src/core/internal/isequal.js',
              'src/core/internal/util.js',
              'src/core/internal/trycatch.js',
              'src/core/internal/priorityqueue.js',
              'src/core/disposables/compositedisposable.js',
              'src/core/disposables/disposable.js',
              'src/core/disposables/booleandisposable.js',
              'src/core/disposables/refcountdisposable.js',
              'src/core/disposables/scheduleddisposable.js',
              'src/core/concurrency/scheduleditem.js',
              'src/core/concurrency/scheduler.js',
              'src/core/concurrency/scheduler.recursive.js',
              'src/core/concurrency/scheduler.periodic.js',
              'src/core/concurrency/scheduler.wrappers.js',
              'src/core/concurrency/scheduleperiodicrecursive.js',
              'src/core/concurrency/immediatescheduler.js',
              'src/core/concurrency/currentthreadscheduler.js',
              'src/core/concurrency/timeoutscheduler.js',
              'src/core/concurrency/catchscheduler.js',
              'src/core/notification.js',
              'src/core/enumerator.js',
              'src/core/enumerable.js',
              'src/core/observer.js',
              'src/core/abstractobserver.js',
              'src/core/anonymousobserver.js',
              'src/core/checkedobserver.js',
              'src/core/scheduledobserver.js',
              'src/core/observeonobserver.js',
              'src/core/observable.js',
              'src/core/perf/observablebase.js',

              // Concurrency
              'src/core/linq/observable/observeon.js', // ObserveOnObserver
              'src/core/linq/observable/subscribeon.js', // SingleAssignmentDisposable, SerialDisposable, ScheduleDisposable

              // Async
              'src/core/linq/observable/frompromise.js', // AsyncSubject, asObservable
              'src/core/linq/observable/topromise.js',

              // Creation
              'src/core/perf/operators/toarray.js',
              'src/core/linq/observable/create.js',
              'src/core/linq/observable/defer.js',
              'src/core/linq/observable/empty.js',
              'src/core/perf/operators/from.js',
              'src/core/perf/operators/fromarrayobservable.js','src/core/perf/operators/fromarray.js',
              'src/core/linq/observable/generate.js',
              'src/core/perf/operators/of.js',
              'src/core/linq/observable/ofarraychanges.js',
              'src/core/linq/observable/ofobjectchanges.js',
              'src/core/linq/observable/never.js',
              'src/core/linq/observable/pairs.js',
              'src/core/perf/operators/range.js',
              'src/core/linq/observable/repeat.js',
              'src/core/linq/observable/return.js',
              'src/core/linq/observable/throw.js',
              'src/core/linq/observable/using.js',

              // Multiple
              'src/core/linq/observable/ambproto.js',
              'src/core/linq/observable/amb.js',
              'src/core/linq/observable/catchproto.js',
              'src/core/linq/observable/catch.js',
              'src/core/linq/observable/combinelatestproto.js',
              'src/core/linq/observable/combinelatest.js',
              'src/core/linq/observable/concatproto.js',
              'src/core/linq/observable/concat.js',
              'src/core/linq/observable/concatall.js',
              'src/core/perf/operators/mergeproto.js',
              'src/core/linq/observable/merge.js',
              'src/core/perf/operators/mergeall.js',
              'src/core/linq/observable/mergedelayerror.js',
              'src/core/linq/observable/onerrorresumenextproto.js',
              'src/core/linq/observable/onerrorresumenext.js',
              'src/core/linq/observable/skipuntil.js',
              'src/core/linq/observable/switch.js',
              'src/core/linq/observable/takeuntil.js',
              'src/core/linq/observable/withlatestfrom.js',
              'src/core/linq/observable/zipproto.js',
              'src/core/linq/observable/zip.js',
              'src/core/linq/observable/ziparray.js',

              // Single
              'src/core/linq/observable/asobservable.js',
              'src/core/linq/observable/bufferwithcount.js',
              'src/core/linq/observable/dematerialize.js',
              'src/core/linq/observable/distinctuntilchanged.js',
              'src/core/linq/observable/do.js',
              'src/core/linq/observable/finally.js',
              'src/core/linq/observable/ignoreelements.js',
              'src/core/linq/observable/materialize.js',
              'src/core/linq/observable/repeatproto.js',
              'src/core/linq/observable/retry.js',
              'src/core/linq/observable/retrywhen.js',
              'src/core/linq/observable/scan.js',
              'src/core/linq/observable/skiplast.js',
              'src/core/linq/observable/startwith.js',
              'src/core/linq/observable/takelast.js',
              'src/core/linq/observable/takelastbuffer.js',
              'src/core/linq/observable/windowwithcount.js',

              // Standard query operators
              'src/core/linq/observable/concatmap.js',
              'src/core/linq/observable/concatmapobserver.js',
              'src/core/linq/observable/defaultifempty.js',
              'src/core/linq/observable/distinct.js',
              'src/core/linq/observable/groupby.js',
              'src/core/linq/observable/groupbyuntil.js',
              'src/core/perf/operators/map.js',
              'src/core/linq/observable/pluck.js',
              'src/core/linq/observable/selectmany.js',
              'src/core/linq/observable/selectmanyobserver.js',
              'src/core/linq/observable/selectswitch.js',
              'src/core/linq/observable/skip.js',
              'src/core/linq/observable/skipwhile.js',
              'src/core/linq/observable/take.js',
              'src/core/linq/observable/takewhile.js',
              'src/core/perf/operators/filter.js',

              // Aggregate Operators
              'src/core/linq/observable/_extremaby.js',
              'src/core/linq/observable/_firstonly.js',
              'src/core/linq/observable/aggregate.js', // scan, startwith, finalvalue
              'src/core/linq/observable/reduce.js', // scan, startwith, finalvalue
              'src/core/linq/observable/some.js',  // where
              'src/core/linq/observable/isempty.js', // any, select
              'src/core/linq/observable/every.js', // where, any
              'src/core/linq/observable/includes.js', // where, any
              'src/core/linq/observable/count.js', // where, aggregate
              'src/core/linq/observable/indexof.js',
              'src/core/linq/observable/sum.js', // select, aggregate
              'src/core/linq/observable/minby.js', // _extremaby
              'src/core/linq/observable/min.js',   // minby, _firstonly
              'src/core/linq/observable/maxby.js', // _extremaby
              'src/core/linq/observable/max.js',   // max, _firstonly
              'src/core/linq/observable/average.js',   // select, scan, aggregate, finalvalue
              'src/core/linq/observable/sequenceequal.js',   // compositedisposable
              'src/core/linq/observable/_elementatordefault.js',
              'src/core/linq/observable/elementat.js', // _elementatordefault
              'src/core/linq/observable/elementatordefault.js', // _elementatordefault
              'src/core/linq/observable/_singleordefault.js',
              'src/core/linq/observable/single.js', // _singleordefault, where
              'src/core/linq/observable/singleordefault.js', // _singleordefault, where
              'src/core/linq/observable/_firstordefault.js',
              'src/core/linq/observable/first.js', // _firstordefault, where
              'src/core/linq/observable/firstordefault.js', // _firstordefault, where
              'src/core/linq/observable/_lastordefault.js',
              'src/core/linq/observable/last.js', // _firstordefault, where
              'src/core/linq/observable/lastordefault.js', // _firstordefault, where
              'src/core/linq/observable/_findvalue.js',
              'src/core/linq/observable/find.js', // _findvalue, where
              'src/core/linq/observable/findindex.js', // _findvalue, where
              'src/core/linq/observable/toset.js',
              'src/core/linq/observable/tomap.js',

              // Async operators
              'src/core/linq/observable/spawn.js',
              'src/core/linq/observable/start.js', // toasync
              'src/core/linq/observable/toasync.js', // AsyncSubject, asObservable
              'src/core/linq/observable/fromcallback.js', // AsyncSubject, asObservable
              'src/core/linq/observable/fromnodecallback.js', // AsyncSubject, asObservable
              'src/core/linq/observable/fromevent-modern.js', // publish
              'src/core/linq/observable/fromeventpattern.js', // publish
              'src/core/linq/observable/startasync.js',

              // Backpressure operators
              'src/core/backpressure/pausable.js',
              'src/core/backpressure/pausablebuffered.js',
              'src/core/backpressure/controlled.js',
              'src/core/backpressure/stopandwait.js',
              'src/core/backpressure/windowed.js',

              // Binding operators
              'src/core/linq/observable/multicast.js', // ConnectableObservable
              'src/core/linq/observable/publish.js',   // mulitcast, Subject
              'src/core/linq/observable/share.js',   // mulitcast, Subject, Reference counted
              'src/core/linq/observable/publishlast.js', // multicast, AsyncSubject
              'src/core/linq/observable/publishvalue.js', // multicast, BehaviorSubject
              'src/core/linq/observable/sharevalue.js', // multicast, BehaviorSubject, Reference counted
              'src/core/linq/observable/replay.js', // multicast, ReplaySubject
              'src/core/linq/observable/sharereplay.js',
              'src/core/subjects/innersubscription.js',
              'src/core/subjects/behaviorsubject.js',
              'src/core/subjects/replaysubject.js',
              'src/core/linq/connectableobservable.js',

              // Coincidence operators
              'src/core/internal/dictionary.js',
              'src/core/linq/observable/join.js', // SerialDisposable, SingleAssignmentDisposable, RefCountDisposable, CompositeDisposable, Dictionary
              'src/core/linq/observable/groupjoin.js', // SerialDisposable, SingleAssignmentDisposable, RefCountDisposable, CompositeDisposable, Dictionary
              'src/core/linq/observable/buffer.js', // window, selectMany, toArray
              'src/core/linq/observable/window.js', // CompositeDisposable, RefCountDisposable, Subject, SingleAssignmentDisposable
              'src/core/linq/observable/pairwise.js',
              'src/core/linq/observable/partition.js',

              // Experimental operators
              'src/core/linq/enumerable/while.js', // Enumerable
              'src/core/linq/observable/let.js',
              'src/core/linq/observable/if.js', // defer, empty
              'src/core/linq/observable/for.js', // Enumerable.forEach, concatproto
              'src/core/linq/observable/while.js', // Enumerable.while, concatproto
              'src/core/linq/observable/dowhile.js', // Enumerable.while, concat
              'src/core/linq/observable/case.js', // defer, empty
              'src/core/linq/observable/expand.js', // immediateScheduler, SerialDisposable, CompositeDisposable, SingleAssignmentDisposable
              'src/core/linq/observable/forkjoin.js', // CompositeDisposable
              'src/core/linq/observable/forkjoinproto.js', // SingleAssignmentDisposable, CompositeDisposable
              'src/core/linq/observable/manyselect.js', // ImmediateScheduler, CurrentThreadScheduler, select, do, observeOn

              // Join pattern operators
              'src/core/internal/map.js',
              'src/core/joins/pattern.js',
              'src/core/joins/plan.js',
              'src/core/joins/activeplan.js',
              'src/core/joins/joinobserver.js',
              'src/core/linq/observable/and.js', // Pattern
              'src/core/linq/observable/thendo.js', // Pattern
              'src/core/linq/observable/when.js', // CompositeDisposable

              // Time based operators
              'src/core/linq/observable/_observabletimerdate.js', // AnonymousObservable
              'src/core/linq/observable/_observabletimerdateandperiod.js', // AnonymousObservable, normalizeTime
              'src/core/linq/observable/_observabletimertimespan.js', // AnonymousObservable, normalizeTime
              'src/core/linq/observable/_observabletimertimespanandperiod.js', // AnonymousObservable, defer, _observabletimerdateandperiod
              'src/core/linq/observable/interval.js', // timeoutScheduler, _observabletimertimespanandperiod
              'src/core/linq/observable/timer.js', // timeoutScheduler, _observabletimerdate, _observabletimerdateandperiod, _observabletimertimespan, _observabletimertimespanandperiod
              'src/core/linq/observable/delay.js', // AnonymousObservable, timeoutScheduler, SerialDisposable, materialize, timestamp
              'src/core/linq/observable/debounce.js', // AnonymousObservable, SerialDisposable, timeoutScheduler, SingleAssignmentDisposable, CompositeDisposable
              'src/core/linq/observable/windowwithtime.js', // AnonymousObservable, SerialDisposable, SingleAssignmentDisposable, RefCountDisposable, CompositeDisposable, addref, subject
              'src/core/linq/observable/windowwithtimeorcount.js', // AnonymousObservable, SerialDisposable, SingleAssignmentDisposable, RefCountDisposable, CompositeDisposable, addref, subject
              'src/core/linq/observable/bufferwithtime.js', // windowwithtime, selectMany, toArray
              'src/core/linq/observable/bufferwithtimeorcount.js', // windowwithtimeorcount, selectMany, toArray
              'src/core/linq/observable/timeinterval.js', // timeoutScheduler, defer, select
              'src/core/linq/observable/timestamp.js', // timeoutScheduler, select
              'src/core/linq/observable/sample.js', // AnonymousObservable, CompositeDisposable, interval, timeoutScheduler
              'src/core/linq/observable/timeout.js', // AnonymousObservable, timeoutScheduler, throw, SingleAssignmentDisposable, SerialDisposable, CompositeDisposable
              'src/core/linq/observable/generatewithabsolutetime.js', // timeoutScheduler, AnonymousObservable
              'src/core/linq/observable/generatewithrelativetime.js', // timeoutScheduler, AnonymousObservable
              'src/core/linq/observable/delaysubscription.js', // delayWithSelector, timer, empty
              'src/core/linq/observable/delaywithselector.js',
              'src/core/linq/observable/timeoutwithselector.js',
              'src/core/linq/observable/debouncewithselector.js',
              'src/core/linq/observable/skiplastwithtime.js',
              'src/core/linq/observable/takelastwithtime.js',
              'src/core/linq/observable/takelastbufferwithtime.js',
              'src/core/linq/observable/takewithtime.js',
              'src/core/linq/observable/skipwithtime.js',
              'src/core/linq/observable/skipuntilwithtime.js',
              'src/core/linq/observable/takeuntilwithtime.js',
              'src/core/linq/observable/throttlefirst.js',

              // Transducers
              'src/core/linq/observable/transduce.js',

              // Experimental Flattening
              'src/core/linq/observable/exclusive.js',
              'src/core/linq/observable/exclusivemap.js',

              // Virtual time
              'src/core/concurrency/virtualtimescheduler.js',
              'src/core/concurrency/historicalscheduler.js',

              'src/core/anonymousobservable.js',
              'src/core/autodetachobserver.js',
              'src/core/linq/groupedobservable.js',
              'src/core/subjects/innersubscription.js',
              'src/core/subjects/subject.js',
              'src/core/subjects/asyncsubject.js',
              'src/core/subjects/anonymoussubject.js',
              'src/core/backpressure/pauser.js',
              'src/core/headers/exports.js',

              // Long stacktrace end
              'src/core/longstacktraces/longstackend.js',

              'src/core/headers/outro.js',
            ],
            dest: 'dist/rx.all.js'
          },
          allcompat: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/intro.js',
              'src/core/headers/basicheader.js',

              // Stack trace start
              'src/core/longstacktraces/longstackbegin.js',
              'src/core/longstacktraces/longstacktraces.js',

              'src/core/internal/errors.js',

              'src/core/headers/enumeratorheader.js',

              'src/core/internal/bindcallback.js',
              'src/core/internal/dontenums.js',
              'src/core/internal/isequal.js',
              'src/core/internal/util.js',
              'src/core/internal/trycatch.js',
              'src/core/internal/polyfills.js',
              'src/core/internal/priorityqueue.js',
              'src/core/disposables/compositedisposable.js',
              'src/core/disposables/disposable.js',
              'src/core/disposables/booleandisposable.js',
              'src/core/disposables/refcountdisposable.js',
              'src/core/disposables/scheduleddisposable.js',
              'src/core/concurrency/scheduleditem.js',
              'src/core/concurrency/scheduler.js',
              'src/core/concurrency/scheduler.recursive.js',
              'src/core/concurrency/scheduler.periodic.js',
              'src/core/concurrency/scheduler.wrappers.js',
              'src/core/concurrency/scheduleperiodicrecursive.js',
              'src/core/concurrency/immediatescheduler.js',
              'src/core/concurrency/currentthreadscheduler.js',
              'src/core/concurrency/timeoutscheduler.js',
              'src/core/concurrency/catchscheduler.js',
              'src/core/notification.js',
              'src/core/enumerator.js',
              'src/core/enumerable.js',
              'src/core/observer.js',
              'src/core/abstractobserver.js',
              'src/core/anonymousobserver.js',
              'src/core/checkedobserver.js',
              'src/core/scheduledobserver.js',
              'src/core/observeonobserver.js',
              'src/core/observable.js',
              'src/core/perf/observablebase.js',

              'src/core/linq/observable/observeon.js', // ObserveOnObserver
              'src/core/linq/observable/subscribeon.js', // SingleAssignmentDisposable, SerialDisposable, ScheduleDisposable

              // Async
              'src/core/linq/observable/frompromise.js', // AsyncSubject, asObservable
              'src/core/linq/observable/topromise.js',

              // Creation
              'src/core/perf/operators/toarray.js',
              'src/core/linq/observable/create.js',
              'src/core/linq/observable/defer.js',
              'src/core/linq/observable/empty.js',
              'src/core/perf/operators/from.js',
              'src/core/perf/operators/fromarrayobservable.js','src/core/perf/operators/fromarray.js',
              'src/core/linq/observable/generate.js',
              'src/core/perf/operators/of.js',
              'src/core/linq/observable/never.js',
              'src/core/linq/observable/pairs.js',
              'src/core/perf/operators/range.js',
              'src/core/linq/observable/repeat.js',
              'src/core/linq/observable/return.js',
              'src/core/linq/observable/throw.js',
              'src/core/linq/observable/using.js',

              // Multiple
              'src/core/linq/observable/ambproto.js',
              'src/core/linq/observable/amb.js',
              'src/core/linq/observable/catchproto.js',
              'src/core/linq/observable/catch.js',
              'src/core/linq/observable/combinelatestproto.js',
              'src/core/linq/observable/combinelatest.js',
              'src/core/linq/observable/concatproto.js',
              'src/core/linq/observable/concat.js',
              'src/core/linq/observable/concatall.js',
              'src/core/perf/operators/mergeproto.js',
              'src/core/linq/observable/merge.js',
              'src/core/perf/operators/mergeall.js',
              'src/core/linq/observable/mergedelayerror.js',
              'src/core/linq/observable/onerrorresumenextproto.js',
              'src/core/linq/observable/onerrorresumenext.js',
              'src/core/linq/observable/skipuntil.js',
              'src/core/linq/observable/switch.js',
              'src/core/linq/observable/takeuntil.js',
              'src/core/linq/observable/withlatestfrom.js',
              'src/core/linq/observable/zipproto.js',
              'src/core/linq/observable/zip.js',
              'src/core/linq/observable/ziparray.js',

              // Single
              'src/core/linq/observable/asobservable.js',
              'src/core/linq/observable/bufferwithcount.js',
              'src/core/linq/observable/dematerialize.js',
              'src/core/linq/observable/distinctuntilchanged.js',
              'src/core/linq/observable/do.js',
              'src/core/linq/observable/finally.js',
              'src/core/linq/observable/ignoreelements.js',
              'src/core/linq/observable/materialize.js',
              'src/core/linq/observable/repeatproto.js',
              'src/core/linq/observable/retry.js',
              'src/core/linq/observable/retrywhen.js',
              'src/core/linq/observable/scan.js',
              'src/core/linq/observable/skiplast.js',
              'src/core/linq/observable/startwith.js',
              'src/core/linq/observable/takelast.js',
              'src/core/linq/observable/takelastbuffer.js',
              'src/core/linq/observable/windowwithcount.js',

              // Standard query operators
              'src/core/linq/observable/concatmap.js',
              'src/core/linq/observable/concatmapobserver.js',
              'src/core/linq/observable/defaultifempty.js',
              'src/core/linq/observable/distinct.js',
              'src/core/linq/observable/groupby.js',
              'src/core/linq/observable/groupbyuntil.js',
              'src/core/perf/operators/map.js',
              'src/core/linq/observable/pluck.js',
              'src/core/linq/observable/selectmany.js',
              'src/core/linq/observable/selectmanyobserver.js',
              'src/core/linq/observable/selectswitch.js',
              'src/core/linq/observable/skip.js',
              'src/core/linq/observable/skipwhile.js',
              'src/core/linq/observable/take.js',
              'src/core/linq/observable/takewhile.js',
              'src/core/perf/operators/filter.js',

              // Aggregate Operators
              'src/core/linq/observable/_extremaby.js',
              'src/core/linq/observable/_firstonly.js',
              'src/core/linq/observable/aggregate.js', // scan, startwith, finalvalue
              'src/core/linq/observable/reduce.js', // scan, startwith, finalvalue
              'src/core/linq/observable/some.js',  // where
              'src/core/linq/observable/isempty.js', // any, select
              'src/core/linq/observable/every.js', // where, any
              'src/core/linq/observable/includes.js', // where, any
              'src/core/linq/observable/count.js', // where, aggregate
              'src/core/linq/observable/indexof.js',
              'src/core/linq/observable/sum.js', // select, aggregate
              'src/core/linq/observable/minby.js', // _extremaby
              'src/core/linq/observable/min.js',   // minby, _firstonly
              'src/core/linq/observable/maxby.js', // _extremaby
              'src/core/linq/observable/max.js',   // max, _firstonly
              'src/core/linq/observable/average.js',   // select, scan, aggregate, finalvalue
              'src/core/linq/observable/sequenceequal.js',   // compositedisposable
              'src/core/linq/observable/_elementatordefault.js',
              'src/core/linq/observable/elementat.js', // _elementatordefault
              'src/core/linq/observable/elementatordefault.js', // _elementatordefault
              'src/core/linq/observable/_singleordefault.js',
              'src/core/linq/observable/single.js', // _singleordefault, where
              'src/core/linq/observable/singleordefault.js', // _singleordefault, where
              'src/core/linq/observable/_firstordefault.js',
              'src/core/linq/observable/first.js', // _firstordefault, where
              'src/core/linq/observable/firstordefault.js', // _firstordefault, where
              'src/core/linq/observable/_lastordefault.js',
              'src/core/linq/observable/last.js', // _firstordefault, where
              'src/core/linq/observable/lastordefault.js', // _firstordefault, where
              'src/core/linq/observable/_findvalue.js',
              'src/core/linq/observable/find.js', // _findvalue, where
              'src/core/linq/observable/findindex.js', // _findvalue, where
              'src/core/linq/observable/toset.js',
              'src/core/linq/observable/tomap.js',

              // Async compat operators
              'src/core/linq/observable/spawn.js',
              'src/core/linq/observable/start.js', // toasync
              'src/core/linq/observable/toasync.js', // asyncsubject, asObservable
              'src/core/linq/observable/fromcallback.js', // AsyncSubject, asObservable
              'src/core/linq/observable/fromnodecallback.js', // AsyncSubject, asObservable
              'src/core/linq/observable/fromevent.js', // publish
              'src/core/linq/observable/fromeventpattern.js', // publish
              'src/core/linq/observable/startasync.js',

              // Backpressure operators
              'src/core/backpressure/pausable.js',
              'src/core/backpressure/pausablebuffered.js',
              'src/core/backpressure/controlled.js',
              'src/core/backpressure/stopandwait.js',
              'src/core/backpressure/windowed.js',

              // Binding operators
              'src/core/linq/observable/multicast.js', // ConnectableObservable
              'src/core/linq/observable/publish.js',   // mulitcast, Subject
              'src/core/linq/observable/share.js',   // mulitcast, Subject, Reference counted
              'src/core/linq/observable/publishlast.js', // multicast, AsyncSubject
              'src/core/linq/observable/publishvalue.js', // multicast, BehaviorSubject
              'src/core/linq/observable/sharevalue.js', // multicast, BehaviorSubject, Reference counted
              'src/core/linq/observable/replay.js', // multicast, ReplaySubject
              'src/core/linq/observable/sharereplay.js',
              'src/core/subjects/innersubscription.js',
              'src/core/subjects/behaviorsubject.js',
              'src/core/subjects/replaysubject.js',
              'src/core/linq/connectableobservable.js',

              // Coincidence operators
              'src/core/internal/dictionary.js',
              'src/core/linq/observable/join.js', // SerialDisposable, SingleAssignmentDisposable, RefCountDisposable, CompositeDisposable, Dictionary
              'src/core/linq/observable/groupjoin.js', // SerialDisposable, SingleAssignmentDisposable, RefCountDisposable, CompositeDisposable, Dictionary
              'src/core/linq/observable/buffer.js', // window, selectMany, toArray
              'src/core/linq/observable/window.js', // CompositeDisposable, RefCountDisposable, Subject, SingleAssignmentDisposable
              'src/core/linq/observable/pairwise.js',
              'src/core/linq/observable/partition.js',

              // Experimental operators
              'src/core/linq/enumerable/while.js', // Enumerable
              'src/core/linq/observable/let.js',
              'src/core/linq/observable/if.js', // defer, empty
              'src/core/linq/observable/for.js', // Enumerable.forEach, concatproto
              'src/core/linq/observable/while.js', // Enumerable.while, concatproto
              'src/core/linq/observable/dowhile.js', // Enumerable.while, concat
              'src/core/linq/observable/case.js', // defer, empty
              'src/core/linq/observable/expand.js', // immediateScheduler, SerialDisposable, CompositeDisposable, SingleAssignmentDisposable
              'src/core/linq/observable/forkjoin.js', // CompositeDisposable
              'src/core/linq/observable/forkjoinproto.js', // SingleAssignmentDisposable, CompositeDisposable
              'src/core/linq/observable/manyselect.js', // ImmediateScheduler, CurrentThreadScheduler, select, do, observeOn

              // Join pattern operators
              'src/core/internal/map.js',
              'src/core/joins/pattern.js',
              'src/core/joins/plan.js',
              'src/core/joins/activeplan.js',
              'src/core/joins/joinobserver.js',
              'src/core/linq/observable/and.js', // Pattern
              'src/core/linq/observable/thendo.js', // Pattern
              'src/core/linq/observable/when.js', // CompositeDisposable

              // Time based operators
              'src/core/linq/observable/_observabletimerdate.js', // AnonymousObservable
              'src/core/linq/observable/_observabletimerdateandperiod.js', // AnonymousObservable, normalizeTime
              'src/core/linq/observable/_observabletimertimespan.js', // AnonymousObservable, normalizeTime
              'src/core/linq/observable/_observabletimertimespanandperiod.js', // AnonymousObservable, defer, _observabletimerdateandperiod
              'src/core/linq/observable/interval.js', // timeoutScheduler, _observabletimertimespanandperiod
              'src/core/linq/observable/timer.js', // timeoutScheduler, _observabletimerdate, _observabletimerdateandperiod, _observabletimertimespan, _observabletimertimespanandperiod
              'src/core/linq/observable/delay.js', // AnonymousObservable, timeoutScheduler, SerialDisposable, materialize, timestamp
              'src/core/linq/observable/debounce.js', // AnonymousObservable, SerialDisposable, timeoutScheduler, SingleAssignmentDisposable, CompositeDisposable
              'src/core/linq/observable/windowwithtime.js', // AnonymousObservable, SerialDisposable, SingleAssignmentDisposable, RefCountDisposable, CompositeDisposable, addref, subject
              'src/core/linq/observable/windowwithtimeorcount.js', // AnonymousObservable, SerialDisposable, SingleAssignmentDisposable, RefCountDisposable, CompositeDisposable, addref, subject
              'src/core/linq/observable/bufferwithtime.js', // windowwithtime, selectMany, toArray
              'src/core/linq/observable/bufferwithtimeorcount.js', // windowwithtimeorcount, selectMany, toArray
              'src/core/linq/observable/timeinterval.js', // timeoutScheduler, defer, select
              'src/core/linq/observable/timestamp.js', // timeoutScheduler, select
              'src/core/linq/observable/sample.js', // AnonymousObservable, CompositeDisposable, interval, timeoutScheduler
              'src/core/linq/observable/timeout.js', // AnonymousObservable, timeoutScheduler, throw, SingleAssignmentDisposable, SerialDisposable, CompositeDisposable
              'src/core/linq/observable/generatewithabsolutetime.js', // timeoutScheduler, AnonymousObservable
              'src/core/linq/observable/generatewithrelativetime.js', // timeoutScheduler, AnonymousObservable
              'src/core/linq/observable/delaysubscription.js', // delayWithSelector, timer, empty
              'src/core/linq/observable/delaywithselector.js',
              'src/core/linq/observable/timeoutwithselector.js',
              'src/core/linq/observable/debouncewithselector.js',
              'src/core/linq/observable/skiplastwithtime.js',
              'src/core/linq/observable/takelastwithtime.js',
              'src/core/linq/observable/takelastbufferwithtime.js',
              'src/core/linq/observable/takewithtime.js',
              'src/core/linq/observable/skipwithtime.js',
              'src/core/linq/observable/skipuntilwithtime.js',
              'src/core/linq/observable/takeuntilwithtime.js',
              'src/core/linq/observable/throttlefirst.js',

              // Experimental Flattening
              'src/core/linq/observable/exclusive.js',
              'src/core/linq/observable/exclusivemap.js',

              // Transducers
              'src/core/linq/observable/transduce.js',

              // Virtual time
              'src/core/concurrency/virtualtimescheduler.js',
              'src/core/concurrency/historicalscheduler.js',

              'src/core/anonymousobservable.js',
              'src/core/autodetachobserver.js',
              'src/core/linq/groupedobservable.js',
              'src/core/subjects/innersubscription.js',
              'src/core/subjects/subject.js',
              'src/core/subjects/asyncsubject.js',
              'src/core/subjects/anonymoussubject.js',
              'src/core/backpressure/pauser.js',
              'src/core/headers/exports.js',

              // End long stack traces
              'src/core/longstacktraces/longstackend.js',

              'src/core/headers/outro.js',
            ],
            dest: 'dist/rx.all.compat.js'
          },
          basic: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/intro.js',
              'src/core/headers/basicheader.js',

              // Stack trace start
              'src/core/longstacktraces/longstackbegin.js',
              'src/core/longstacktraces/longstacktraces.js',

              'src/core/internal/errors.js',

              'src/core/headers/enumeratorheader.js',

              'src/core/internal/bindcallback.js',
              'src/core/internal/dontenums.js',
              'src/core/internal/isequal.js',
              'src/core/internal/util.js',
              'src/core/internal/trycatch.js',
              'src/core/internal/polyfills.js',
              'src/core/internal/priorityqueue.js',
              'src/core/disposables/compositedisposable.js',
              'src/core/disposables/disposable.js',
              'src/core/disposables/booleandisposable.js',
              'src/core/disposables/refcountdisposable.js',
              'src/core/disposables/scheduleddisposable.js',
              'src/core/concurrency/scheduleditem.js',
              'src/core/concurrency/scheduler.js',
              'src/core/concurrency/scheduler.recursive.js',
              'src/core/concurrency/scheduler.periodic.js',
              'src/core/concurrency/scheduler.wrappers.js',
              'src/core/concurrency/scheduleperiodicrecursive.js',
              'src/core/concurrency/immediatescheduler.js',
              'src/core/concurrency/currentthreadscheduler.js',
              'src/core/concurrency/timeoutscheduler.js',
              'src/core/concurrency/catchscheduler.js',
              'src/core/notification.js',
              'src/core/enumerator.js',
              'src/core/enumerable.js',
              'src/core/observer.js',
              'src/core/abstractobserver.js',
              'src/core/anonymousobserver.js',
              'src/core/checkedobserver.js',
              'src/core/scheduledobserver.js',
              'src/core/observeonobserver.js',
              'src/core/observable.js',
              'src/core/perf/observablebase.js',

              'src/core/linq/observable/observeon.js', // ObserveOnObserver
              'src/core/linq/observable/subscribeon.js', // SingleAssignmentDisposable, SerialDisposable, ScheduleDisposable

              // Async
              'src/core/linq/observable/frompromise.js', // AsyncSubject, asObservable
              'src/core/linq/observable/topromise.js',

              // Creation
              'src/core/perf/operators/toarray.js',
              'src/core/linq/observable/create.js',
              'src/core/linq/observable/defer.js',
              'src/core/linq/observable/empty.js',
              'src/core/perf/operators/from.js',
              'src/core/perf/operators/fromarrayobservable.js','src/core/perf/operators/fromarray.js',
              'src/core/linq/observable/generate.js',
              'src/core/linq/observable/never.js',
              'src/core/perf/operators/of.js',
              'src/core/linq/observable/pairs.js',
              'src/core/perf/operators/range.js',
              'src/core/linq/observable/repeat.js',
              'src/core/linq/observable/return.js',
              'src/core/linq/observable/throw.js',
              'src/core/linq/observable/using.js',

              // Multiple
              'src/core/linq/observable/ambproto.js',
              'src/core/linq/observable/amb.js',
              'src/core/linq/observable/catchproto.js',
              'src/core/linq/observable/catch.js',
              'src/core/linq/observable/combinelatestproto.js',
              'src/core/linq/observable/combinelatest.js',
              'src/core/linq/observable/concatproto.js',
              'src/core/linq/observable/concat.js',
              'src/core/linq/observable/concatall.js',
              'src/core/perf/operators/mergeproto.js',
              'src/core/linq/observable/merge.js',
              'src/core/perf/operators/mergeall.js',
              'src/core/linq/observable/mergedelayerror.js',
              'src/core/linq/observable/onerrorresumenextproto.js',
              'src/core/linq/observable/onerrorresumenext.js',
              'src/core/linq/observable/skipuntil.js',
              'src/core/linq/observable/switch.js',
              'src/core/linq/observable/takeuntil.js',
              'src/core/linq/observable/withlatestfrom.js',
              'src/core/linq/observable/zipproto.js',
              'src/core/linq/observable/zip.js',
              'src/core/linq/observable/ziparray.js',

              // Single
              'src/core/linq/observable/asobservable.js',
              'src/core/linq/observable/bufferwithcount.js',
              'src/core/linq/observable/dematerialize.js',
              'src/core/linq/observable/distinctuntilchanged.js',
              'src/core/linq/observable/do.js',
              'src/core/linq/observable/finally.js',
              'src/core/linq/observable/ignoreelements.js',
              'src/core/linq/observable/materialize.js',
              'src/core/linq/observable/repeatproto.js',
              'src/core/linq/observable/retry.js',
              'src/core/linq/observable/retrywhen.js',
              'src/core/linq/observable/scan.js',
              'src/core/linq/observable/skiplast.js',
              'src/core/linq/observable/startwith.js',
              'src/core/linq/observable/takelast.js',
              'src/core/linq/observable/takelastbuffer.js',
              'src/core/linq/observable/windowwithcount.js',

              // Standard query operators
              'src/core/linq/observable/concatmap.js',
              'src/core/linq/observable/concatmapobserver.js',
              'src/core/linq/observable/defaultifempty.js',
              'src/core/linq/observable/distinct.js',
              'src/core/perf/operators/map.js',
              'src/core/linq/observable/pluck.js',
              'src/core/linq/observable/selectmany.js',
              'src/core/linq/observable/selectmanyobserver.js',
              'src/core/linq/observable/selectswitch.js',
              'src/core/linq/observable/skip.js',
              'src/core/linq/observable/skipwhile.js',
              'src/core/linq/observable/take.js',
              'src/core/linq/observable/takewhile.js',
              'src/core/perf/operators/filter.js',

              // Transducers
              'src/core/linq/observable/transduce.js',

              'src/core/anonymousobservable.js',
              'src/core/autodetachobserver.js',
              'src/core/subjects/innersubscription.js',
              'src/core/subjects/subject.js',
              'src/core/subjects/asyncsubject.js',
              'src/core/subjects/anonymoussubject.js',
              'src/core/headers/exports.js',

              'src/core/longstacktraces/longstackend.js',

              'src/core/headers/outro.js',
            ],
            dest: 'dist/rx.compat.js'
          },
          modern: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/intro.js',
              'src/core/headers/basicheader-modern.js',

              // Stack trace start
              'src/core/longstacktraces/longstackbegin.js',
              'src/core/longstacktraces/longstacktraces.js',

              'src/core/internal/errors.js',

              'src/core/headers/enumeratorheader.js',

              'src/core/internal/bindcallback.js',
              'src/core/internal/dontenums.js',
              'src/core/internal/isequal.js',
              'src/core/internal/util.js',
              'src/core/internal/trycatch.js',
              'src/core/internal/priorityqueue.js',
              'src/core/disposables/compositedisposable.js',
              'src/core/disposables/disposable.js',
              'src/core/disposables/booleandisposable.js',
              'src/core/disposables/refcountdisposable.js',
              'src/core/disposables/scheduleddisposable.js',
              'src/core/concurrency/scheduleditem.js',
              'src/core/concurrency/scheduler.js',
              'src/core/concurrency/scheduler.recursive.js',
              'src/core/concurrency/scheduler.periodic.js',
              'src/core/concurrency/scheduler.wrappers.js',
              'src/core/concurrency/scheduleperiodicrecursive.js',
              'src/core/concurrency/immediatescheduler.js',
              'src/core/concurrency/currentthreadscheduler.js',
              'src/core/concurrency/timeoutscheduler.js',
              'src/core/concurrency/catchscheduler.js',
              'src/core/notification.js',
              'src/core/enumerator.js',
              'src/core/enumerable.js',
              'src/core/observer.js',
              'src/core/abstractobserver.js',
              'src/core/anonymousobserver.js',
              'src/core/checkedobserver.js',
              'src/core/scheduledobserver.js',
              'src/core/observeonobserver.js',
              'src/core/observable.js',
              'src/core/perf/observablebase.js',

              // Concurrency
              'src/core/linq/observable/observeon.js', // ObserveOnObserver
              'src/core/linq/observable/subscribeon.js', // SingleAssignmentDisposable, SerialDisposable, ScheduleDisposable

              // Async
              'src/core/linq/observable/frompromise.js', // AsyncSubject, asObservable
              'src/core/linq/observable/topromise.js',

              // Creation
              'src/core/perf/operators/toarray.js',
              'src/core/linq/observable/create.js',
              'src/core/linq/observable/defer.js',
              'src/core/linq/observable/empty.js',
              'src/core/perf/operators/from.js',
              'src/core/perf/operators/fromarrayobservable.js','src/core/perf/operators/fromarray.js',
              'src/core/linq/observable/generate.js',
              'src/core/linq/observable/never.js',
              'src/core/perf/operators/of.js',
              'src/core/linq/observable/pairs.js',
              'src/core/perf/operators/range.js',
              'src/core/linq/observable/repeat.js',
              'src/core/linq/observable/return.js',
              'src/core/linq/observable/throw.js',
              'src/core/linq/observable/using.js',

              // Multiple
              'src/core/linq/observable/ambproto.js',
              'src/core/linq/observable/amb.js',
              'src/core/linq/observable/catchproto.js',
              'src/core/linq/observable/catch.js',
              'src/core/linq/observable/combinelatestproto.js',
              'src/core/linq/observable/combinelatest.js',
              'src/core/linq/observable/concatproto.js',
              'src/core/linq/observable/concat.js',
              'src/core/linq/observable/concatall.js',
              'src/core/perf/operators/mergeproto.js',
              'src/core/linq/observable/merge.js',
              'src/core/linq/observable/mergedelayerror.js',
              'src/core/perf/operators/mergeall.js',
              'src/core/linq/observable/onerrorresumenextproto.js',
              'src/core/linq/observable/onerrorresumenext.js',
              'src/core/linq/observable/skipuntil.js',
              'src/core/linq/observable/switch.js',
              'src/core/linq/observable/takeuntil.js',
              'src/core/linq/observable/withlatestfrom.js',
              'src/core/linq/observable/zipproto.js',
              'src/core/linq/observable/zip.js',
              'src/core/linq/observable/ziparray.js',

              // Single
              'src/core/linq/observable/asobservable.js',
              'src/core/linq/observable/bufferwithcount.js',
              'src/core/linq/observable/dematerialize.js',
              'src/core/linq/observable/distinctuntilchanged.js',
              'src/core/linq/observable/do.js',
              'src/core/linq/observable/finally.js',
              'src/core/linq/observable/ignoreelements.js',
              'src/core/linq/observable/materialize.js',
              'src/core/linq/observable/repeatproto.js',
              'src/core/linq/observable/retry.js',
              'src/core/linq/observable/retrywhen.js',
              'src/core/linq/observable/scan.js',
              'src/core/linq/observable/skiplast.js',
              'src/core/linq/observable/startwith.js',
              'src/core/linq/observable/takelast.js',
              'src/core/linq/observable/takelastbuffer.js',
              'src/core/linq/observable/windowwithcount.js',

              // Standard query operators
              'src/core/linq/observable/concatmap.js',
              'src/core/linq/observable/concatmapobserver.js',
              'src/core/linq/observable/defaultifempty.js',
              'src/core/linq/observable/distinct.js',
              'src/core/perf/operators/map.js',
              'src/core/linq/observable/pluck.js',
              'src/core/linq/observable/selectmanyobserver.js',
              'src/core/linq/observable/selectmany.js',
              'src/core/linq/observable/selectswitch.js',
              'src/core/linq/observable/skip.js',
              'src/core/linq/observable/skipwhile.js',
              'src/core/linq/observable/take.js',
              'src/core/linq/observable/takewhile.js',
              'src/core/perf/operators/filter.js',

              // Transducers
              'src/core/linq/observable/transduce.js',

              'src/core/anonymousobservable.js',
              'src/core/autodetachobserver.js',
              'src/core/subjects/innersubscription.js',
              'src/core/subjects/subject.js',
              'src/core/subjects/asyncsubject.js',
              'src/core/subjects/anonymoussubject.js',
              'src/core/headers/exports.js',

              // Long stack trace end
              'src/core/longstacktraces/longstackend.js',

              'src/core/headers/outro.js',
            ],
            dest: 'dist/rx.js'
          },
          lite: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/intro.js',
              'src/core/headers/liteheader.js',

              // Stack trace start
              'src/core/longstacktraces/longstackbegin.js',
              'src/core/longstacktraces/longstacktraces.js',

              'src/core/internal/errors.js',

              'src/core/headers/enumeratorheader.js',

              'src/core/internal/bindcallback.js',
              'src/core/internal/dontenums.js',
              'src/core/internal/isequal.js',
              'src/core/internal/trycatch.js',
              'src/core/internal/util.js',
              'src/core/internal/priorityqueue.js',
              'src/core/disposables/compositedisposable.js',
              'src/core/disposables/disposable.js',
              'src/core/disposables/booleandisposable.js',
              'src/core/disposables/refcountdisposable.js',

              'src/core/concurrency/scheduleditem.js',
              'src/core/concurrency/scheduler.js',
              'src/core/concurrency/scheduler.recursive.js',
              'src/core/concurrency/scheduler.periodic.js',
              'src/core/concurrency/immediatescheduler.js',
              'src/core/concurrency/currentthreadscheduler.js',
              'src/core/concurrency/scheduleperiodicrecursive.js',
              'src/core/concurrency/timeoutscheduler.js',

              'src/core/notification.js',
              'src/core/enumerator.js',
              'src/core/enumerable.js',
              'src/core/observer-lite.js',
              'src/core/abstractobserver.js',
              'src/core/anonymousobserver.js',
              'src/core/observable.js',
              'src/core/scheduledobserver.js',
              'src/core/perf/observablebase.js',

              // Creation
              'src/core/perf/operators/toarray.js',
              'src/core/linq/observable/create.js',
              'src/core/linq/observable/defer.js',
              'src/core/linq/observable/empty.js',
              'src/core/perf/operators/from.js',
              'src/core/perf/operators/fromarrayobservable.js','src/core/perf/operators/fromarray.js',
              'src/core/linq/observable/never.js',
              'src/core/perf/operators/of.js',
              'src/core/linq/observable/pairs.js',
              'src/core/perf/operators/range.js',
              'src/core/linq/observable/repeat.js',
              'src/core/linq/observable/return.js',
              'src/core/linq/observable/throw.js',

              // Multiple
              'src/core/linq/observable/catchproto.js',
              'src/core/linq/observable/catch.js',
              'src/core/linq/observable/combinelatestproto.js',
              'src/core/linq/observable/combinelatest.js',
              'src/core/linq/observable/concatproto.js',
              'src/core/linq/observable/concat.js',
              'src/core/linq/observable/concatall.js',
              'src/core/perf/operators/mergeproto.js',
              'src/core/linq/observable/merge.js',
              'src/core/linq/observable/mergedelayerror.js',
              'src/core/perf/operators/mergeall.js',
              'src/core/linq/observable/skipuntil.js',
              'src/core/linq/observable/switch.js',
              'src/core/linq/observable/takeuntil.js',
              'src/core/linq/observable/withlatestfrom.js',
              'src/core/linq/observable/zipproto.js',
              'src/core/linq/observable/zip.js',
              'src/core/linq/observable/ziparray.js',

              // Single
              'src/core/linq/observable/asobservable.js',
              'src/core/linq/observable/dematerialize.js',
              'src/core/linq/observable/distinctuntilchanged.js',
              'src/core/linq/observable/do.js',
              'src/core/linq/observable/finally.js',
              'src/core/linq/observable/ignoreelements.js',
              'src/core/linq/observable/materialize.js',
              'src/core/linq/observable/repeatproto.js',
              'src/core/linq/observable/retry.js',
              'src/core/linq/observable/retrywhen.js',
              'src/core/linq/observable/scan.js',
              'src/core/linq/observable/skiplast.js',
              'src/core/linq/observable/startwith.js',
              'src/core/linq/observable/takelast.js',

              // Standard Query Operators
              'src/core/linq/observable/concatmap.js',
              'src/core/perf/operators/map.js',
              'src/core/linq/observable/pluck.js',
              'src/core/linq/observable/selectmany.js',
              'src/core/linq/observable/selectswitch.js',
              'src/core/linq/observable/skip.js',
              'src/core/linq/observable/skipwhile.js',
              'src/core/linq/observable/take.js',
              'src/core/linq/observable/takewhile.js',
              'src/core/perf/operators/filter.js',

              // Async Operators
              'src/core/linq/observable/fromcallback.js', // AsyncSubject, asObservable
              'src/core/linq/observable/fromnodecallback.js', // AsyncSubject, asObservable
              'src/core/linq/observable/fromevent-modern.js', // publish
              'src/core/linq/observable/fromeventpattern.js', // publish
              'src/core/linq/observable/frompromise.js', // AsyncSubject, asObservable
              'src/core/linq/observable/topromise.js',
              'src/core/linq/observable/startasync.js',

              // Binding Operators
              'src/core/linq/observable/multicast.js', // ConnectableObservable
              'src/core/linq/observable/publish.js',   // mulitcast, Subject
              'src/core/linq/observable/share.js',   // mulitcast, Subject, Reference counted
              'src/core/linq/observable/publishlast.js', // multicast, AsyncSubject
              'src/core/linq/observable/publishvalue.js', // multicast, BehaviorSubject
              'src/core/linq/observable/sharevalue.js', // multicast, BehaviorSubject, Reference counted
              'src/core/linq/observable/replay.js', // multicast, ReplaySubject
              'src/core/linq/observable/sharereplay.js',
              'src/core/linq/connectableobservable.js',

              // Time operators
              'src/core/linq/observable/_observabletimerdate.js', // AnonymousObservable
              'src/core/linq/observable/_observabletimerdateandperiod.js', // AnonymousObservable, normalizeTime
              'src/core/linq/observable/_observabletimertimespan.js', // AnonymousObservable, normalizeTime
              'src/core/linq/observable/_observabletimertimespanandperiod.js', // AnonymousObservable, defer, _observabletimerdateandperiod
              'src/core/linq/observable/interval.js', // timeoutScheduler, _observabletimertimespanandperiod
              'src/core/linq/observable/timer.js', // timeoutScheduler, _observabletimerdate, _observabletimerdateandperiod, _observabletimertimespan, _observabletimertimespanandperiod
              'src/core/linq/observable/delay.js', // AnonymousObservable, timeoutScheduler, SerialDisposable, materialize, timestamp
              'src/core/linq/observable/debounce.js', // AnonymousObservable, SerialDisposable, timeoutScheduler, SingleAssignmentDisposable, CompositeDisposable
              'src/core/linq/observable/timestamp.js', // timeoutScheduler, select
              'src/core/linq/observable/sample.js', // AnonymousObservable, CompositeDisposable, interval, timeoutScheduler
              'src/core/linq/observable/timeout.js', // AnonymousObservable, timeoutScheduler, throw, SingleAssignmentDisposable, SerialDisposable, CompositeDisposable
              'src/core/linq/observable/throttlefirst.js',

              // Backpressure operators
              'src/core/backpressure/pausable.js',
              'src/core/backpressure/pausablebuffered.js',
              'src/core/backpressure/controlled.js',

              // Transducers
              'src/core/linq/observable/transduce.js',

              'src/core/anonymousobservable.js',
              'src/core/autodetachobserver.js',
              'src/core/subjects/innersubscription.js',
              'src/core/subjects/subject.js',
              'src/core/subjects/asyncsubject.js',
              'src/core/subjects/anonymoussubject.js',
              'src/core/subjects/behaviorsubject.js',
              'src/core/subjects/replaysubject.js',
              'src/core/backpressure/pauser.js',

              'src/core/headers/exports.js',

              // End long stack traces
              'src/core/longstacktraces/longstackend.js',

              'src/core/headers/outro.js',
            ],
            dest: 'dist/rx.lite.js'
          },
          litecompat: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/intro.js',
              'src/core/headers/liteheader-compat.js',

              // Stack trace start
              'src/core/longstacktraces/longstackbegin.js',
              'src/core/longstacktraces/longstacktraces.js',

              'src/core/internal/errors.js',

              'src/core/headers/enumeratorheader.js',

              'src/core/internal/bindcallback.js',
              'src/core/internal/dontenums.js',
              'src/core/internal/isequal.js',
              'src/core/internal/trycatch.js',
              'src/core/internal/util.js',
              'src/core/internal/polyfills.js',
              'src/core/internal/priorityqueue.js',
              'src/core/disposables/compositedisposable.js',
              'src/core/disposables/disposable.js',
              'src/core/disposables/booleandisposable.js',
              'src/core/disposables/refcountdisposable.js',

              'src/core/concurrency/scheduleditem.js',
              'src/core/concurrency/scheduler.js',
              'src/core/concurrency/scheduler.recursive.js',
              'src/core/concurrency/scheduler.periodic.js',
              'src/core/concurrency/immediatescheduler.js',
              'src/core/concurrency/currentthreadscheduler.js',
              'src/core/concurrency/scheduleperiodicrecursive.js',
              'src/core/concurrency/timeoutscheduler.js',

              'src/core/notification.js',
              'src/core/enumerator.js',
              'src/core/enumerable.js',
              'src/core/observer-lite.js',
              'src/core/abstractobserver.js',
              'src/core/anonymousobserver.js',
              'src/core/observable.js',
              'src/core/perf/observablebase.js',
              'src/core/scheduledobserver.js',

              // Creation
              'src/core/perf/operators/toarray.js',
              'src/core/linq/observable/create.js',
              'src/core/linq/observable/defer.js',
              'src/core/linq/observable/empty.js',
              'src/core/perf/operators/from.js',
              'src/core/perf/operators/fromarrayobservable.js','src/core/perf/operators/fromarray.js',
              'src/core/linq/observable/never.js',
              'src/core/perf/operators/of.js',
              'src/core/linq/observable/pairs.js',
              'src/core/perf/operators/range.js',
              'src/core/linq/observable/repeat.js',
              'src/core/linq/observable/return.js',
              'src/core/linq/observable/throw.js',

              // Multiple
              'src/core/linq/observable/catchproto.js',
              'src/core/linq/observable/catch.js',
              'src/core/linq/observable/combinelatestproto.js',
              'src/core/linq/observable/combinelatest.js',
              'src/core/linq/observable/concatproto.js',
              'src/core/linq/observable/concat.js',
              'src/core/linq/observable/concatall.js',
              'src/core/perf/operators/mergeproto.js',
              'src/core/linq/observable/merge.js',
              'src/core/perf/operators/mergeall.js',
              'src/core/linq/observable/mergedelayerror.js',
              'src/core/linq/observable/skipuntil.js',
              'src/core/linq/observable/switch.js',
              'src/core/linq/observable/takeuntil.js',
              'src/core/linq/observable/withlatestfrom.js',
              'src/core/linq/observable/zipproto.js',
              'src/core/linq/observable/zip.js',
              'src/core/linq/observable/ziparray.js',

              // Single
              'src/core/linq/observable/asobservable.js',
              'src/core/linq/observable/dematerialize.js',
              'src/core/linq/observable/distinctuntilchanged.js',
              'src/core/linq/observable/do.js',
              'src/core/linq/observable/finally.js',
              'src/core/linq/observable/ignoreelements.js',
              'src/core/linq/observable/materialize.js',
              'src/core/linq/observable/repeatproto.js',
              'src/core/linq/observable/retry.js',
              'src/core/linq/observable/retrywhen.js',
              'src/core/linq/observable/scan.js',
              'src/core/linq/observable/skiplast.js',
              'src/core/linq/observable/startwith.js',
              'src/core/linq/observable/takelast.js',

              // Standard Query Operators
              'src/core/linq/observable/concatmap.js',
              'src/core/perf/operators/map.js',
              'src/core/linq/observable/pluck.js',
              'src/core/linq/observable/selectmany.js',
              'src/core/linq/observable/selectswitch.js',
              'src/core/linq/observable/skip.js',
              'src/core/linq/observable/skipwhile.js',
              'src/core/linq/observable/take.js',
              'src/core/linq/observable/takewhile.js',
              'src/core/perf/operators/filter.js',

              // Async Operators
              'src/core/linq/observable/fromcallback.js', // AsyncSubject, asObservable
              'src/core/linq/observable/fromnodecallback.js', // AsyncSubject, asObservable
              'src/core/linq/observable/fromevent.js', // publish
              'src/core/linq/observable/fromeventpattern.js', // publish
              'src/core/linq/observable/frompromise.js', // AsyncSubject, asObservable
              'src/core/linq/observable/topromise.js',
              'src/core/linq/observable/startasync.js',

              // Binding Operators
              'src/core/linq/observable/multicast.js', // ConnectableObservable
              'src/core/linq/observable/publish.js',   // mulitcast, Subject
              'src/core/linq/observable/share.js',   // mulitcast, Subject, Reference counted
              'src/core/linq/observable/publishlast.js', // multicast, AsyncSubject
              'src/core/linq/observable/publishvalue.js', // multicast, BehaviorSubject
              'src/core/linq/observable/sharevalue.js', // multicast, BehaviorSubject, Reference counted
              'src/core/linq/observable/replay.js', // multicast, ReplaySubject
              'src/core/linq/observable/sharereplay.js',
              'src/core/linq/connectableobservable.js',

              // Time operators
              'src/core/linq/observable/_observabletimerdate.js', // AnonymousObservable
              'src/core/linq/observable/_observabletimerdateandperiod.js', // AnonymousObservable, normalizeTime
              'src/core/linq/observable/_observabletimertimespan.js', // AnonymousObservable, normalizeTime
              'src/core/linq/observable/_observabletimertimespanandperiod.js', // AnonymousObservable, defer, _observabletimerdateandperiod
              'src/core/linq/observable/interval.js', // timeoutScheduler, _observabletimertimespanandperiod
              'src/core/linq/observable/timer.js', // timeoutScheduler, _observabletimerdate, _observabletimerdateandperiod, _observabletimertimespan, _observabletimertimespanandperiod
              'src/core/linq/observable/delay.js', // AnonymousObservable, timeoutScheduler, SerialDisposable, materialize, timestamp
              'src/core/linq/observable/debounce.js', // AnonymousObservable, SerialDisposable, timeoutScheduler, SingleAssignmentDisposable, CompositeDisposable
              'src/core/linq/observable/timestamp.js', // timeoutScheduler, select
              'src/core/linq/observable/sample.js', // AnonymousObservable, CompositeDisposable, interval, timeoutScheduler
              'src/core/linq/observable/timeout.js', // AnonymousObservable, timeoutScheduler, throw, SingleAssignmentDisposable, SerialDisposable, CompositeDisposable
              'src/core/linq/observable/throttlefirst.js',

              // Backpressure operators
              'src/core/backpressure/pausable.js',
              'src/core/backpressure/pausablebuffered.js',
              'src/core/backpressure/controlled.js',

              // Transducers
              'src/core/linq/observable/transduce.js',

              'src/core/anonymousobservable.js',
              'src/core/autodetachobserver.js',
              'src/core/subjects/innersubscription.js',
              'src/core/subjects/subject.js',
              'src/core/subjects/asyncsubject.js',
              'src/core/subjects/anonymoussubject.js',
              'src/core/subjects/behaviorsubject.js',
              'src/core/subjects/replaysubject.js',
              'src/core/backpressure/pauser.js',

              'src/core/headers/exports.js',

              // End long stack traces
              'src/core/longstacktraces/longstackend.js',

              'src/core/headers/outro.js',
            ],
            dest: 'dist/rx.lite.compat.js'
          },
          liteextras: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/liteintro.js',
              'src/core/headers/liteextrasheader.js',

              'src/core/disposables/scheduleddisposable.js',
              'src/core/checkedobserver.js',
              'src/core/observeonobserver.js',
              'src/core/observer-extras.js',

              // Concurrency
              'src/core/linq/observable/observeon.js', // ObserveOnObserver
              'src/core/linq/observable/subscribeon.js', // SingleAssignmentDisposable, SerialDisposable, ScheduleDisposable

              // Creation
              'src/core/linq/observable/generate.js',
              'src/core/linq/observable/using.js',

              // Multiple
              'src/core/linq/observable/ambproto.js',
              'src/core/linq/observable/amb.js',
              'src/core/linq/observable/onerrorresumenextproto.js',
              'src/core/linq/observable/onerrorresumenext.js',

              // Single
              'src/core/linq/observable/bufferwithcount.js',
              'src/core/linq/observable/windowwithcount.js',
              'src/core/linq/observable/takelastbuffer.js',

              // Standard Query Operators
              'src/core/linq/observable/defaultifempty.js',
              'src/core/linq/observable/distinct.js',

              'src/core/headers/suboutro.js'
            ],
            dest: 'dist/rx.lite.extras.js'
          },
          liteextrascompat: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/litecompatintro.js',
              'src/core/headers/liteextrasheader.js',

              'src/core/disposables/scheduleddisposable.js',
              'src/core/checkedobserver.js',
              'src/core/observeonobserver.js',
              'src/core/observer-extras.js',

              // Concurrency
              'src/core/linq/observable/observeon.js', // ObserveOnObserver
              'src/core/linq/observable/subscribeon.js', // SingleAssignmentDisposable, SerialDisposable, ScheduleDisposable

              // Creation
              'src/core/linq/observable/generate.js',
              'src/core/linq/observable/using.js',

              // Multiple
              'src/core/linq/observable/ambproto.js',
              'src/core/linq/observable/amb.js',
              'src/core/linq/observable/onerrorresumenextproto.js',
              'src/core/linq/observable/onerrorresumenext.js',

              // Single
              'src/core/linq/observable/bufferwithcount.js',
              'src/core/linq/observable/windowwithcount.js',
              'src/core/linq/observable/takelastbuffer.js',

              // Standard Query Operators
              'src/core/linq/observable/defaultifempty.js',
              'src/core/linq/observable/distinct.js',

              'src/core/headers/suboutro.js'
            ],
            dest: 'dist/rx.lite.extras.compat.js'
          },
          backpressure: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/subintro.js',
              'src/core/headers/backpressureheader.js',

              // Backpressure operators
              'src/core/backpressure/pauser.js',
              'src/core/backpressure/pausable.js',
              'src/core/backpressure/pausablebuffered.js',
              'src/core/backpressure/controlled.js',
              'src/core/backpressure/stopandwait.js',
              'src/core/backpressure/windowed.js',

              'src/core/headers/suboutro.js'
            ],
            dest: 'dist/rx.backpressure.js'
          },
          aggregates: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/subintro.js',
              'src/core/headers/aggregatesheader.js',
              'src/core/linq/observable/_extremaby.js',
              'src/core/linq/observable/_firstonly.js',
              'src/core/linq/observable/aggregate.js', // scan, startwith, finalvalue
              'src/core/linq/observable/reduce.js', // scan, startwith, finalvalue
              'src/core/linq/observable/some.js',  // where
              'src/core/linq/observable/isempty.js', // any, select
              'src/core/linq/observable/every.js', // where, any
              'src/core/linq/observable/includes.js', // where, any
              'src/core/linq/observable/count.js', // where, aggregate
              'src/core/linq/observable/indexof.js',
              'src/core/linq/observable/sum.js', // select, aggregate
              'src/core/linq/observable/minby.js', // _extremaby
              'src/core/linq/observable/min.js',   // minby, _firstonly
              'src/core/linq/observable/maxby.js', // _extremaby
              'src/core/linq/observable/max.js',   // max, _firstonly
              'src/core/linq/observable/average.js',   // select, scan, aggregate, finalvalue
              'src/core/linq/observable/sequenceequal.js',   // compositedisposable
              'src/core/linq/observable/_elementatordefault.js',
              'src/core/linq/observable/elementat.js', // _elementatordefault
              'src/core/linq/observable/elementatordefault.js', // _elementatordefault
              'src/core/linq/observable/_singleordefault.js',
              'src/core/linq/observable/single.js', // _singleordefault, where
              'src/core/linq/observable/singleordefault.js', // _singleordefault, where
              'src/core/linq/observable/_firstordefault.js',
              'src/core/linq/observable/first.js', // _firstordefault, where
              'src/core/linq/observable/firstordefault.js', // _firstordefault, where
              'src/core/linq/observable/_lastordefault.js',
              'src/core/linq/observable/last.js', // _firstordefault, where
              'src/core/linq/observable/lastordefault.js', // _firstordefault, where
              'src/core/linq/observable/_findvalue.js',
              'src/core/linq/observable/find.js', // _findvalue, where
              'src/core/linq/observable/findindex.js', // _findvalue, where
              'src/core/linq/observable/toset.js',
              'src/core/linq/observable/tomap.js',
              'src/core/headers/suboutro.js'
            ],
            dest: 'dist/rx.aggregates.js'
          },
          asyncCompat: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/asyncintro.js',
              'src/core/headers/asyncheader.js',
              'src/core/linq/observable/spawn.js',
              'src/core/linq/observable/start.js', // toasync
              'src/core/linq/observable/toasync.js', // asyncsubject, asObservable
              'src/core/linq/observable/fromcallback.js', // AsyncSubject, asObservable
              'src/core/linq/observable/fromnodecallback.js', // AsyncSubject, asObservable
              'src/core/linq/observable/fromevent.js', // publish
              'src/core/linq/observable/fromeventpattern.js', // publish
              'src/core/linq/observable/startasync.js',
              'src/core/headers/suboutro.js'
            ],
            dest: 'dist/rx.async.compat.js'
          },
          asyncModern: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/asyncintro.js',
              'src/core/headers/asyncheader.js',
              'src/core/linq/observable/spawn.js',
              'src/core/linq/observable/start.js', // toasync
              'src/core/linq/observable/toasync.js', // AsyncSubject, asObservable
              'src/core/linq/observable/fromcallback.js', // AsyncSubject, asObservable
              'src/core/linq/observable/fromnodecallback.js', // AsyncSubject, asObservable
              'src/core/linq/observable/fromevent-modern.js', // publish
              'src/core/linq/observable/fromeventpattern.js', // publish
              'src/core/linq/observable/startasync.js',
              'src/core/headers/suboutro.js'
            ],
            dest: 'dist/rx.async.js'
          },
          binding: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/subintro.js',
              'src/core/headers/bindingheader.js',
              'src/core/linq/observable/multicast.js', // ConnectableObservable
              'src/core/linq/observable/publish.js',   // mulitcast, Subject
              'src/core/linq/observable/share.js',   // mulitcast, Subject, Reference counted
              'src/core/linq/observable/publishlast.js', // multicast, AsyncSubject
              'src/core/linq/observable/publishvalue.js', // multicast, BehaviorSubject
              'src/core/linq/observable/sharevalue.js', // multicast, BehaviorSubject, Reference counted
              'src/core/linq/observable/replay.js', // multicast, ReplaySubject
              'src/core/linq/observable/sharereplay.js',
              'src/core/subjects/innersubscription.js',
              'src/core/subjects/behaviorsubject.js',
              'src/core/subjects/replaysubject.js',
              'src/core/linq/connectableobservable.js',
              'src/core/headers/suboutro.js'
            ],
            dest: 'dist/rx.binding.js'
          },
          coincidence: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/subintro.js',
              'src/core/headers/coincidenceheader.js',
              'src/core/internal/dictionary.js',
              'src/core/linq/observable/join.js', // SerialDisposable, SingleAssignmentDisposable, RefCountDisposable, CompositeDisposable, Dictionary
              'src/core/linq/observable/groupjoin.js', // SerialDisposable, SingleAssignmentDisposable, RefCountDisposable, CompositeDisposable, Dictionary
              'src/core/linq/observable/buffer.js', // window, selectMany, toArray
              'src/core/linq/observable/window.js', // CompositeDisposable, RefCountDisposable, Subject, SingleAssignmentDisposable
              'src/core/linq/observable/pairwise.js',
              'src/core/linq/observable/partition.js',
              'src/core/linq/observable/groupby.js',
              'src/core/linq/observable/groupbyuntil.js',
              'src/core/linq/groupedobservable.js',
              'src/core/headers/suboutro.js'
            ],
            dest: 'dist/rx.coincidence.js'
          },
          experimental: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/subintro.js',
              'src/core/headers/experimentalheader.js',
              'src/core/headers/enumeratorheader.js',
              'src/core/linq/enumerable/while.js', // Enumerable
              'src/core/linq/observable/let.js',
              'src/core/linq/observable/if.js', // defer, empty
              'src/core/linq/observable/for.js', // Enumerable.forEach, concatproto
              'src/core/linq/observable/while.js', // Enumerable.while, concatproto
              'src/core/linq/observable/dowhile.js', // Enumerable.while, concat
              'src/core/linq/observable/case.js', // defer, empty
              'src/core/linq/observable/expand.js', // immediateScheduler, SerialDisposable, CompositeDisposable, SingleAssignmentDisposable
              'src/core/linq/observable/forkjoin.js', // CompositeDisposable
              'src/core/linq/observable/forkjoinproto.js', // SingleAssignmentDisposable, CompositeDisposable
              'src/core/linq/observable/manyselect.js', // ImmediateScheduler, CurrentThreadScheduler, select, do, observeOn

              // Experimental Flattening
              'src/core/linq/observable/exclusive.js',
              'src/core/linq/observable/exclusivemap.js',

              'src/core/headers/suboutro.js'
            ],
            dest: 'dist/rx.experimental.js'
          },
          joinpatterns: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/subintro.js',
              'src/core/headers/joinpatternsheader.js',
              'src/core/internal/map.js',
              'src/core/joins/pattern.js',
              'src/core/joins/plan.js',
              'src/core/joins/activeplan.js',
              'src/core/joins/joinobserver.js',
              'src/core/linq/observable/and.js', // Pattern
              'src/core/linq/observable/thendo.js', // Pattern
              'src/core/linq/observable/when.js', // CompositeDisposable
              'src/core/headers/suboutro.js'
            ],
            dest: 'dist/rx.joinpatterns.js'
          },
          testing: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/testintro.js',
              'src/core/headers/testheader.js',
              'src/core/testing/reactivetest.js',
              'src/core/testing/recorded.js',
              'src/core/testing/subscription.js',
              'src/core/testing/mockdisposable.js',
              'src/core/testing/mockobserver.js',
              'src/core/testing/mockpromise.js',
              'src/core/testing/hotobservable.js',
              'src/core/testing/coldobservable.js',
              'src/core/testing/testscheduler.js',
              'src/core/headers/suboutro.js'
            ],
            dest: 'dist/rx.testing.js'
          },
          time: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/subintro.js',
              'src/core/headers/timeheader.js',
              'src/core/linq/observable/_observabletimerdate.js', // AnonymousObservable
              'src/core/linq/observable/_observabletimerdateandperiod.js', // AnonymousObservable, normalizeTime
              'src/core/linq/observable/_observabletimertimespan.js', // AnonymousObservable, normalizeTime
              'src/core/linq/observable/_observabletimertimespanandperiod.js', // AnonymousObservable, defer, _observabletimerdateandperiod
              'src/core/linq/observable/interval.js', // timeoutScheduler, _observabletimertimespanandperiod
              'src/core/linq/observable/timer.js', // timeoutScheduler, _observabletimerdate, _observabletimerdateandperiod, _observabletimertimespan, _observabletimertimespanandperiod
              'src/core/linq/observable/delay.js', // AnonymousObservable, timeoutScheduler, SerialDisposable, materialize, timestamp
              'src/core/linq/observable/debounce.js', // AnonymousObservable, SerialDisposable, timeoutScheduler, SingleAssignmentDisposable, CompositeDisposable
              'src/core/linq/observable/windowwithtime.js', // AnonymousObservable, SerialDisposable, SingleAssignmentDisposable, RefCountDisposable, CompositeDisposable, addref, subject
              'src/core/linq/observable/windowwithtimeorcount.js', // AnonymousObservable, SerialDisposable, SingleAssignmentDisposable, RefCountDisposable, CompositeDisposable, addref, subject
              'src/core/linq/observable/bufferwithtime.js', // windowwithtime, selectMany, toArray
              'src/core/linq/observable/bufferwithtimeorcount.js', // windowwithtimeorcount, selectMany, toArray
              'src/core/linq/observable/timeinterval.js', // timeoutScheduler, defer, select
              'src/core/linq/observable/timestamp.js', // timeoutScheduler, select
              'src/core/linq/observable/sample.js', // AnonymousObservable, CompositeDisposable, interval, timeoutScheduler
              'src/core/linq/observable/timeout.js', // AnonymousObservable, timeoutScheduler, throw, SingleAssignmentDisposable, SerialDisposable, CompositeDisposable
              'src/core/linq/observable/generatewithabsolutetime.js', // timeoutScheduler, AnonymousObservable
              'src/core/linq/observable/generatewithrelativetime.js', // timeoutScheduler, AnonymousObservable
              'src/core/linq/observable/delaysubscription.js', // delayWithSelector, timer, empty
              'src/core/linq/observable/delaywithselector.js',
              'src/core/linq/observable/timeoutwithselector.js',
              'src/core/linq/observable/debouncewithselector.js',
              'src/core/linq/observable/skiplastwithtime.js',
              'src/core/linq/observable/takelastwithtime.js',
              'src/core/linq/observable/takelastbufferwithtime.js',
              'src/core/linq/observable/takewithtime.js',
              'src/core/linq/observable/skipwithtime.js',
              'src/core/linq/observable/skipuntilwithtime.js',
              'src/core/linq/observable/takeuntilwithtime.js',
              'src/core/linq/observable/throttlefirst.js',
              'src/core/headers/suboutro.js'
            ],
            dest: 'dist/rx.time.js'
          },
          virtualtime: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/subintro.js',
              'src/core/headers/virtualtimeheader.js',
              'src/core/concurrency/virtualtimescheduler.js',
              'src/core/concurrency/historicalscheduler.js',
              'src/core/headers/suboutro.js'
            ],
            dest: 'dist/rx.virtualtime.js'
          },
          sorting: {
            src: [
              'src/core/headers/license.js',
              'src/core/headers/subintro.js',
              'src/core/headers/sortingheader.js',
              'src/core/linq/observable/jortsort.js',
              'src/core/linq/observable/jortsortuntil.js',
              'src/core/headers/suboutro.js'
            ],
            dest: 'dist/rx.sorting.js'
          }
      },
      uglify: {
        options: {
          banner:
            '/* Copyright (c) Microsoft Open Technologies, Inc. All rights reserved. See License.txt in the project root for license information.*/'
        },
        all: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.all.map'
          },
          files: {'dist/rx.all.min.js': ['dist/rx.all.js'] }
        },
        allcompat: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.all.compat.map'
          },
          files: {'dist/rx.all.compat.min.js': ['dist/rx.all.compat.js'] }
        },
        basic: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.compat.map'
          },
          files: {'dist/rx.compat.min.js': ['dist/rx.compat.js'] }
        },
        modern: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.map'
          },
          files: {'dist/rx.min.js': ['dist/rx.js'] }
        },
        lite: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.lite.map'
          },
          files: {'dist/rx.lite.min.js': ['dist/rx.lite.js'] }
        },
        litecompat: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.lite.compat.map'
          },
          files: {'dist/rx.lite.compat.min.js': ['dist/rx.lite.compat.js'] }
        },
        liteextras: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.lite.extras.map'
          },
          files: {'dist/rx.lite.extras.min.js': ['dist/rx.lite.extras.js'] }
        },
        liteextrascompat: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.lite.extras.compat.map'
          },
          files: {'dist/rx.lite.extras.compat.min.js': ['dist/rx.lite.extras.compat.js'] }
        },
        backpressure: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.backpressure.map'
          },
          files: {'dist/rx.backpressure.min.js': ['dist/rx.backpressure.js'] }
        },
        aggregates: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.aggregates.map'
          },
          files: {'dist/rx.aggregates.min.js': ['dist/rx.aggregates.js'] }
        },
        asyncCompat: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.async.compat.map'
          },
          files: {'dist/rx.async.compat.min.js': ['dist/rx.async.compat.js'] }
        },
        asyncModern: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.async.map'
          },
          files: {'dist/rx.async.min.js': ['dist/rx.async.js'] }
        },
        binding: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.binding.map'
          },
          files: {'dist/rx.binding.min.js': ['dist/rx.binding.js'] }
        },
        coincidence: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.coincidence.map'
          },
          files: {'dist/rx.coincidence.min.js': ['dist/rx.coincidence.js'] }
        },
        experimental: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.experimental.map'
          },
          files: {'dist/rx.experimental.min.js': ['dist/rx.experimental.js'] }
        },
        joinpatterns: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.joinpatterns.map'
          },
          files: {'dist/rx.joinpatterns.min.js': ['dist/rx.joinpatterns.js'] }
        },
        testing: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.testing.map'
          },
          files: {'dist/rx.testing.min.js': ['dist/rx.testing.js'] }
        },
        time: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.time.map'
          },
          files: {'dist/rx.time.min.js': ['dist/rx.time.js'] }
        },
        virtualtime: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.virtualtime.map'
          },
          files: {'dist/rx.virtualtime.min.js': ['dist/rx.virtualtime.js'] }
        },
        sorting: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/rx.sorting.map'
          },
          files: {'dist/rx.sorting.min.js': ['dist/rx.sorting.js'] }
        }
      },
      qunit: {
          all: ['tests/*.html']
      },
      jshint: {
        all: [
          'rx.core.js',
          'rx.core.compat.js',
          'rx.all.js',
          'rx.all.compat.js',
          'rx.js',
          'rx.compat.js',
          'rx.lite.js',
          'rx.lite.compat.js',
          'rx.lite.extras.js',
          'rx.aggregates.js',
          'rx.async.js',
          'rx.async.compat.js',
          'rx.binding.js',
          'rx.coincidence.js',
          'rx.experimental.js',
          'rx.joinpatterns.js',
          'rx.testing.js',
          'rx.time.js',
          'rx.virtualtime.js'
        ]
      },
      jscs: {
        src: 'src/**/*.js',
        options: {
          config: '.jscsrc'
        }
      },
      watch: {
        scripts: {
          files: 'src/**/*.js',
          tasks: ['default'],
          options: {
            interrupt: true
          }
        }
      },
      copy: {
        rxlite: {
          flatten: true,
          filter: 'isFile',
          expand: true,
          src: [
            'dist/rx.lite.js',
            'dist/rx.lite.map',
            'dist/rx.lite.min.js'
          ],
          dest: 'modules/rx-lite/'
        },
        rxlitecompat: {
          flatten: true,
          filter: 'isFile',
          expand: true,
          src: [
            'dist/rx.lite.compat.js',
            'dist/rx.lite.compat.map',
            'dist/rx.lite.compat.min.js'
          ],
          dest: 'modules/rx-lite-compat/'
        },
        rxliteextras: {
          flatten: true,
          filter: 'isFile',
          expand: true,
          src: [
            'dist/rx.lite.extras.js',
            'dist/rx.lite.extras.map',
            'dist/rx.lite.extras.min.js'
          ],
          dest: 'modules/rx-lite-extras/'
        },
        rxliteextrascompat: {
          flatten: true,
          filter: 'isFile',
          expand: true,
          src: [
            'dist/rx.lite.extras.compat.js',
            'dist/rx.lite.extras.compat.map',
            'dist/rx.lite.extras.compat.min.js'
          ],
          dest: 'modules/rx-lite-extras-compat/'
        },
      }
  });

  // Load all "grunt-*" tasks
  require('load-grunt-tasks')(grunt);

  function createNuGetPackage(nuspec) {
    var done = this.async();

    //invoke nuget.exe
    grunt.util.spawn({
      cmd: ".nuget/nuget.exe",
      args: [
        //specify the .nuspec file
        "pack",
        nuspec,

        //specify where we want the package to be created
        "-OutputDirectory",
        "nuget",

        //override the version with whatever is currently defined in package.json
        "-Version",
        grunt.config.get("pkg").version
      ]
    }, function (error, result) {
      if (error) {
        grunt.log.error(error);
      } else {
        grunt.log.write(result);
      }

      done();
    });
  }

  grunt.registerTask('nuget-complete', 'Register NuGet-Complete', function () {
    createNuGetPackage.call(this, 'nuget/RxJS-Complete/RxJS-Complete.nuspec');
  });

  grunt.registerTask('nuget-aggregates', 'Register NuGet-Aggregates', function () {
    createNuGetPackage.call(this, 'nuget/RxJS-Aggregates/RxJS-Aggregates.nuspec');
  });

  grunt.registerTask('nuget-all', 'Register NuGet-All', function () {
    createNuGetPackage.call(this, 'nuget/RxJS-All/RxJS-All.nuspec');
  });

  grunt.registerTask('nuget-async', 'Register NuGet-Async', function () {
    createNuGetPackage.call(this, 'nuget/RxJS-Async/RxJS-Async.nuspec');
  });

  grunt.registerTask('nuget-backpressure', 'Register NuGet-BackPressure', function () {
    createNuGetPackage.call(this, 'nuget/RxJS-BackPressure/RxJS-BackPressure.nuspec');
  });

  grunt.registerTask('nuget-binding', 'Register NuGet-Binding', function () {
    createNuGetPackage.call(this, 'nuget/RxJS-Binding/RxJS-Binding.nuspec');
  });

  grunt.registerTask('nuget-coincidence', 'Register NuGet-Coincidence', function () {
    createNuGetPackage.call(this, 'nuget/RxJS-Coincidence/RxJS-Coincidence.nuspec');
  });

  grunt.registerTask('nuget-experimental', 'Register NuGet-Experimental', function () {
    createNuGetPackage.call(this, 'nuget/RxJS-Experimental/RxJS-Experimental.nuspec');
  });

  grunt.registerTask('nuget-joinpatterns', 'Register NuGet-JoinPatterns', function () {
    createNuGetPackage.call(this, 'nuget/RxJS-JoinPatterns/RxJS-JoinPatterns.nuspec');
  });

  grunt.registerTask('nuget-lite', 'Register NuGet-Lite', function () {
    createNuGetPackage.call(this, 'nuget/RxJS-Lite/RxJS-Lite.nuspec');
  });

  grunt.registerTask('nuget-main', 'Register NuGet-Main', function () {
    createNuGetPackage.call(this, 'nuget/RxJS-Main/RxJS-Main.nuspec');
  });

  grunt.registerTask('nuget-testing', 'Register NuGet-Testing', function () {
    createNuGetPackage.call(this, 'nuget/RxJS-Testing/RxJS-Testing.nuspec');
  });

  grunt.registerTask('nuget-time', 'Register NuGet-Time', function () {
    createNuGetPackage.call(this, 'nuget/RxJS-Time/RxJS-Time.nuspec');
  });

  grunt.registerTask('nuget-virtualtime', 'Register NuGet-VirtualTime', function () {
    createNuGetPackage.call(this, 'nuget/RxJS-VirtualTime/RxJS-VirtualTime.nuspec');
  });

  grunt.registerTask('nuget', [
    'nuget-complete',
    'nuget-aggregates',
    'nuget-all',
    'nuget-async',
    'nuget-backpressure',
    'nuget-binding',
    'nuget-coincidence',
    'nuget-experimental',
    'nuget-joinpatterns',
    'nuget-lite',
    'nuget-main',
    'nuget-testing',
    'nuget-time',
    'nuget-virtualtime'
  ]);

  grunt.registerTask('concat-min', [
    'concat:all',
    'concat:allcompat',
    'concat:basic',
    'concat:modern',
    'concat:backpressure',
    'concat:aggregates',
    'concat:asyncCompat',
    'concat:asyncModern',
    'concat:binding',
    'concat:coincidence',
    'concat:experimental',
    'concat:joinpatterns',
    'concat:time',
    'concat:testing',
    'concat:virtualtime',
    'concat:lite',
    'concat:litecompat',
    'concat:liteextras',
    'concat:liteextrascompat',
    'concat:sorting',

    'uglify:all',
    'uglify:allcompat',
    'uglify:basic',
    'uglify:modern',
    'uglify:backpressure',
    'uglify:aggregates',
    'uglify:asyncCompat',
    'uglify:asyncModern',
    'uglify:binding',
    'uglify:coincidence',
    'uglify:experimental',
    'uglify:joinpatterns',
    'uglify:testing',
    'uglify:time',
    'uglify:virtualtime',
    'uglify:lite',
    'uglify:litecompat',
    'uglify:liteextras',
    'uglify:liteextrascompat',
    'uglify:sorting'
  ]);

  grunt.registerTask('concatall', [
    'concat:all',
    'concat:allcompat',
    'concat:basic',
    'concat:modern',
    'concat:backpressure',
    'concat:aggregates',
    'concat:asyncCompat',
    'concat:asyncModern',
    'concat:binding',
    'concat:coincidence',
    'concat:experimental',
    'concat:joinpatterns',
    'concat:time',
    'concat:testing',
    'concat:virtualtime',
    'concat:lite',
    'concat:litecompat',
    'concat:liteextras',
    'concat:liteextrascompat',
    'concat:sorting'
  ]);

  grunt.registerTask('copy-lite', [
    'copy:rxlite',
    'copy:rxlitecompat',
    'copy:rxliteextras',
    'copy:rxliteextrascompat'
  ]);

  // Default task
  grunt.registerTask('default', [
    'concat:all',
    'concat:allcompat',
    'concat:basic',
    'concat:modern',
    'concat:backpressure',
    'concat:aggregates',
    'concat:asyncCompat',
    'concat:asyncModern',
    'concat:binding',
    'concat:coincidence',
    'concat:experimental',
    'concat:joinpatterns',
    'concat:time',
    'concat:testing',
    'concat:virtualtime',
    'concat:lite',
    'concat:litecompat',
    'concat:liteextras',
    'concat:liteextrascompat',
    'concat:sorting',

    'uglify:all',
    'uglify:allcompat',
    'uglify:basic',
    'uglify:modern',
    'uglify:backpressure',
    'uglify:aggregates',
    'uglify:asyncCompat',
    'uglify:asyncModern',
    'uglify:binding',
    'uglify:coincidence',
    'uglify:experimental',
    'uglify:joinpatterns',
    'uglify:testing',
    'uglify:time',
    'uglify:virtualtime',
    'uglify:lite',
    'uglify:litecompat',
    'uglify:liteextras',
    'uglify:liteextrascompat',
    'uglify:sorting',

    'copy:rxlite',
    'copy:rxlitecompat',
    'copy:rxliteextras',
    'copy:rxliteextrascompat',

    'qunit'
  ]);
};
