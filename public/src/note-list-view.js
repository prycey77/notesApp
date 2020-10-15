"use strict";

class noteListView {
  constructor(noteListVar) {
    this.noteList = noteListVar;
  }

  returnNoteList() {
    return this.noteList.noteList;
  }

  output() {
    var htmlString = "<ul>";

    var notes = this.returnNoteList();
    var noteLength = notes.length;

    for (var index = 0; index < noteLength; index++) {
      htmlString += "<li><div>" + notes[index].substring(0, 20) + "</div></li>";
    }
    if (index == noteLength) {
      htmlString += "</ul>";
    }

    return htmlString;
  }
}
