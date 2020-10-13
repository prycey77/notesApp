class NoteListViewTest {
  static testHtmlOutput() {
    var noteListVar = new NoteList();

    noteListVar.add("Favourite food: pesto");
    noteListVar.add("Favourite drink: seltzer");
    // noteListVar.add("Favourite drink: tea");
    // noteListVar.add("Favourite drink: beer");
    var noteListViewVar = new noteListView(noteListVar);

    assert.isTrue(
      "NoteListHtml outputs correctly",
      noteListViewVar.output() ==
        "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>"
    );
  }
}
// console.log(noteListViewVar.output())
NoteListViewTest.testHtmlOutput();
