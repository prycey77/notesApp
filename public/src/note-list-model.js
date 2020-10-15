class NoteList {
  constructor() {
    this.noteId = 0;
    this.noteList = [];
  }

  view() {
    var notes = this.noteList;

    for (var index = 0; index <= notes.length; index++) {
      //return
      console.log(notes[index]);
    }
  }

  add(noteString) {
    this.noteId++;

    this.noteList.push(new Note(noteString, this.noteId));
  }
}
