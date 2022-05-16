import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  private lightswitch: boolean = false
  private subject = new Subject();

  toggleLightswitch(): void {
    this.lightswitch = !this.lightswitch
    this.subject.next(this.lightswitch)
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
