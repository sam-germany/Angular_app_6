import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  multiple: boolean;
  crop: boolean;
}

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent implements OnInit {

  isHovering: boolean;
  files22: File [] = [];
  imageFile: File;
  isError: boolean;
  filesURLs: string[] = [];

  constructor(private dialogRef: MatDialogRef<FilesUploadComponent>,
                  @Inject(MAT_DIALOG_DATA) public data: DialogData  ) { }

  ngOnInit(): void { }

  toggleHover22(event: boolean): void {
    this.isHovering = event;
  }

  onDrop22(files: FileList): void {
       this.isError = false

    if(this.data.crop && files.length > 1) {
        this.isError = true;
        return;
    }

    if (this.data.crop && files.length  === 1 && files.item(0).type.split('/')[0] === 'image') {
                  this.imageFile = files.item(0);
                  return;
    }


    for( let i = 0; i < files.length; i++) {
      this.files22.push(files.item(i));
    }

    console.log(files);
  }

  onCrop(file: File): void {
    this.imageFile = null;
    this.files22.push(file);
  }

  onUploadComplete22(url: string): void {
     this.filesURLs.push(url);
  }

  onComplete(): void {
     const res = this.data.multiple ? this.filesURLs : this.filesURLs[0];
     this.dialogRef.close(res);

  }

  onClose(): void {
     this.dialogRef.close();
  }

}