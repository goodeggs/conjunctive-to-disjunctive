# Conjunctive to Disjunctive

This function helps us deal with a mongodb performance issue around query
planning. (See also: https://jira.mongodb.org/browse/SERVER-13732)

:bug: :bug: :bug:

**NOTE: This bug has been fixed as of MongoDB 3.5.4.** Please don't use
this library if you're using recent Mongo, since the resulting code will
be unnecessarily confusing.

:bug: :bug: :bug:

Transforms queries that are expressed in Conjunctive Normal Form:
```js
{
  $and: [
   $or: [condition1, condition2]
   $or: [condition3, condition4]
   $or: [condition5, condition6]
}
```

...to Disjunctive Normal Form:
```js
{
  $or: [
    $and: [condition1, condition3, condition5]
    $and: [condition1, condition3, condition6]
    $and: [condition1, condition4, condition5]
    $and: [condition1, condition4, condition6]
    $and: [condition2, condition3, condition5]
    $and: [condition2, condition3, condition6]
    $and: [condition2, condition4, condition5]
    $and: [condition2, condition4, condition6]
  ]
}
```

Obviously, this could lead to an exponential explosion of possibilities in the
`$or`, so please, go easy.

Here's a usage example:
```js
import conjunctiveToDisjunctive from 'conjunctive-to-disjunctive';

const result = conjunctiveToDisjunctive([
  [{val: 1}, {val: 2}],
  [{foo: 'a', bar: 'b'}],
  [{quux: 'baz'}, {quux: 'bax'}],
]);

assert.deepEqual(result, [
  {val: 1, foo: 'a', bar: 'b', quux: 'baz'},
  {val: 1, foo: 'a', bar: 'b', quux: 'bax'},
  {val: 2, foo: 'a', bar: 'b', quux: 'baz'},
  {val: 2, foo: 'a', bar: 'b', quux: 'bax'},
]);
```
