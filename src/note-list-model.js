class NoteList {
  constructor() {
    this.noteList = [];
  }

  view() {
    var notes = this.noteList;

    for (var index = 0; index <= notes.length; index++) {
      console.log(notes);
      return notes[index];
    }
  }

  add(note) {
    this.noteList.push(note);
  }
}
