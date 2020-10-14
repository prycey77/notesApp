class noteController {
  // window.onload = function () {

  constructor(noteListModel) {
    this.noteListModel = noteListModel;
  }

  view() {
    window.onload = function () {
      var element = document.getElementById("app");

      element.innerHTML = noteListViewVar.output();
    };
  }
}

var noteListVar = new NoteList();
noteListVar.add("Favourite food: Curry");
noteListVar.add("Favourite drink: Petrol");
var noteListViewVar = new noteListView(noteListVar);
var test = new noteController(noteListViewVar);

test.view();
