import { NoteComponent } from './note-component.js';

export function NoteListComponent(state) {
  this.state = state

  this._setup()
}

NoteListComponent.prototype = {
  _setup: function() {
    let self = this
    window.addEventListener('submit', function(event) {
      event.preventDefault()
      self.state.notes.push(event.target[0].value)
      self.update()
    })
  },

  update: function() {
    document.getElementById('noteList-component').outerHTML = this.render()
  },
  
  render: function() {
    return [
      "<ul id='noteList-component'>",
      this.state.notes.map(function(note) {
        return "<li>" + new NoteComponent({note: note}).render() + "</li>"
      }).join(''),
      "</ul>"
    ].join('')
  }
}
