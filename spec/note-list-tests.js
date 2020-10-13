class noteListTest {

  static testView() {
    var noteList = new NoteList();
    noteList.add("I smell really bad!");

    assert.isTrue(
      "NoteList returns a note - looped",
      noteList.view() === "I smell really bad!"
    )
  }

}

noteListTest.testView()
