export function NoteComponent(state) {
  this.state = state
}

NoteComponent.prototype = {
  render: function() {
    return [
      "<p>",
        this.state.note,
      "</p>"
    ].join('')
  }
}
