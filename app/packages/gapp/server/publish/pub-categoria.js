 Meteor.publish('categoriaList', function tasksPublication() {
    return App.query.categoriaList();
  });