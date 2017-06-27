
# ng2-fileupload

Simpler file upload implementation for angular2 apps.

> This library is under development. We love to hear from anyone who wish to contribute.

## Installation

```
npm install ng2-fileupload
```

## Usage

example.module.ts
```
import { FileUpload } from 'ng2-fileupload';

@NgModule({
  declarations: [
    ExampleComponent,
    FileUpload
  ],
})
```

example.component.ts
```
export class ExampleComponent {
  allowedTypes: any;
  
  constructor() {
    this.allowedTypes = [ 'text/markdown' ];
  }

  onUploadFiles(evt: any) {
    if (evt.error) {
        throw evt.error;
    }

    const files = evt.files;
    // You can run upload script here
  }
}
```

example.component.html
```
<file-upload
  [allowedTypes]="allowedTypes"
  allowedSize="15" // MB
  (onUploadFiles)="onUploadFiles($event)"
>
</file-upload>
```

## Contribution Guide

### Setting up the development environment

```
git clone git@github.com:thinkholic/ng2-fileupload.git
cd ng2-fileupload
npm install
npm run build
```

#### Demo

```
npm install angular-cli -g
cd demo
ng serve
```
Demo app will be running on [http://localhost:4200/](http://localhost:4200/)

## License

MIT
