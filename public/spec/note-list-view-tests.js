class NoteListViewTest {
  static testHtmlOutput() {
    var noteListVar = new NoteList();
    var noteListViewVar = new noteListView(noteListVar)
    noteListViewVar.noteList.add("Favourite food: pesto")
    noteListViewVar.noteList.add("Favourite drink: seltzer")
    // noteListVar.add("Favourite food: pesto");
    // noteListVar.add("Favourite drink: seltzer");
    // var noteListViewVar = new noteListView(noteListVar);

   return assert.isTrue(
      "NoteListHtml outputs correctly",
      noteListViewVar.output() ==
        "<ul><li><div>Favourite food: pest</div></li><li><div>Favourite drink: sel</div></li></ul>"
    );
  }
  static testUpToTwenty;
}
NoteListViewTest.testHtmlOutput();
