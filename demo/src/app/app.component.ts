import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
  allowedTypes: any;

  constructor() {
    // this.allowedTypes = [ 'text/markdown' ];
    this.allowedTypes = [];
  }

  onUploadFiles(data: any) {
    console.log('$: ', data);
  }
}
