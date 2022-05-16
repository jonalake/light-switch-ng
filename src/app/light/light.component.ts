import { Component } from '@angular/core';
import { SwitchService } from '../switch.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent {
  switchState: boolean = false;
  subscription: Subscription;
  constructor(private switchService: SwitchService) {
    this.subscription = this.switchService.onToggle().subscribe(value => this.switchState = value)
  }


}
