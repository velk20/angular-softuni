import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(
    AppModule
    // { ngZone: 'noop' } for disabling the change detector
  )
  .catch((err) => console.error(err));

// //Normal
// console.log('123');

// //Monkey patching
// const originalLog = console.log; // creates a copy
// console.log = (...args) => {
//   //calling old method
//   originalLog(...args);

//   //any other logic
//   console.warn('This method is monkey patched!');
// };

// //log
// console.log('321');
