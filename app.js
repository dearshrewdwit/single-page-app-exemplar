import { FormComponent } from './components/form-component.js';
import { NoteListComponent } from './components/noteList-component.js';
import { AppComponent } from './components/app-component.js';

window.addEventListener('load', function() {
  let components = [
    new FormComponent({}),
    new NoteListComponent({notes: []})
  ]
  let element = document.getElementById('app')
  let appComponent = new AppComponent({element: element, components: components})

  appComponent.render()
})
