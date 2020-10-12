class NoteList {
  constructor() {
    this.noteList = [];
  }
  view() {
    return this.noteList[0];
  }
  add(note) {
    var newNote = new Note(note);
    this.noteList.push(newNote);
  }
}
