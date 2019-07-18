export function AppComponent(state) {
  this.state = state
}

AppComponent.prototype = {
  render: function() {
    this.state.element.innerHTML = this.state.components.map(function(component) {
      return component.render();
    }).join('')
  }
}
