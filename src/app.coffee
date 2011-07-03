jQuery ->
  note_collection = new NoteCollection
  source          = ($ '#note-template').html()
  template        = Handlebars.compile source
  
  ($ '#title-entry').focus()
  
  ($ '#note-entry').submit (event) ->
    event.preventDefault()
     
    title = ($ '#title-entry').val()
    body = ($ '#body-entry').val()
    note = new Note(title, body)
    note_collection.add note
    
    ($ 'div#note-collection').html template note_collection.toJSON()
    
    ($ '#title-entry').val('').focus()
    ($ '#body-entry').val('')