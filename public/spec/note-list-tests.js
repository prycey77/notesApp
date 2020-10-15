class noteListTest {

  static testView() {
    var noteList = new NoteList();
    noteList.add("I smell really bad!");

  return  assert.isEqual(
      "NoteList returns a note - looped", "I smell really bad!", "I smell really bad!",
      noteList.view()  
    )
  }

}

noteListTest.testView()
