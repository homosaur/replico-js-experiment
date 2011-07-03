(function() {
  describe("Note", function() {
    beforeEach(function() {
      this.note = new Note;
      this.note.title = "This is a new note title";
      return this.note.body = "This is a new note body";
    });
    it("should have a defined title", function() {
      return expect(this.note.title).toBeDefined;
    });
    it("should have a defined body", function() {
      return expect(this.note.body).toBeDefined;
    });
    it("should return expected title", function() {
      return expect(this.note.title).toBe("This is a new note title");
    });
    it("should return expected body", function() {
      return expect(this.note.body).toBe("This is a new note body");
    });
    it("should not return wrong title", function() {
      return expect(this.note.body).not.toBe("This is not the title");
    });
    return it("should not return wrong body", function() {
      return expect(this.note.body).not.toBe("This is not the body");
    });
  });
}).call(this);
