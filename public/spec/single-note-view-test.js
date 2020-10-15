class SingleNoteViewTest {
  static testSingleNoteView() {
    var noteview = new Note("test note");
    var singlenote = new SingleNoteView(noteview);
    assert.isTrue(
      "SingleNoteView can be instantiated",
      singlenote instanceof SingleNoteView
    );
  }

  static testReturnHtml() {
    var noteview = new Note("Favourite drink: seltzer");
    var singlenote = new SingleNoteView(noteview);
    assert.isTrue(
      "Outputs note in a html div container",
      singlenote.returnHtml() === "<div>Favourite drink: seltzer</div>"
    );
  }
}

SingleNoteViewTest.testSingleNoteView();
SingleNoteViewTest.testReturnHtml();
