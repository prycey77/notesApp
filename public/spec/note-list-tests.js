class noteListTest {
  static testView() {
    var noteList = new NoteList();
    noteList.add("I smell really bad!");

    return assert.isEqual(
      "NoteList returns a note - looped",
      "I smell really bad!",
      "I smell really bad!",
      noteList.view()
    );
  }
  static testNoteId() {
    var noteList = new NoteList();
    noteList.add("I smell really bad!");
    noteList.add("I smell really really bad!");
    return assert.isTrue(
      "2 notes have different ids",
      noteList.noteList[0].id !== noteList.noteList[1].id
    );
  }
}

noteListTest.testView();
