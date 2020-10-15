class noteController {
  // window.onload = function () {

  constructor(noteListModel) {
    this.notelistModel = noteListModel;
    this.notelistModel.add("This is a note");
    this.notelistView = new noteListView(this.notelistModel);
  }

  view() {
    var element = document.getElementById("app");
    element.innerHTML = this.notelistView.output();
  }

  // view() {
  //   return this.notelistView.output()
  // }

  // insertOnPage() {
  //  var element = document.getElementById("app");
  //  console.log(this)
  //  element.innerHTML = this.view();
  // }
}

var listmodel = new NoteList();
var controller = new noteController(listmodel);
controller.view();
