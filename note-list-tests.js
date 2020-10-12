function testAddingNoteObjects() {
  var noteList = new NoteList();
  noteList.add("I smell really bad!");

  assert.isEqualTo(noteList.view()["text"], "I smell really bad!");
}

testAddingNoteObjects();
