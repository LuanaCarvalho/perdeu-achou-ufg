Meteor.startup(function () {
  initdb();
});

initdb = function () {
  declareRules();
};
