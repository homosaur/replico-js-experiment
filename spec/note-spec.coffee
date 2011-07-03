describe "Note", ->
  beforeEach ->
    @note       = new Note 
    @note.title = "This is a new note title"
    @note.body  = "This is a new note body"

  it "should have a defined title", ->
    expect(@note.title).toBeDefined
    
  it "should have a defined body", ->
    expect(@note.body).toBeDefined
    
  it "should return expected title", ->
    expect(@note.title).toBe "This is a new note title"

  it "should return expected body", ->
    expect(@note.body).toBe "This is a new note body"

  it "should not return wrong title", ->
    expect(@note.body).not.toBe "This is not the title"
    
  it "should not return wrong body", ->
    expect(@note.body).not.toBe "This is not the body"
