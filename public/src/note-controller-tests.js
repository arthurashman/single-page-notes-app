function testThingIsNoteControllerObject() {
  var noteList = new NoteList
  var noteController = new NoteController(noteList)
  assert.isTrue(noteController instanceof NoteController)
};
testThingIsNoteControllerObject();


function testControllerRendersNotesList() {
  
  function NoteDouble(text) {
    this.text = text
  };

  var noteDouble = new NoteDouble("test note")

  function NoteListDouble() {};
  NoteListDouble.prototype = {
    add: function(notetext) {},
    returnList: function() { return [noteDouble] }
  }
 
 
  var noteListDouble = new NoteListDouble
  noteListDouble.add(noteDouble.text)

  function ElementDouble() {
    this.innerHtml = '';
  };

  var elementDouble = new ElementDouble
  var noteController = new NoteController(noteListDouble)
  var newHtml = noteController.renderHtml(elementDouble)

  assert.isTrue(newHtml === "<ul><li>test note...</li></ul>")
};
testControllerRendersNotesList();
