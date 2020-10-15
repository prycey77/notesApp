class noteListDouble {
  static test() {
    return ["<ul><li><div>Favourite food: pesto</div></li></ul>"];
  }
}

class noteControllerTest {
  static testNoteController() {
    var notelistmodel = new NoteList();

    var controller = new noteController(notelistmodel);

  return  assert.isTrue(
      "noteController can be instantiated",
      controller instanceof noteController
    );
  }
}
noteControllerTest.testNoteController();

// static testView() {
//   var notelist = new NoteList();
//   notelist.add("This is a note");
//   var notecontroller = new noteController(notelist)
//   notecontroller.insertOnPage();
// console.log(document.getElementById('app').innerHTML)
//asserts.isTrue(document.getElementById('app').innerHTML === )

//static testInnerHtml() {
// var double = new noteListDouble();
//var controller = new noteController();
//   var testDouble = double.test;
//   var realTest = controller(testDouble);
// assert.isTrue(
//   controller("<ul><li><div>Favourite food: pesto</div></li></ul>"),
//   document.getElementById("app")
// );
// }
// }

// var noteListVar = new NoteList();
// noteListVar.add("Favourite food: Curry");
// noteListVar.add("Favourite drink: Petrol");
// var noteListViewVar = new noteListView(noteListVar);
// var test = new noteController(noteListViewVar);

// noteControllerTest.testView();

// noteControllerTest.testInnerHtml();
