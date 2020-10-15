class SingleNoteView {
  constructor(note) {
    this.note = note;
  }

  returnHtml() {
    return `<div>${this.note.text}</div>`;
  }
}
