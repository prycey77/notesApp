class NoteList {
  constructor() {
    this.noteList = [];
  }

  view() {
    var notes = this.noteList;

    for(var index = 0; index <= notes.length-1; index++) {
      return notes[index]
    }
  }

  add(note) {
    this.noteList.push(note);
  }

}
