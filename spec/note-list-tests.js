class noteListTest {

  static testView2() {
    var noteList = new NoteList();
    noteList.add("I smell really bad!");

    assert.isTrue(
      "NoteList returns a note - looped",
      noteList.view()[0] === "I smell really bad!"
    )
  }

}

noteListTest.testView2()
