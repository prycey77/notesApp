
function testNoteContainsText() {
  var note = new Note;
  assert.isTrue(note.text("I smell bad!"));
}
testNoteContainsText();
