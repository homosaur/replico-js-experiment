window.Note = class Note
  constructor: (@title, @body) ->
  
  toJSON: -> 
    title: @title
    body: @body
    
window.NoteCollection = class NoteCollection
  constructor: ->
    @notes = []
    
  add: (notes...) -> @notes.push notes...
  
  toJSON: ->
    notes: note.toJSON() for note in @notes