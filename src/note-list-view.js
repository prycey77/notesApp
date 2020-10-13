"use strict";

class noteListView {  
  
  constructor(noteListVar) {  
    this.notelist = noteListVar
  }

  // returnNoteList() {
  //   return this.noteList.view()
  // }

  output() {
    var htmlString = "<ul>"
    
    var notes = this.notelist

    for(var index = 0; index <= notes.length-1; index++) {
      htmlString += "<li><div>" + notes[index] + "</div></li>"
    }
    if(index == notes.length-1) 
    { htmlString += "</ul>" }

    return htmlString
  }

}
