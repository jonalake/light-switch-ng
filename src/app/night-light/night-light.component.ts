import { Component } from '@angular/core';
import { SwitchService } from "../switch.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-night-light',
  templateUrl: './night-light.component.html',
  styleUrls: ['./night-light.component.css']
})
export class NightLightComponent {
  lightswitch: boolean = false;
  subscription: Subscription;

  constructor(private switchService: SwitchService) {
    this.subscription = this.switchService.onToggle().subscribe(value => this.lightswitch = value)
  }
  toggle() {
    this.switchService.toggleLightswitch()
  }

}
