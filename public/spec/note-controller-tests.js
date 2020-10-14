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
    // }
    // static testInnerHtml() {
    //   var double = new noteListDouble();
    //   var controller = new noteController();
    //   var testDouble = double.test;
    //   var realTest = controller(testDouble);
    //   assert.isTrue(
    //     realTest.view === ["<ul><li><div>Favourite food: pesto</div></li></ul>"]
    //   );
    // }
  }
}

noteControllerTest.testNoteController();
// noteControllerTest.testInnerHtml();
