jQuery ->
  source    = ($ '#note-template').html()
  template  = Handlebars.compile source
  
  ($ '#title-entry').focus()
  
  ($ '#note-entry').submit (event) ->
    event.preventDefault()
     
    title = ($ '#title-entry').val()
    body = ($ '#body-entry').val()
    note = new Note(title, body)
    
    ($ 'ul#note-collection').html template note.toJSON()
    
    ($ '#title-entry').val('')
    ($ '#body-entry').val('')
    