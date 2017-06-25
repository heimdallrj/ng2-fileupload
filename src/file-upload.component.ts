import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'file-upload',
  templateUrl: 'file-upload.component.html',
  styleUrls: [ 'file-upload.component.css' ]
})

export class FileUpload {
  status: string;

  @Output() onUploadFiles = new EventEmitter<any>();

  constructor() {
    this.reset();
  }

  ngOnInit() {}

  onDragEnter(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();

    this.status = evt.type;
  }

  onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();

    this.status = evt.type;
  }

  onDrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();

    this.status = evt.type;

    // fetch files
    const files = evt.dataTransfer.files;
    console.log(files);

    this.onUploadFiles.emit(files);
    this.reset();
  }

  reset() {
    this.status = 'ready';
  }
};
