function testAddingNoteObjects() {
  var noteList = new NoteList();
  noteList.add("I smell really bad!");

  assert.isTrue(
    "NoteList returns a note",
    noteList.view()["text"] === "I smell really bad!"
  );
}

testAddingNoteObjects();
