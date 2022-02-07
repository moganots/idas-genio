import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
})
export class TextEditorComponent implements OnInit, OnChanges {
  @Input() value: any;
  @ViewChild('editor') editor: ElementRef;
  @Output() valueChange = new EventEmitter();

  ngOnInit() {
    document.execCommand('styleWithCSS', false, null);
    this.editor.nativeElement.innerHTML = this.value;
    console.log(this.value)
  }
  ngOnChanges(changes: any) {
    try {
      console.log(changes);
      if (this.editor.nativeElement.innerHTML !== this.value) {
        this.editor.nativeElement.innerHTML = this.value;
      }
    } catch (err) {}
  }

  exec(a, b = null) {
    document.execCommand(a, false, b);
  }

  onInput(newValue) {
    this.valueChange.emit(newValue);
  }
}
