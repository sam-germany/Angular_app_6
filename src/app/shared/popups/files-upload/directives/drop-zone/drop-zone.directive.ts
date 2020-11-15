import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {

  @Output() dropped22 = new EventEmitter<FileList>();
  @Output() hovered22 = new EventEmitter<boolean>();

  constructor() { }


  @HostListener('drop', ['$event'])
  onDrop22($event) {
      $event.preventDefault();
      this.dropped22.emit($event.dataTransfer.files);
      this.hovered22.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver22($event) {
      $event.preventDefault();
      this.hovered22.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave22($event) {
      $event.preventDefault();
      this.hovered22.emit(false);
  }


}
