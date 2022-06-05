console.log('The notes app is running');

const chitterModel = require('./noteModel');
const chitterView = require('./NotesView')
const chitterApi = require('./NotesApi')

api = new chitterApi
view = new chitterView(api, model);

api.loadPeeps((Peeps) => {
    model.setPeeps();
    view.displayPeeps(Peeps);
  });