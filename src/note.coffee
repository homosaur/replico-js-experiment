window.Note = class Note
  constructor: (@title, @body) ->
  
  toJSON: -> 
    title: @title
    body: @body
    