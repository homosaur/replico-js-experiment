(function() {
  jQuery(function() {
    var source, template;
    source = ($('#note-template')).html();
    template = Handlebars.compile(source);
    ($('#title-entry')).focus();
    return ($('#note-entry')).submit(function(event) {
      var note;
      event.preventDefault();
      note = new Note(($('#title-entry', '#body-entry')).val());
      ($('ul#note-collection')).html(template(note.toJSON()));
      return ($('#title-entry', '#body-entry')).val('');
    });
  });
}).call(this);
