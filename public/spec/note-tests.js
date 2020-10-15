class noteTests{
static testNoteContainsText() {
  var note = new Note("I smell good!");
  // note.addNote("I smell good!");
 return assert.isEqual("Test note contains text",  "I smell good!", note.text);
}}
// testNoteContainsText();
