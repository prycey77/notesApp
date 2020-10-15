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
   console.log(this.notelistModel.noteList.reduce(function(note){return note.id == id}))
     return this.notelistModel.noteList.reduce(function(note){return note.id == id}).text //.filter(a => a.id != 1).text
     //this.notelistView.noteList.noteList.filter(a => a.id == id).text
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
 