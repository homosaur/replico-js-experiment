(function() {
  var Note, NoteCollection;
  var __slice = Array.prototype.slice;
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
  window.NoteCollection = NoteCollection = (function() {
    function NoteCollection() {
      this.notes = [];
    }
    NoteCollection.prototype.add = function() {
      var notes, _ref;
      notes = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref = this.notes).push.apply(_ref, notes);
    };
    NoteCollection.prototype.toJSON = function() {
      var note;
      return {
        notes: (function() {
          var _i, _len, _ref, _results;
          _ref = this.notes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            note = _ref[_i];
            _results.push(note.toJSON());
          }
          return _results;
        }).call(this)
      };
    };
    return NoteCollection;
  })();
}).call(this);
