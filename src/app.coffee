jQuery ->
  source    = ($ '#note-template').html()
  template  = Handlebars.compile source
  
  ($ '#title-entry').focus()
  
  ($ '#note-entry').submit (event) ->
    event.preventDefault()
    
    note = new Note ($ '#title-entry', '#body-entry').val()   
    
    ($ 'ul#note-collection').html template note.toJSON()
    ($ '#title-entry', '#body-entry').val ''
    