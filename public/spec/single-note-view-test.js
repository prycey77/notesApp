class SingleNoteViewTest {
  static testSingleNoteView() {
    var noteview = new Note("test note");
    var singlenote = new SingleNoteView(noteview);
    assert.isTrue(
      "SingleNoteView can be instantiated",
      singlenote instanceof SingleNoteView
    );
  }
}
SingleNoteViewTest.testSingleNoteView();
