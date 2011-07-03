(function() {
  jQuery(function() {
    var source, template;
    source = ($('#note-template')).html();
    template = Handlebars.compile(source);
    ($('#title-entry')).focus();
    return ($('#note-entry')).submit(function(event) {
      var body, note, title;
      event.preventDefault();
      title = ($('#title-entry')).val();
      body = ($('#body-entry')).val();
      note = new Note(title, body);
      ($('ul#note-collection')).html(template(note.toJSON()));
      ($('#title-entry')).val('');
      return ($('#body-entry')).val('');
    });
  });
}).call(this);
