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
  noteFinder(id) {
   // this.notelistView.noteList.noteList.reduce(a => a.id == id)
     return this.notelistView.noteList.noteList.filter(a => a.id == id)[0].text
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
// controller.noteFinder(1)
