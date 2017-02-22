// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  
  events: {
    'click': function() {
      this.model.dequeue;
    } //whats the syntax here?  in the video he wraps it in an anonymous function and calls it
  },

  initialize: function() {
    this.on('enqueue', this.render, this);
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
