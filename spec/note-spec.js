(function() {
  describe("Note", function() {
    beforeEach(function() {
      this.note = new Note;
      this.note.title = "This is a new note title";
      return this.note.body = "This is a new note body";
    });
    it("should have a defined title", function() {
      return (expect(this.note.title)).toBeDefined;
    });
    it("should have a defined body", function() {
      return (expect(this.note.body)).toBeDefined;
    });
    it("should return expected title", function() {
      return (expect(this.note.title)).toBe("This is a new note title");
    });
    it("should return expected body", function() {
      return (expect(this.note.body)).toBe("This is a new note body");
    });
    it("should not return wrong title", function() {
      return (expect(this.note.body)).not.toBe("This is not the title");
    });
    return it("should not return wrong body", function() {
      return (expect(this.note.body)).not.toBe("This is not the body");
    });
  });
  describe("NoteCollection", function() {
    beforeEach(function() {
      this.note1 = new Note("this is note 1", "note 1 body");
      return this.note2 = new Note("this is note 2", "note 2 body");
    });
    return describe("beginning from a blank array", function() {
      beforeEach(function() {
        return this.note_collection = new NoteCollection;
      });
      it("adds a single note", function() {
        this.note_collection.add(this.note1);
        return (expect(this.note_collection.notes.length)).toEqual(1);
      });
      return it("adds multiple notes", function() {
        this.note_collection.add(this.note1, this.note2);
        return (expect(this.note_collection.notes.length)).toEqual(2);
      });
    });
  });
}).call(this);
