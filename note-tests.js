// const { assert } = require("./test-lib");

// function testNoteContainsText() {
//   var note = new Note("I smell bad!");
//   console.log("test");
//   assert.isTrue(note.text("I smell good!"));
// }
// testNoteContainsText();

function testNoteContainsText() {
  var note = new Note();
  note.text("I smell good!");
  assert.isEqual(note.text("I smell good!"), "I smell good!");
}
testNoteContainsText();
