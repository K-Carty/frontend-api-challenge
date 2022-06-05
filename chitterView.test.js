/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
//  const chitterModel = require('./chitterModel')
 const chitterApi = require('./chitterApi')
 const chitterView = require('./chitterView');
 
 require('jest-fetch-mock').enableMocks()
 
 describe('chitterApp page', () => {
   it('displays the list of peeps', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
 
     const view = new chitterView();
     view.displayPeeps();
     expect(document.querySelectorAll('div.note').length).toBe(1)
   });
 });
 