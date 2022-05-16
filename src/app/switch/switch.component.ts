import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent  {
  @Input() text: string = ""
  @Output() toggle = new EventEmitter()
  onClick() {
    this.toggle.emit();
  }
}
