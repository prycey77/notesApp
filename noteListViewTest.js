class NoteListViewTest {
  testHtmlOutput() {
    var noteList = new NoteList();
    noteList.add("test text");
    noteList.add("test text 2");

    assert.isTrue(
      "NoteListHtml outputs correctly",
      noteListView.output ===
        "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>"
    );
  }
}
