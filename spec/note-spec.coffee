describe "Note", ->
  beforeEach ->
    @note       = new Note 
    @note.title = "This is a new note title"
    @note.body  = "This is a new note body"

  # does the object work correctly?  
  it "should have a defined title", ->
    (expect @note.title).toBeDefined
    
  it "should have a defined body", ->
    (expect @note.body).toBeDefined
    
  it "should return expected title", ->
    (expect @note.title).toBe "This is a new note title"

  it "should return expected body", ->
    (expect @note.body).toBe "This is a new note body"

  it "should not return wrong title", ->
    (expect @note.body).not.toBe "This is not the title"
    
  it "should not return wrong body", ->
    (expect @note.body).not.toBe "This is not the body"
    
describe "NoteCollection", ->
  beforeEach ->
    @note1 = new Note("this is note 1", "note 1 body")
    @note2 = new Note("this is note 2", "note 2 body")
    
  describe "beginning from a blank array", ->
    
    beforeEach ->
      @note_collection = new NoteCollection
    
    it "adds a single note", ->
      @note_collection.add @note1
      (expect @note_collection.notes.length).toEqual(1)
      
    it "adds multiple notes", -> #you can't do this from the interface, for app only
      @note_collection.add @note1, @note2
      (expect @note_collection.notes.length).toEqual(2)
