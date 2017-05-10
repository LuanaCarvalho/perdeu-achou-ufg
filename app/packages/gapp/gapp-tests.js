// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by gapp.js.
import { name as packageName } from "meteor/gapp";

// Write your tests here!
// Here is an example.
Tinytest.add('gapp - example', function (test) {
  test.equal(packageName, "gapp");
});
