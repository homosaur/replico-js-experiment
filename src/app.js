(function() {
  jQuery(function() {
    var note_collection, source, template;
    note_collection = new NoteCollection;
    source = ($('#note-template')).html();
    template = Handlebars.compile(source);
    ($('#title-entry')).focus();
    return ($('#note-entry')).submit(function(event) {
      var body, note, title;
      event.preventDefault();
      title = ($('#title-entry')).val();
      body = ($('#body-entry')).val();
      note = new Note(title, body);
      note_collection.add(note);
      ($('div#note-collection')).html(template(note_collection.toJSON()));
      ($('#title-entry')).val('').focus();
      return ($('#body-entry')).val('');
    });
  });
}).call(this);
