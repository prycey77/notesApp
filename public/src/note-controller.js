window.onload = function () {
  var noteListVar = new NoteList();

  noteListVar.add("Favourite food: pesto");
  noteListVar.add("Favourite drink: seltzer");
  var noteListViewVar = new noteListView(noteListVar);

  var element = document.getElementById("app");
  console.log(element);

  element.innerHTML = noteListViewVar.output();
};
