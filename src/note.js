(function() {
  var Note;
  window.Note = Note = (function() {
    function Note(title, body) {
      this.title = title;
      this.body = body;
    }
    Note.prototype.toJSON = function() {
      return {
        title: this.title,
        body: this.body
      };
    };
    return Note;
  })();
}).call(this);
