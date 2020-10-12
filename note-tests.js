var assert = require("./test-lib.js").assert;

function testNoteContainsText() {
  var note = new Note("I smell bad!");
  assert.isTrue(note.text("I smell bad!"));
}
testNoteContainsText();
