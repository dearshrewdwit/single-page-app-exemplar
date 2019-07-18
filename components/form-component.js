export function FormComponent(state) {
  this.state = state
}

FormComponent.prototype = {
  render: function() {
    return [
      "<form>",
        "<input type='text'>",
        "<input type='submit'>",
      "</form>"
    ].join('')
  }
}
