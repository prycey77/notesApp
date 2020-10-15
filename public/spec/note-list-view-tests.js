class NoteListViewTest {
  static testHtmlOutput() {
    var noteListVar = new NoteList();

    noteListVar.add("Favourite food: pesto");
    noteListVar.add("Favourite drink: seltzer");
    var noteListViewVar = new noteListView(noteListVar);

    assert.isTrue(
      "NoteListHtml outputs correctly",
      noteListViewVar.output() ==
        "<ul><li><div>Favourite food: pest</div></li><li><div>Favourite drink: sel</div></li></ul>"
    );
  }
  static testUpToTwenty;
}
NoteListViewTest.testHtmlOutput();
