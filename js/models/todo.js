// js/models/todo.js

/*This particular pattern when seen at the top of files is used to create a namespace, i.e. a named object under which functions and variables can be created without unduly polluting the global object.*/
  var app = app || {};

  // Todo Model
  // ----------
  // Our basic **Todo** model has `title` and `completed` attributes.

  app.Todo = Backbone.Model.extend({

    // Default attributes ensure that each todo created has `title` and `completed` keys.
    defaults: {
      title: '',
      completed: false
    },

    // Toggle the `completed` state of this todo item.
    toggle: function() {
      this.save({
        completed: !this.get('completed')  // JavaScript knows that this is meant !(this.get('completed'))
      });
    }

  });
