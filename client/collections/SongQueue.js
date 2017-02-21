// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  
  initialize: function() {
    this.on('add', function() {
      if (this.models.length === 1) {
        this.playFirst();
      } else {
        return;
      }      
    });
    this.on('ended', this.removeAtEnd);
    this.on('dequeue', this.removeAtEnd); // Mr Brodie is worried that dequeued actually means you can remove any song from the song at any location.
  },

  playFirst: function() {
    this.at(0).play();
  },

  removeAtEnd: function() {
    this.remove(this.at(0));
    if (this.models.length > 0) {
      this.playFirst();
    }
  }
  
});