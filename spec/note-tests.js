function testNoteContainsText() {
  var note = new Note("I smell good!");
  // note.addNote("I smell good!");
  assert.isTrue("Test note contains text", note.text === "I smell good!");
}
testNoteContainsText();
