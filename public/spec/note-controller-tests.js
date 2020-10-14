class noteListDouble {
  static test() {
    return ["<ul><li><div>Favourite food: pesto</div></li></ul>"];
  }
}

class noteControllerTest {
  static testNoteController() {
    var controller = new noteController();

    assert.isTrue(
      "noteController can be instantiated",
      controller instanceof noteController
    );
  }
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
}

var noteListVar = new NoteList();
noteListVar.add("Favourite food: Curry");
noteListVar.add("Favourite drink: Petrol");
var noteListViewVar = new noteListView(noteListVar);
var test = new noteController(noteListViewVar);

test.view();

noteControllerTest.testNoteController();
// noteControllerTest.testInnerHtml();
