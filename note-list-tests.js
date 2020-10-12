
function testAddingNoteObjects() {
    var note = new Note();
    NotesList.addNote(note);
    assert.isEqualTo(NoteList.notes)
  }
  testNoteContainsText();