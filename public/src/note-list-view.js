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
    console.log(this.returnNoteList());
    console.log(this.returnNoteList().length);
    var notes = this.returnNoteList();
    var noteLength = notes.length;

    for (var index = 0; index <= noteLength - 1; index++) {
      htmlString +=
        '<li><div><a href="#notes/' +
        notes[index].id +
        '">' +
        notes[index].text.substring(0, 20) +
        '</a><div id="' + notes[index].id + '"></div></div></li>';
    }
    if (index == noteLength) {
      htmlString += "</ul>";
    }

    return htmlString;
  }
}
