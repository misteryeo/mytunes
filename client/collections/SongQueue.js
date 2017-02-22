// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  
  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.dequeue, this);
  },
  enqueue: function() {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.at(0).play();
  },

  dequeue: function() {
    this.remove(this.at(0));
    if (this.models.length > 0) {
      this.playFirst();
    }
  }
  
});

